<template>
  <div class="container_err">
    <div v-if="error.statusCode === 404">
      <div class="err-404"></div>
      <h1 class="tit">Hello, 您迷路了...</h1>
      <p class="link">别着急,点击 <a href="/">回家 </a> 就可以找到出路.</p>
    </div>
    <div v-else class="error-ym">
      <h1>如页面发生错误,请先刷新重试.如未能解决,请联系客服...</h1>
      <!-- <nuxt-link v-if="!fromChatRoom" to="/">主页</nuxt-link> -->
      <nuxt-link to="/">主页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "index",
  computed: {
    // fromChatRoom() {
    //   return location.href.includes("fromchatroom");
    // }
  },
  mounted() {}
};
</script>

<style>
.err-404 {
  width: 757px;
  height: 435px;
  margin: 0 auto;
  background: url(../assets/img/err_404.jpg) no-repeat top center;
  background-size: contain;
}
.container_err {
  text-align: center;
  height: 100vh;
  background: #a0eee1;
}
.container_err .link a {
  color: #e93248;
  font-size: 35px;
}
.error-ym {
  padding-top: 6rem;
}
.container_err p,
.error-ym a {
  font-size: 25px;
}
</style>
