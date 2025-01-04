import { apiReference } from "@scalar/hono-api-reference";
import { AirplaneSchema, dataAirplanes } from "./data/airplanes";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const app = new OpenAPIHono();

// GET /airplanes
app.openapi(
  createRoute({
    method: "get",
    path: "/airplanes",
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
app.openapi(
  createRoute({
    method: "get",
    path: "/airplanes/:id",
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

app.doc("/openapi.json", {
  openapi: "3.1.1",
  info: {
    title: "Airplanes API",
    version: "1.0.0",
  },
});

app.get("/", apiReference({ spec: { url: "/openapi.json" } }));

export default app;
