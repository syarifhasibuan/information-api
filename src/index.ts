import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

app.get("/api/hello", (c) => {
  return c.json({
    ok: true,
    message: "Hello Hono!",
  });
});

app.get("/posts/:id", (c) => {
  const page = c.req.query("page");
  const id = c.req.param("id");
  c.header("X-Message", "Hi!");
  return c.text(`You want see ${page} of ${id}`);
});

app.get("/:username", (c) => {
  const { username } = c.req.param();
  return c.html(
    html`<!DOCTYPE html>
      <h1>Hello! ${username}!</h1>`
  );
});

app.post("/posts", (c) => c.text("Created!", 201));

export default app;
