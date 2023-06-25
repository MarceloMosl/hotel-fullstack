import { Router } from "express";
import { usersPost } from "@/controllers";
import { signIn } from "@/controllers";
import { validateBody } from "@/middlewares/validation-middleware";
import { createUserSchema } from "@/schemas/user-schemas";

const usersRouter = Router();

usersRouter.post("/", validateBody(createUserSchema), usersPost);
usersRouter.post("/sign-in", validateBody(createUserSchema), signIn);

export { usersRouter };
