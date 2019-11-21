<template>
  <div class="outgl">
    <!-- top选择 -->
    <div class="select_box_outgl">
      <div class="search_input_box_outgl">类别:
        <el-select v-model="valuename" placeholder="请选择" size="medium">
          <el-option v-for="item in options4" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search_button_outgl" @click="lnquireContent()">
        <span>查询</span>
      </div>
      <div class="search_status_outgl">
        <span class="demonstration">开始时间:</span>
        <el-date-picker v-model="valueStart" type="datetime" placeholder="选择日期时间"
          default-time="00:00:00" size="medium">
        </el-date-picker>
      </div>
      <div class="search_status_outgl">
        <span class="demonstration">结束时间:</span>
        <el-date-picker v-model="valueEnd" type="datetime" placeholder="选择日期时间"
          default-time="23:59:59" size="medium">
        </el-date-picker>
      </div>
      <div class="search_status_outgl">管理员:
        <el-select v-model="value1" placeholder="请选择" size="medium" class="select_zt">
          <el-option v-for="item in options3" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search_status_outgl">管理状态:
        <el-select v-model="value2" placeholder="请选择" size="medium" class="select_zt">
          <el-option v-for="item in options4" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 表格 -->
      <el-tab-pane label="列表1" name="first">
        <div class="form_box_outgl">
          <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column label="登录IP">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.dlIP }}</span>
              </template>
            </el-table-column>
            <el-table-column label="型号">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.xh }}</span>
              </template>
            </el-table-column>
            <el-table-column label="工作状态">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.gzzt }}</span>
              </template>
            </el-table-column>
            <el-table-column label="登录状态">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.dlzt }}</span>
              </template>
            </el-table-column>
            <el-table-column label="属于">
              <template slot-scope="scope">
                <div>
                  <span size="medium">{{ scope.row.name }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="账号">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="时间">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="工作时长">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.gzsj }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
                  详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="page_box_outgl">
          <el-pagination background @current-change="handleCurrentChange"
            :current-page.sync="currentPage1" :page-size="pageNum" layout="total, prev, pager, next"
            :total="~~totalNum">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="列表2" name="second">列表2管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  name: "outgl-list",
  components: {},
  data() {
    return {
      activeName: "first",
      valueStart: "",
      valueEnd: "",
      totalNum: "8",
      pageNum: 10,
      currentPage1: 1,
      options3: [
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
      options4: [
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
      value1: "0",
      value2: "0",
      valuename: "",
      tableData: [
        {
          dlIP: "192.188.120.111",
          xh: "华为",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          dlIP: "192.188.120.111",
          xh: "iphone8",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          xh: "iphone8",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          xh: "iphone8",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          xh: "iphone8",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          xh: "iphone8",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          xh: "iphone8",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    };
  },
  watch: {
    valuename(newName, oldName) {
      if (newName == "") {
      }
    },
    value2(newName) {
      console.log("value2", newName);
    }
  },
  async mounted() {},
  methods: {
    // 搜索
    async lnquireContent() {
      if (this.valuename == "") {
        this.$message({
          message: "请选择需要查询的内容...",
          duration: 1000,
          type: "warning"
        });
      } else {
        this.$message({
          message: `查询` + this.valuename,
          duration: 1000,
          type: "warning"
        });
      }
    },
    // 切换选项卡
    handleClick(tab, event) {
      console.log("1111", tab, event);
    },
    // 详情
    handleEdit(index, row) {
      console.log(index, row);
      const h = this.$createElement;
      this.$msgbox({
        title: "详情",
        message: h("div", null, [
          h("p", null, "登录IP: " + row.dlIP),
          h("p", null, "时间: " + row.date),
          h("p", null, "姓名: " + row.name),
          h("p", null, "地址: " + row.address)
        ]),
        confirmButtonText: "确定",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") done();
        }
      });
    },
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss">
.outgl {
  .el-table th.is-leaf {
    background: #2592f3; // 表头
    text-align: center;
    color: #fff;
    // border: none;
  }
  .el-table th,
  .el-table td {
    padding: 5px 0; // 表格高
    text-align: center;
  }
  .el-dialog__footer {
    text-align: center; // 弹窗
    .el-button {
      padding: 8px 20px;
    }
  }
  .el-button--mini,
  .el-button--mini.is-round {
    padding: 5px 15px;
  }
}
</style>
<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.outgl {
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .select_box_outgl {
    width: 97%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // border: 1px solid #d9d9;
    margin: 10px 20px;
    font-size: 16px;
    color: #888888;
    .search_button_outgl {
      width: 60px;
      height: 30px;
      background: #2592f3;
      border-radius: 5px;
      margin-left: 20px;
      @include center;
      color: #fff;
    }
    .search_status_outgl {
      margin-left: 20px;
      .select_zt {
        width: 120px;
      }
    }
  }
  .form_box_outgl {
    min-height: 200px;
  }
  .page_box_outgl {
    @include center;
    margin-top: 30px;
  }
}
</style>
