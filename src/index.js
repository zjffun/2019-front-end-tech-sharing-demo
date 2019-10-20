import Vue from "vue";
import AppHeader from "./AppHeader.vue";
import AppNav from "./AppNav.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";

const app = new Vue({
  el: "#app",
  components: {
    AppHeader,
    AppNav,
    AppMain,
    AppFooter
  }
});
