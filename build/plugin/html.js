import { createHtmlPlugin } from "vite-plugin-html";
import config from "../../config";

export function setupHtmlPlugins(isBuild = true) {
  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: config.initTitle,
      },
      tags: [
        {
          tag: "script",
          attrs: {
            src: `/${config.appConfig.fileName}`,
          },
        },
      ],
    },
  });
}
