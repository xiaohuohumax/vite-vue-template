import routerNameEnum from "../routerNameEnum";
import { initMeta, routerByName } from "../utils";
import view from "@/view/index";

export default [
  {
    name: routerNameEnum.Root,
    path: "/",
    redirect: routerByName(routerNameEnum.Home),
    meta: initMeta({
      sort: -1,
    }),
  },
  {
    name: routerNameEnum.Error404,
    path: "/:pathMatch(.*)",
    component: view.Error404,
    meta: initMeta({
      sort: 999999,
      title: "404 not found",
    }),
  },
];
