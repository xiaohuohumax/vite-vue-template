import fs from "fs-extra";
import chalk from "chalk";
import config from "../../config";
import { buildAppConfig } from "../../src/config/app.config";
import { getRootPath } from "../utils";

export function setupAppConfigPlugin(_isBuild = true) {
  return {
    name: "vite:create-app-config",
    apply: "build",
    enforce: "pre",
    buildStart() {
      try {
        const windowKeyName = config.appConfig.windowKeyName;
        const fileName = config.appConfig.fileName;
        const outDir = "public";

        const windowConf = `window.${windowKeyName}`;

        const configStr = `
                ${windowConf}=${JSON.stringify(buildAppConfig())};
                Object.freeze(${windowConf});
                Object.defineProperty(window, "${windowKeyName}", {
                  configurable: false,
                  writable: false,
                });
              `
          .replaceAll(/^\s+/gm, "")
          .replaceAll(/\n/gm, "");

        fs.mkdirp(getRootPath(outDir));
        fs.writeFileSync(getRootPath(`${outDir}/${fileName}`), configStr);

        console.log(
          chalk.cyan(`✨ [${fileName}]`) +
            ` - configuration file is build successfully:`
        );
        console.log(chalk.gray(`${outDir}/${chalk.green(fileName)}`));
      } catch (error) {
        console.log(
          chalk.red(
            `configuration file configuration file failed to package:\n${error}`
          )
        );
      }
    },
  };
}
