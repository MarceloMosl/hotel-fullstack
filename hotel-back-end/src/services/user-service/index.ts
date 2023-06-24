import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser({
  email,
  password,
}: CreateUserParams): Promise<User> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw new Error("email/senha invalidos");
  }
}

export async function signIn(email: string, password: string) {
  const user = await userRepository.findByEmail(email);

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("email/senha incorreta");

  const { token } = await userRepository.createSession(
    user.id,
    jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
  );
  return token;
}

export type CreateUserParams = Pick<User, "email" | "password">;

const userService = {
  createUser,
  signIn,
};

export default userService;
