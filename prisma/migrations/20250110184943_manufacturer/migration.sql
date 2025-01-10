/*
  Warnings:

  - You are about to drop the column `name` on the `Airplane` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Airplane" DROP COLUMN "name",
ADD COLUMN     "family" VARCHAR NOT NULL DEFAULT '000',
ADD COLUMN     "manufacturerId" VARCHAR;

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Airplane" ADD CONSTRAINT "Airplane_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
