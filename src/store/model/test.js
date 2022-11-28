import { defineStore, storeToRefs } from "pinia";
import storeNameEnum from "../storeNameEnum";

export const useTestStore = defineStore(storeNameEnum.TestStore, {
  state: () => ({
    num: 0,
  }),
  actions: {
    addNum() {
      this.num++;
    },
  },
});

export function useTestStoreRefs() {
  return storeToRefs(useTestStore());
}
