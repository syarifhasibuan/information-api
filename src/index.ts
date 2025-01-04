import { AirplaneSchema, dataAirplanes } from "./data/airplanes";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const app = new OpenAPIHono();

app.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        description: "Welcome message",
        content: {
          "application/json": {
            schema: z.object({ message: z.string(), openapi: z.string() }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      message: "Airplanes API",
      openapi: "/openapi.json",
    });
  }
);

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

app.openapi(
  createRoute({
    method: "get",
    path: "/airplanes/:id",
    params: {
      id: {
        description: "Airplane ID",
        required: true,
        schema: z.number(),
      },
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
    const id = Number(c.req.param("id"));
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

export default app;
