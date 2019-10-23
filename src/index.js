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

if (!window.Cypress) {
  // PWA
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }

  // Notification
  Notification.requestPermission().then(function(result) {
    if (result === "granted") {
      var options = {
        body: "热烈欢迎",
        icon: "icon.png"
      };
      new Notification("欢迎", options);
    }
  });
}
