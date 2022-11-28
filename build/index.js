import { setupAppConfigPlugin } from "./plugin/appConfig";
import { setupHtmlPlugins } from "./plugin/html";
import { setupMockPlugins } from "./plugin/mock";
import { setupVuePlugin } from "./plugin/vue";

export default function setupPlugins(isBuild = true) {
  return [
    setupAppConfigPlugin(isBuild),
    setupVuePlugin(isBuild),
    setupHtmlPlugins(isBuild),
    setupMockPlugins(isBuild),
  ];
}
