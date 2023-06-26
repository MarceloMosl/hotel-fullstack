import { Request, Response } from "express";
import httpStatus, { OK } from "http-status";
import userService from "@/services/user-service";

export async function usersPost(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userService.createUser({ email, password });
    return res.status(httpStatus.CREATED).send({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const token = await userService.signIn(email, password);
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(400).send(error);
  }
}
