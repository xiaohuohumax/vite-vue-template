import { defineConfig } from "vite";
import path from "path";
import config from "./config";
import setupPlugins from "./build";

export default defineConfig((command, _mode) => {
  const isBuild = command != "build";
  return {
    base: config.basePublicPath,
    plugins: setupPlugins(isBuild),
    server: {
      port: 8080,
      open: true,
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "#": path.resolve(__dirname, "./"),
      },
    },
    build: {
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      outDir: config.build.outDir,
    },
  };
});
