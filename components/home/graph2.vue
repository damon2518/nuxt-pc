<template>
  <div class="graph">
    <div class="graph_list">
      <div class="graph_select">选择状态:
        <el-select v-model="value21" placeholder="请选择" size="small">
          <el-option v-for="item in options2" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="graph_box">
        <div id="echarts">
          <div id="myChart" ref="myChart"></div>
          <div id="myChart2" ref="myChart2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import echarts from "@~/lib/echarts";
export default {
  name: "graph-index", // 饼状图与柱状图
  data() {
    return {
      value21: "0",
      options2: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "空闲"
        },
        {
          value: "2",
          label: "非空闲"
        }
      ]
    };
  },
  components: {},
  mounted() {
    this.echartsInit();
    this.echartsInit2();
  },
  methods: {
    echartsInit() {
      // 找到容器
      // let myChart = this.$echarts.init(document.getElementById("myChart"));
      const myChart = this.$echarts.init(this.$refs.myChart);
      // 开始渲染
      myChart.setOption({
        title: { text: "每日总数" },
        tooltip: {},
        xAxis: {
          data: ["1", "2", "3", "4", "5", "6"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [50, 200, 360, 100, 100, 200]
          }
        ]
      });
    },
    echartsInit2() {
      // let myChart = this.$echarts.init(document.getElementById("myChart2"));
      const myChart = this.$echarts.init(this.$refs.myChart2);
      myChart.setOption({
        title: { text: "每日人数" },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" },
              { value: 401, name: "搜索引擎1" },
              { value: 402, name: "搜索引擎2" },
              { value: 403, name: "搜索引擎3" }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.graph {
  min-width: 1400px;
  // min-height: 800px;
  border-top: 1px solid #d9d9d9;
  // background: rgb(121, 191, 238);
  font-size: 15px;
  color: #888888;
  .graph_list {
    width: 92%;
    margin: 0 auto;
    .graph_select {
      width: 100%;
      text-align: right;
      padding: 20px 0;
    }
    .graph_box {
      min-height: 800px;
      border: 1px solid #d9d9d9;
      // background: rgb(121, 191, 238);
      #myChart {
        width: 600px;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        float: left;
      }
      #myChart2 {
        width: 600px;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        float: right;
      }
    }
  }
}
</style>
