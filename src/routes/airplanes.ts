import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { AirplaneSchema, dataAirplanes } from "../data/airplanes";

export const airplanesRoute = new OpenAPIHono();

// GET /airplanes
airplanesRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        description: "Get all airplanes",
        content: { "application/json": { schema: z.array(AirplaneSchema) } },
      },
    },
  }),
  (c) => {
    return c.json(dataAirplanes);
  }
);

// GET /airplanes/:id
airplanesRoute.openapi(
  createRoute({
    method: "get",
    path: "/:id",
    request: {
      params: z.object({ id: z.coerce.number().int().positive() }),
    },
    responses: {
      404: { description: "Airplane not found" },
      200: {
        description: "Get one airplane by ID",
        content: { "application/json": { schema: AirplaneSchema } },
      },
    },
  }),
  (c) => {
    const { id } = c.req.valid("param");

    const airplane = dataAirplanes.find((airplane) => airplane.id === id);

    if (!airplane) return c.notFound();

    return c.json(airplane);
  }
);

// POST /airplanes

// DELETE /airplanes

// DELETE /airplanes/:id

// PUT or PATCH /airplanes/:id
