import { mock } from "mockjs";

export function result(code = 1, data = "", msg = "") {
  return mock({
    code,
    data,
    msg,
  });
}

export function resSuccess(data = {}, msg = "success") {
  return result(0, data, msg);
}

export function resFail(data = {}, msg = "fail") {
  return result(-1, data, msg);
}
