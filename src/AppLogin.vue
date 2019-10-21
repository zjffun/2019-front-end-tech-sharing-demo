<template>
  <main>
    <form class="loginForm" action>
      <h2 class="loginForm__title">用户登录</h2>
      <div class="loginForm__item">
        账号：
        <input v-model="username" name="username" type="text" />
      </div>
      <div class="loginForm__item">
        密码：
        <input v-model="password" name="password" type="password" />
      </div>
      <div class="loginForm__item">
        <button @click="login">登录</button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    login(e) {
      e.preventDefault();
      if (this.username) {
        this.$router.push("/");
      } else {
        alert("请输入用户名");
      }
    }
  }
};
</script>

<style lang="scss">
.loginForm {
  margin: 100px auto 0;
  padding-bottom: 20px;
  width: 400px;
  background: #f2f2f2;
  &__title {
    background: aqua;
    margin: 0 0 20px 0;
    padding: 10px;
    text-align: center;
    font-size: 2em;
  }
  &__item {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>