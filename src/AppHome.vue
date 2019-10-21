<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppNav from "./AppNav.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppNav,
    AppMain,
    AppFooter
  }
};
</script>