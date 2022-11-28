import config from "../../config";

const appConfig = Object.freeze({
  name: "hello world",
  axios: {
    baseURL: "/",
  },
});

/** @return {appConfig} */
export function useAppConfig() {
  return import.meta.env.DEV
    ? appConfig
    : window[config.appConfig.windowKeyName];
}

export function buildAppConfig() {
  return appConfig;
}
