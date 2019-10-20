<template>
  <nav class="nav">
    <ul class="nav__list list">
      <li class="list__item">
        <a href="#">Home</a>
      </li>
      <li class="list__item">
        <a href="#">Our team</a>
      </li>
      <li class="list__item">
        <a href="#">Projects</a>
      </li>
      <li class="list__item">
        <a href="#">Contact</a>
      </li>
    </ul>

    <!-- A Search form is another commmon non-linear way to navigate through a website. -->
    <app-form></app-form>
  </nav>
</template>

<script>
import AppForm from "./AppForm.vue";
export default {
  components: {
    AppForm
  },
  methods: {}
};
</script>

<style lang="scss">
$nav-background-color: #ff80ff;

.nav {
  height: 50px;
  background-color: $nav-background-color;
  display: flex;
  margin-bottom: 10px;
  &__list {
    flex: 2;
  }
  &__form {
    flex: 1;
  }
}

.list {
  padding: 0;
  list-style-type: none;
  display: flex;
  &__item {
    display: inline;
    text-align: center;
    flex: 1;
    & > a {
      display: inline-block;
      font-size: 2rem;
      text-transform: uppercase;
      text-decoration: none;
      color: black;
    }
  }
}
</style>

