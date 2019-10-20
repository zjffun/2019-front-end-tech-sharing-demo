import Vue from "vue";
import Vuex from 'vuex';
import AppHeader from "./AppHeader.vue";
import AppNav from "./AppNav.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";

import store from "./store/index";

Vue.use(Vuex);

const app = new Vue({
  el: "#app",
  store: store(Vuex),
  components: {
    AppHeader,
    AppNav,
    AppMain,
    AppFooter
  }
});
