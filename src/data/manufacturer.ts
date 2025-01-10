import { z } from "zod";

export const ManufacturerSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
});
