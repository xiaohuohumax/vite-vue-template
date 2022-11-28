import routerNameEnum from "../routerNameEnum";
import { initMeta } from "../utils";
import view from "@/view/index";

export default [
  {
    name: routerNameEnum.About,
    path: "/about",
    component: view.About,
    meta: initMeta({
      sort: 2,
      title: "about",
    }),
  },
];
