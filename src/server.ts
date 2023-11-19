import { Hono } from "hono";
import { App } from "./app/App";
import { render, renderAsync } from "./util";
import { AppAsync } from "./app/AppAsync";

const app = new Hono();

app.get("/", (c) => {
  const { html } = render(App);
  return c.html(html);
});

app.get("/async", async (c) => {
  const { html } = await renderAsync(AppAsync);
  return c.html(html);
});

export default app;
