<template>
  <div id="radar" class="container"> </div>
</template>

<script>
// 引入基本模板
import echarts from "echarts/lib/echarts";
// 引入雷达图组件
import "echarts/lib/chart/radar";
// 引入提示框和图例组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
export default {
  name: "radar-chart",
  props: {
    //接受父组件传递来的数据
    items: {
      type: Array,
      default() {
        //默认数据，没有数剧的情况下启用
        return [
          { name: "生物", value: 95, max: "100" },
          { name: "数学", value: 55, max: "100" },
          { name: "语文", value: 86, max: "100" },
          { name: "物理", value: 54, max: "100" },
          { name: "美术", value: 59, max: "100" }
        ];
      }
    }
  },
  mounted() {
    let values = []; //提炼接收到的数据
    this.items.forEach(el => {
      console.error("el", el);

      values.push(el.value);
    });
    const option = {
      //覆盖配置数据option
      tooltip: {},
      radar: {
        indicator: this.items,
        center: ["50%", "51%"]
      },
      series: [
        {
          type: "radar",
          itemStyle: { normal: { areaStyle: { type: "default" } } },
          data: [
            {
              value: values,
              name: "各项得分",
              itemStyle: { normal: { color: "#2592F3" } }
            }
          ]
        }
      ]
    };
    //初始化
    const chartObj = echarts.init(document.getElementById("radar"));
    chartObj.setOption(option);
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 500px;
  height: 400px;
  // border: 1px solid red;
  bottom: 40px;
}
</style>