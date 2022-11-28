import vue from "@vitejs/plugin-vue";

export function setupVuePlugin(_isBuild = true) {
  return vue();
}
