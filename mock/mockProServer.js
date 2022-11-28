import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import config from "../config";
const models = import.meta.globEager("./model/**/*.js");

export const mockModels = Object.values(models)
  .map((model) => model.default)
  .map((def) => (Array.isArray(def) ? def : [def]))
  .flat();

export function setupProMockServer() {
  if (config.mock.prodEnabled) {
    createProdMockServer(mockModels);
  }
}
