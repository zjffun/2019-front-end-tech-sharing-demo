<template>
  <form class="form">
    <input
      class="form__search"
      v-model="searchVal"
      type="search"
      name="q"
      placeholder="Search query"
    />
    <input class="form__submit" @click="search" type="submit" value="Go!" />
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      searchVal: ""
    };
  },
  computed: {
    keyword() {
      return this.$store.state.keyword;
    }
  },
  watch: {
    keyword(kw) {
      this.searchVal = kw;
    }
  },
  methods: {
    search(e) {
      console.log(e);
      e.preventDefault();
      var wd = this.searchVal;
      // window.open("http://www.baidu.com/s?wd=" + wd, "_blank");
      this.$store.commit("setKeyword", wd);
    }
  }
};
</script>

<style lang="scss">
$submit-background-color: #333;

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

