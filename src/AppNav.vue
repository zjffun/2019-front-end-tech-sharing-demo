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

    <form class="nav__form form">
      <input
        class="form__search"
        v-model="searchVal"
        type="search"
        name="q"
        placeholder="Search query"
      />
      <input class="form__submit" @click="search" type="submit" value="Go!" />
    </form>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      searchVal: ""
    };
  },
  methods: {
    search() {
      var wd = this.searchVal;
      window.open("http://www.baidu.com/s?wd=" + wd, "_blank");
    }
  }
};
</script>

<style lang="scss">
$nav-background-color: #ff80ff;
$submit-background-color: #333;

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

.form {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2em;
  %input {
    font-size: 1.6rem;
    height: 32px;
  }
  &__search {
    @extend %input;
    flex: 3;
  }
  &__submit {
    @extend %input;
    flex: 1;
    margin-left: 1rem;
    background: $submit-background-color;
    border: 0;
    color: white;
  }
}
</style>

