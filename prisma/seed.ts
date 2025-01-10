import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

import { seedDataAirplanes } from "../src/data/airplanes";

const prisma = new PrismaClient();

async function seed() {
  for (const airplane of seedDataAirplanes) {
    const airplaneData = {
      slug: slugify(airplane.family),
      family: airplane.family,
      year: airplane.year,
      manufacturer: {
        connectOrCreate: {
          where: { slug: slugify(airplane.manufacturer) },
          create: {
            slug: slugify(airplane.manufacturer),
            name: airplane.manufacturer,
          },
        },
      },
    };

    const newAirplane = await prisma.airplane.upsert({
      where: { slug: slugify(airplane.family) },
      update: airplaneData,
      create: airplaneData,
      include: { manufacturer: { select: { name: true } } },
    });

    console.log(`✈️ ${newAirplane.manufacturer.name} ${newAirplane.family}`);
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
