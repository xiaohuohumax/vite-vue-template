import routerNameEnum from "../routerNameEnum";
import { initMeta } from "../utils";
import view from "@/view/index";

export default [
  {
    name: routerNameEnum.Home,
    path: "/",
    component: view.Home,
    meta: initMeta({
      sort: 1,
      title: "home",
    }),
  },
];
