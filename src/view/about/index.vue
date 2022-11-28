<template>
  <h2>about</h2>
  <router-link :to="routerByName(routerNameEnum.Home)">
    <button>home</button>
  </router-link>
  <span style="margin: 10px">|</span>
  <button @click="test">axios</button>
  <span style="margin: 10px">|</span>
  <button @click="testStore.addNum()">pinia : {{ testStore.num }}</button>
  <p>route</p>
  <pre style="text-align: left">{{
    JSON.stringify(router.getRoutes(), null, 4)
  }}</pre>
</template>
<script setup>
import { demoQueryInfo } from "@/api/demo";
import router from "@/router";
import routerNameEnum from "@/router/routerNameEnum";
import { routerByName } from "@/router/utils";
import { useTestStore } from "@/store/model/test";

const testStore = useTestStore();

function test() {
  demoQueryInfo()
    .then((res) => alert(JSON.stringify(res.data)))
    .catch(alert);
}
</script>
