import { type Component } from "solid-js";
import { renderToString } from "solid-js/web";

export const render = (Component: Component) => {
  const html = renderToString(() => <Component />);
  return { html };
};
