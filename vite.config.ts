import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devServer from "@hono/vite-dev-server";

export default defineConfig({
  plugins: [
    solidPlugin({
      ssr: true,
    }),
    devServer({
      entry: "src/server.ts",
    }),
  ],
});
