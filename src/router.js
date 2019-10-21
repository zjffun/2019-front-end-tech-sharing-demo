import AppHome from "./AppHome.vue";
import AppLogin from "./AppLogin.vue";

export default VueRouter =>
  new VueRouter({
    routes: [
      { path: "/", component: AppHome },
      { path: "/login", component: AppLogin }
    ]
  });
