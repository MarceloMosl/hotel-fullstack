import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.hotel.createMany({
    data: [
      {
        name: "Hotel 1",
        image:
          "https://www.oetkercollection.com/media/42386/meu-projeto-2.jpg?anchor=center&mode=crop&quality=85&width=1000&height=500&rnd=133154133310000000",
      },
      {
        name: "Hotel 2",
        image:
          "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
      },
    ],
  });
}

main()
  .then(async () => {
    const result = await prisma.hotel.findMany({});
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma?.$disconnect();
  });
