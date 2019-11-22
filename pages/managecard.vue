<template>
  <div class="managecard">
    <Cardgl />
  </div>
</template>
<script>
import Cardgl from "~/components/managecard/cardgl.vue";
export default {
  name: "managecard-index",
  components: {
    Cardgl
  }
};
</script>

<style>
.managecard {
  width: 100%;
  height: 100%;
}
</style>
