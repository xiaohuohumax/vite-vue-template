import { http } from "@/api/index";

const baseUrl = "/demo";

export function demoQueryInfo() {
  return http.request({
    url: `${baseUrl}/query/info`,
    method: "post",
  });
}
