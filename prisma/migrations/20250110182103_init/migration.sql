-- CreateTable
CREATE TABLE "Airplane" (
    "id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "year" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id")
);
