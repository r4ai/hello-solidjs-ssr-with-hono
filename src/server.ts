import { Hono } from "hono";
import { App } from "./app/App";
import { render } from "./util";

const app = new Hono();

app.get("/", (c) => {
  const html = render(App);
  return c.html(html.html);
});

export default app;
