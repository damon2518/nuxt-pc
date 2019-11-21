<template>
  <div>
    <!-- 公共头部 -->
    <Heads></Heads>
    <!-- 公共top -->
    <Welcome></Welcome>
    <nuxt />
  </div>
</template>
<script>
import Heads from "~/components/head/heads";
import Welcome from "~/components/head/welcome";
export default {
  data() {
    return {};
  },
  components: {
    Heads,
    Welcome
  },
  mounted() {
    // let autoLogin = window.localStorage.accountInfo;
    // if (!autoLogin) {
    //   window.$nuxt.$router.replace("/");
    // }
    // if (autoLogin) {
    //   // 不可后退到登录页
    //   history.pushState(null, null, document.URL);
    //   window.addEventListener("popstate", function() {
    //     history.pushState(null, null, document.URL);
    //   });
    // }
    // let isLoginss =
    //   new Date() - new Date(window.localStorage.getItem("expire")) < 18000000;
    // if (!isLoginss) {
    //   window.$nuxt.$router.replace("/");
    //   window.localStorage.removeItem("accountInfo");
    //   window.localStorage.removeItem("expire");
    // }
  }
};
</script>

<style></style>
