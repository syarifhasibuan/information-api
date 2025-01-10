/*
  Warnings:

  - Made the column `slug` on table `Airplane` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Manufacturer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Airplane" ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Manufacturer" ALTER COLUMN "slug" SET NOT NULL;
