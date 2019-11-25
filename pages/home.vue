<template>
  <div class="container_home">
    <TopList />
    <Graph />
    <!-- <Chart /> -->
    <Lines :dataX='dataXS' :dataY='dataYS' :title='title' :name='name' />
    <Lines :dataX='dataXS' :dataY='dataYSS' :title='title' :name='name' />
  </div>
</template>
<script>
import TopList from "~/components/home/index.vue";
import Graph from "~/components/home/graph.vue";
import Chart from "~/components/home/chart.vue";
import Lines from "~/components/home/line.vue";
export default {
  name: "home-index",
  data() {
    return {
      dataXS: [
        "11-22",
        "11-23",
        "11-24",
        "11-25",
        "11-26",
        "11-27",
        "11-28",
        "11-29",
        "11-30",
        "12-1"
      ],
      dataYS: [150, 180, 200, 350, 600, 650, 700, 800],
      dataYSS: [1500, 1800, 2000, 3500, 6000, 6500, 7000, 8000],
      title: "总数",
      name: "添加总人数"
    };
  },
  components: {
    TopList,
    Graph,
    Chart,
    Lines
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
