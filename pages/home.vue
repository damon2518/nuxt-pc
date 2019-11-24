<template>
  <div class="container_home">
    <TopList />
    <Graph />
  </div>
</template>
<script>
import TopList from "~/components/home/index.vue";
import Graph from "~/components/home/graph.vue";
export default {
  name: "home-index",
  data() {
    return {};
  },
  components: {
    TopList,
    Graph
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container_home {
  width: 100%;
  height: 100%;
}
</style>
