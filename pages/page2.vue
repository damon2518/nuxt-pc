<template>
  <div class="container">
    <div>
      <logo />
      <div>我是页面2</div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
