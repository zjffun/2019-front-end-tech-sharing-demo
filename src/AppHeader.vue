<template>
  <header>
    <h1>{{keyword}}Header</h1>
  </header>
</template>

<script>
export default {
  computed: {
    keyword() {
      return this.$store.state.keyword;
    }
  }
};
</script>