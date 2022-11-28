import { createRouter, createWebHistory } from "vue-router";
import { initMeta } from "./utils";
import { useTitleStore } from "@/store/model/title";

const models = import.meta.globEager("./model/**/*.js");

const routers = Object.values(models)
  .map((model) => model.default)
  .map((def) => (Array.isArray(def) ? def : [def]))
  .flat();

function checkMeta(routes) {
  routes.forEach((route) => {
    route.meta = initMeta(route.meta || {});
  });
  routes.sort((a, b) => (a.meta.sort > b.meta.sort ? 1 : -1));

  routes.forEach(
    (routeItem) => !routeItem.children || checkMeta(routeItem.children)
  );
}

checkMeta(routers);

// console.log(JSON.stringify(routers, null, 4));

const router = createRouter({
  routes: routers,
  history: createWebHistory(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
  const titleStore = useTitleStore();
  titleStore.setTitle(to?.meta?.title || "");
  next();
});

export function setupRouter(app) {
  app.use(router);
}

export default router;
