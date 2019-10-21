import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import store from "./store/index";
import router from "./router";

Vue.use(Vuex);
Vue.use(VueRouter);

const app = new Vue({
  el: "#app",
  store: store(Vuex),
  router: router(VueRouter)
});
