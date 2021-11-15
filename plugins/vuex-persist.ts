import { Plugin } from "@nuxt/types";
import VuexPersistence from "vuex-persist";

const plugin : Plugin =  ({ store }) => {
  //@ts-ignore
  window.onNuxtReady(() => {
    new VuexPersistence({}).plugin(store);
  });
};

export default plugin;
