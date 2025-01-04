import { Hono } from "hono";
import { dataAirplanes } from "./data/airplanes";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Airplanes API" });
});

app.get("/airplanes", (c) => {
  return c.json(dataAirplanes);
});

export default app;
