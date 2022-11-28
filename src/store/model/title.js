import { defineStore, storeToRefs } from "pinia";
import storeNameEnum from "../storeNameEnum";

export const useTitleStore = defineStore(storeNameEnum.TitleStore, {
  state: () => ({
    title: "",
  }),
  actions: {
    setTitle(title) {
      this.title = title;
      window.document.title = this.title;
    },
  },
});

export function useTitleStoreRefs() {
  return storeToRefs(useTitleStore());
}
