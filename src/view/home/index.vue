<template>
  <h2>home</h2>
  <router-link :to="routerByName(routerNameEnum.About)">
    <button>about</button>
  </router-link>
  <br>
  app.config
  <pre style="text-align: left">{{ JSON.stringify(config, null, 4) }}</pre>
</template>

<script setup>
import { useAppConfig } from "@/config/app.config";
import routerNameEnum from "@/router/routerNameEnum";
import { routerByName } from "@/router/utils";
const config = useAppConfig();
</script>
