import Vue from "vue";

//@ts-ignore
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 2
});
