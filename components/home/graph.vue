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
        <div class="content">
          <div class="seven_echarts" id="seven" ref="seven"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import echarts from "../../plugins/echarts"; // 按需加载
export default {
  name: "graph-index", // 切换柱状图与折线图
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
      ],
      seven_chart: null
    };
  },
  components: {},
  async mounted() {
    this.get_echarts();
    this.fun_date(-1);
  },
  methods: {
    // 获取日期
    fun_date(digital) {
      const date1 = new Date(),
        time1 =
          // date1.getFullYear() +
          // "-" +
          date1.getMonth() + 1 + "-" + date1.getDate(); //time1当前时间
      const date2 = new Date(date1);
      date2.setDate(date1.getDate() + digital);
      const time2 =
        // date2.getFullYear() +
        // "-" +
        date2.getMonth() + 1 + "-" + date2.getDate();
    },

    // 图表
    get_echarts: function() {
      this.seven_chart = this.$echarts.init(this.$refs.seven);
      // this.seven_chart = echarts.init(this.$refs.seven); // 按需加载
      // 配置和数据在这里
      // this.seven_chart.setOption(this.seven_option);

      this.datass = [150, 180, 200, 350, 600, 650, 700, 800];
      this.seven_chart.setOption({
        title: {
          x: "left",
          align: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: []
        },

        grid: {
          left: "1%",
          right: "4%",
          bottom: "1%",
          containLabel: true
        },
        toolbox: {
          feature: {
            magicType: { type: ["line", "bar"] }, //柱状图与折线图切换
            restore: {}, //刷新
            saveAsImage: {} //将图表以折线图的形式展现
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            // X线
            lineStyle: {
              color: "red"
            }
          },
          axisLabel: {
            rotate: 30 //X轴的时间旋转
          },
          data: [
            "11-21",
            "11-22",
            "11-23",
            "11-24",
            "11-25",
            "11-26",
            "11-27",
            "11-28"
          ]
        },
        yAxis: {
          name: "每日总数(个)",
          nameLocation: "end",
          type: "value",
          axisLine: {
            // y线
            lineStyle: {
              color: "#2592F3"
            }
          },
          axisLabel: {
            formatter: "{value} "
          },
          nameTextStyle: {
            //坐标轴名称的文字样式
            color: "#f2ce07",
            fontSize: 20,
            padding: [0, 0, 20, 40]
          }
        },
        series: [
          {
            name: "数字",
            type: "line",
            symbol: "circle", // none标记的图形
            smooth: 0.3, // 弧度
            symbolSize: 1,
            data: this.datass, // 动态数据
            lineStyle: {
              //设置折线色颜色
              normal: {
                // color: "#2592F3"
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "red" },
                  { offset: 1, color: "#2592F3" }
                ]),
                width: 5
              }
            },
            itemStyle: {
              //折线小点点
              normal: {
                color: "#2592F3"
                // color: "transparent"
              }
            }
          }
        ]
      });
    },
    beforeDestroy() {
      if (!this.seven_chart) {
        return;
      }
      this.seven_chart.dispose();
      this.seven_chart = null;
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
      min-height: 600px;
      // border: 1px solid #d9d9d9;
      // background: rgb(121, 191, 238);
      .content {
        width: 50%;
      }
      .seven_echarts {
        height: 500px;
        width: 94%;
      }
    }
  }
}
</style>
