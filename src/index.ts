import { Hono } from "hono";
import { dataAirplanes } from "./data/airplanes";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Airplanes API" });
});

app.get("/airplanes", (c) => {
  return c.json(dataAirplanes);
});

app.get("/airplanes/:id", (c) => {
  const id = Number(c.req.param("id"));
  const airplane = dataAirplanes.find((airplane) => airplane.id === id);
  return c.json(airplane);
});

export default app;
