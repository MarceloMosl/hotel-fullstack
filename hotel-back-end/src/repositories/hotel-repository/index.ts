import { prisma } from "@/config";
import { Booking } from "@prisma/client";

export async function gethotels() {
  return await prisma.hotel.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      Rooms: {
        select: {
          id: true,
          name: true,
          capacity: true,
        },
      },
    },
  });
}

export async function getRoomById(id: number) {
  return prisma.room.findFirst({
    where: { id },
    select: {
      name: true,
      capacity: true,
      Booking: {
        select: {
          startAt: true,
          endsAt: true,
        },
      },
      Hotel: {
        select: { name: true },
      },
    },
  });
}

const hotelsRepo = { gethotels };

export default hotelsRepo;
