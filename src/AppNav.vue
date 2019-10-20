<template>
  <nav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Our team</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>

    <!-- A Search form is another commmon non-linear way to navigate through a website. -->

    <form>
      <input
        v-model="searchVal"
        type="search"
        id="js-search-input"
        name="q"
        placeholder="Search query"
      />
      <input @click="search" type="submit" id="js-search-btn" value="Go!" />
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

<style>
nav {
  height: 50px;
  background-color: #ff80ff;
  display: flex;
  margin-bottom: 10px;
}

nav ul {
  padding: 0;
  list-style-type: none;
  flex: 2;
  display: flex;
}

nav li {
  display: inline;
  text-align: center;
  flex: 1;
}

nav a {
  display: inline-block;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

nav form {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2em;
}

input {
  font-size: 1.6rem;
  height: 32px;
}

input[type="search"] {
  flex: 3;
}

input[type="submit"] {
  flex: 1;
  margin-left: 1rem;
  background: #333;
  border: 0;
  color: white;
}
</style>

