import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [{ emit: "stdout", level: "query" }],
});

const airplanes = await prisma.airplane.findMany({
  include: { manufacturer: { select: { name: true } } },
});

console.log(airplanes);
