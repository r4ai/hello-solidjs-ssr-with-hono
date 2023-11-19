import { ParentProps, type Component } from "solid-js";
import {
  HydrationScript,
  renderToString,
  renderToStringAsync,
} from "solid-js/web";

const Template: Component<ParentProps> = (props) => {
  return (
    <html lang="ja">
      <head>
        <title>Solid.js SSR</title>
        <meta charset="utf-8" />
        <meta name="description" content="Solid.js SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export const render = (Component: Component) => {
  const html = renderToString(() => (
    <Template>
      <Component />
    </Template>
  ));
  return { html };
};

export const renderAsync = async (Component: Component) => {
  const html = await renderToStringAsync(() => (
    <Template>
      <Component />
    </Template>
  ));
  return { html };
};
