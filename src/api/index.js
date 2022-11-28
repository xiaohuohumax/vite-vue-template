import axios from "axios";
import { useAppConfig } from "@/config/app.config";

export class Axios {
  constructor(options) {
    this._axiosImpl = axios.create(options);
    this._init();
  }
  getAxios() {
    return this._axiosImpl;
  }
  _init() {
    this._axiosImpl.interceptors.request.use(
      this.requestInterceptors,
      undefined
    );
    this._axiosImpl.interceptors.request.use(
      undefined,
      this.requestInterceptorsThrow
    );
    this._axiosImpl.interceptors.response.use(
      this.responseInterceptors,
      undefined
    );
    this._axiosImpl.interceptors.response.use(
      undefined,
      this.responseInterceptorsThrow
    );
  }

  requestInterceptors(config) {
    return config;
  }

  requestInterceptorsThrow(error) {
    console.log(error);
  }

  responseInterceptors(response) {
    return response;
  }

  responseInterceptorsThrow(error) {
    console.log(error);
  }
}

class DefineAxios extends Axios {
  requestInterceptors(config) {
    return config;
  }
  responseInterceptors(response) {
    return response;
  }
}
const appConfig = useAppConfig();

export const http = new DefineAxios({
  baseURL: appConfig.axios.baseURL,
}).getAxios();
