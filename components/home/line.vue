<template>
  <div class="chart_line">
    <div class="chart_line_canvas" ref="echarts"></div>
  </div>
</template>
 
<script>
// 按需引入echart
// // 引入基本模板
// import echarts from "echarts/lib/echarts";
// // 引入折线图组件
// import "echarts/lib/chart/line";
// // 引入提示框和图例组件
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/legend";

export default {
  name: "ChartLine", // 封装折线图组件
  props: {
    dataX: {
      type: Array,
      default: () => []
    },
    dataY: {
      type: Array,
      default: () => []
    },
    lineColor: {
      type: String,
      default: "#FF6C40"
    },
    title: String, // 触发显示
    name: String,
    max: [Number, String],
    min: [Number, String]
  },
  computed: {},
  beforeDestroy() {},
  watch: {},
  mounted() {
    this.initChart();
  },
  methods: {
    setChart() {
      // 初始化echarts实例
      const chart = this.$echarts.init(this.$refs.echarts);
      // 绘制图表
      chart.setOption({
        tooltip: {
          trigger: "axis", // 坐标轴触发显示
          axisPointer: {
            lineStyle: {
              // type: "dashed" // 显示虚线
              type: "solid" // 显示虚线
            }
          }
        },
        xAxis: {
          type: "category", // 类目轴
          boundaryGap: false, // 坐标轴两边留白
          data: this.dataX,
          axisLine: {
            lineStyle: {
              color: "red" // x轴颜色
            }
          },
          splitLine: {
            show: false // 是否显示竖分隔线
          },
          axisTick: {
            // show: false // 是否显示坐标轴刻度
          }
        },
        yAxis: {
          name: this.name,
          type: "value",
          axisTick: {
            show: false
          },
          min: this.min, // 坐标轴刻度最小值
          max: this.max, // 坐标轴刻度最大值
          data: this.dataY,
          step: (this.max - this.min) / 10,
          boundaryGap: [0, "100%"],
          label: {
            normal: {
              show: false
            }
          },
          axisLine: {
            show: true, // 显示y轴
            lineStyle: {
              color: "#2592F3" // y轴颜色
            }
          },
          nameTextStyle: {
            //坐标轴名称的文字样式
            color: "#f2ce07",
            fontSize: 20,
            padding: [0, 0, 6, 100]
          }
        },
        grid: {
          left: "1%",
          right: "4%",
          bottom: "10%",
          top: "20%",
          containLabel: true // grid 区域是否包含坐标轴的刻度标签
        },
        series: [
          {
            name: this.title,
            type: "line",
            symbol: "circle", // 标记的图形
            symbolSize: 1,
            smooth: 0.3, // 弧度
            showAllSymbol: true, // 显示所有图形
            sampling: "average", // 取过滤点的平均值
            lineStyle: {
              normal: {
                // color: this.lineColor, // 线条颜色
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2592F3" },
                  { offset: 1, color: "#f2ce07" }
                ]),
                width: 5
              }
            },
            itemStyle: {
              // 拐点颜色及高亮颜色
              normal: {
                // color: this.lineColor,
                color: "#2592F3"
              },
              emphasis: {
                color: "#fff"
              }
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#f2ce07"
                  },
                  {
                    offset: 1,
                    color: " #DCF5F9"
                  }
                ])
              }
            },
            data: this.dataY // 数据内容数组
          }
        ]
      });
    },
    initChart() {
      this.$nextTick(() => {
        this.setChart();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.chart_line {
  width: 92%;
  margin: 0 auto;
  .chart_line_canvas {
    width: 50%;
    height: 400px;
    bottom: 40px;
    // border: 1px solid #d9d9d9;
  }
}
</style>
