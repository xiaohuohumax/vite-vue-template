import { viteMockServe } from "vite-plugin-mock";
import config from "../../config";

export function setupMockPlugins(_isBuild = true) {
  const mock = config.mock;
  return viteMockServe({
    mockPath: "./mock/model",
    localEnabled: mock.localEnabled,
    prodEnabled: mock.prodEnabled,
    logger: true,
    watchFiles: true,
    injectCode: `
    import { setupProMockServer } from "#/mock/mockProServer";
    setupProMockServer();
    `,
  });
}
