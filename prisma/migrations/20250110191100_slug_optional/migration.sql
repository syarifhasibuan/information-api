/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Airplane` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Manufacturer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Airplane" ADD COLUMN     "slug" VARCHAR,
ALTER COLUMN "family" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Manufacturer" ADD COLUMN     "slug" VARCHAR;

-- CreateIndex
CREATE UNIQUE INDEX "Airplane_slug_key" ON "Airplane"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_slug_key" ON "Manufacturer"("slug");
