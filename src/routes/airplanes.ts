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
airplanesRoute.openapi(
  createRoute({
    method: "post",
    path: "/",
    request: {
      body: {
        description: "Airplane to add",
        content: { "application/json": { schema: AirplaneSchema } },
      },
    },
    responses: {
      201: {
        description: "New airplane submitted",
        content: { "application/json": { schema: AirplaneSchema } },
      },
    },
  }),
  (c) => {
    const airplane = c.req.valid("json");

    airplane.id = dataAirplanes[dataAirplanes.length - 1].id + 1;
    dataAirplanes.push(airplane);

    return c.json(airplane);
  }
);

// DELETE /airplanes
airplanesRoute.openapi(
  createRoute({
    method: "delete",
    path: "/",
    responses: {
      200: {
        description: "All airplanes deleted",
      },
    },
  }),
  (c) => {
    dataAirplanes.length = 0;

    return c.json({
      message: "All airplanes deleted",
      airplanes: dataAirplanes,
    });
  }
);

// DELETE /airplanes/:id
airplanesRoute.openapi(
  createRoute({
    method: "delete",
    path: "/:id",
    request: {
      params: z.object({ id: z.coerce.number().int().positive() }),
    },
    responses: {
      404: { description: "Airplane not found" },
      200: { description: "Airplane deleted" },
    },
  }),
  (c) => {
    const { id } = c.req.valid("param");

    const airplaneIndex = dataAirplanes.findIndex(
      (airplane) => airplane.id === id
    );

    if (airplaneIndex === -1) return c.notFound();

    dataAirplanes.splice(airplaneIndex, 1);

    return c.json({
      message: "Airplane " + id + " deleted",
      airplanes: dataAirplanes,
    });
  }
);

// PUT or PATCH /airplanes/:id
airplanesRoute.openapi(
  createRoute({
    method: "put",
    path: "/:id",
    request: {
      params: z.object({ id: z.coerce.number().int().positive() }),
      body: {
        description: "Airplane to update",
        content: { "application/json": { schema: AirplaneSchema } },
      },
    },
    responses: {
      404: { description: "Airplane not found" },
      200: { description: "Airplane updated" },
    },
  }),
  (c) => {
    const { id } = c.req.valid("param");
    const airplane = c.req.valid("json");

    const airplaneIndex = dataAirplanes.findIndex(
      (airplane) => airplane.id === id
    );

    if (airplaneIndex === -1) return c.notFound();

    dataAirplanes[airplaneIndex] = airplane;

    return c.json(airplane);
  }
);
