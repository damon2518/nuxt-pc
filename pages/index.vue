<template>
  <div class="container">
    <Login></Login>
    <!-- <div>
      <logo />

      <h1 class="title">
        nuxt-pc
      </h1>
      <h2 class="subtitle">
        nuxt-pc项目
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
          GitHub
        </a>
        <a href="http://www.win4000.com/meinvtag752.html" target="_blank"
          class="button--grey">跳转查看</a>
      </div>
    </div> -->
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";
import Login from "~/components/login/index";
export default {
  layout: "index",
  components: {
    // Logo,
    Login
  }
};
</script>

<style>
.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
