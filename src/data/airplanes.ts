import { z } from "zod";
import { ManufacturerSchema } from "./manufacturer";

const year = new Date().getFullYear();

export const AirplaneSchema = z.object({
  id: z.string(),
  slug: z.string(),
  family: z.string(),
  year: z
    .number()
    .int("Year must be an integer")
    .positive("Year must be positive")
    .min(1900, { message: "Year must be minimum of 1900" })
    .max(year, { message: "Year must be maximum of this year" }),
  manufacturerId: z.string(),
  manufacturer: ManufacturerSchema,
});

export const SeedAirplaneSchema = z.object({
  id: z.number(), // 1, 2, 3, etc.
  family: z.string().nonempty(), // A320, 737, etc.
  year: z // 1988, 1967, etc.
    .number()
    .int("Year must be an integer")
    .positive("Year must be positive")
    .min(1900, { message: "Year must be minimum of 1900" })
    .max(year, { message: "Year must be maximum of this year" }),
  manufacturer: z.string().nonempty(), // Airbus, Boeing, etc.
});

export type SeedAirplane = z.infer<typeof SeedAirplaneSchema>;

export const seedDataAirplanes: SeedAirplane[] = [
  {
    id: 1,
    family: "A320",
    year: 1988,
    manufacturer: "Airbus",
  },
  {
    id: 2,
    family: "737",
    year: 1967,
    manufacturer: "Boeing",
  },
];
