<template>
  <div class="device_index">
    <Devicegl />
  </div>
</template>
<script>
import Devicegl from "~/components/device/devicegl.vue";

export default {
  name: "device-index",
  components: {
    Devicegl
  }
};
</script>

<style>
.device_index {
  width: 100%;
  height: 100%;
}
</style>
