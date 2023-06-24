import { Prisma } from "@prisma/client";
import { prisma } from "@/config";

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function createSession(userId: number, token: string) {
  return prisma.session.create({
    data: { userId, token },
  });
}

const userRepository = {
  findByEmail,
  create,
  createSession,
};

export default userRepository;
