import { resSuccess } from "../utils";
const base = "/demo";

export default [
  {
    url: `${base}/query/info`,
    method: "post",
    response: () => {
      return resSuccess({
        name: "mock-info",
      });
    },
  },
];
