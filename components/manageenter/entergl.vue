<template>
  <div class="entergl">
    <!-- top选择 -->
    <div class="select_box_entergl">
      <div>
        <span class="demonstration">开始时间:</span>
        <el-date-picker v-model="valueStart" type="datetime" placeholder="选择日期时间"
          default-time="00:00:00" size="medium">
        </el-date-picker>
      </div>
      <div class="search_status_entergl">
        <span class="demonstration">结束时间:</span>
        <el-date-picker v-model="valueEnd" type="datetime" placeholder="选择日期时间"
          default-time="23:59:59" size="medium">
        </el-date-picker>
      </div>
      <div class="search_input_box">
        <el-input placeholder="请输入内容" v-model="valuename" clearable size="medium"
          prefix-icon="el-icon-search">
        </el-input>
      </div>
      <div class="search_button_entergl" @click="refreshContent()">
        <i class="el-icon-refresh"></i>
        <span>刷新</span>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card">
      <!-- 表格 -->
      <el-tab-pane label="后台操作日志" name="first">
        <div class="form_box_entergl">
          <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column label="ID">
              <template slot-scope="scope">
                <span>{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column label="管理员名称">
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作内容">
              <template slot-scope="scope">
                <span>{{ scope.row.gzzt }}</span>
              </template>
            </el-table-column>
            <el-table-column label="登录IP地址">
              <template slot-scope="scope">
                <span>{{ scope.row.dlIP }}</span>
              </template>
            </el-table-column>
            <el-table-column label="提交时间">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="备注">
              <template slot-scope="scope">
                <div>
                  <span size="medium">{{ scope.row.name }}</span>
                </div>
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
        <div class="page_box_entergl">
          <el-pagination background @current-change="handleCurrentChange"
            :current-page.sync="currentPage1" :page-size="pageNum" layout="total, prev, pager, next"
            :total="~~totalNum">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  name: "entergl-list",
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
          id: "11",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          dlIP: "192.188.120.111",
          id: "12",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          id: "13",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          id: "14",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          id: "15",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          id: "16",
          gzzt: "工作中",
          dlzt: "已登录",
          gzsj: "6",
          date: "2019-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          dlIP: "192.188.120.111",
          id: "17",
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
    async refreshContent() {
      if (this.valuename == "") {
        this.$message({
          message: "请输入内容...",
          duration: 1000,
          type: "warning"
        });
      } else {
        this.$message({
          message: `查询: ` + this.valuename,
          duration: 1000,
          type: "warning"
        });
      }
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
.entergl {
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
.entergl {
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .select_box_entergl {
    width: 97%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // border: 1px solid #d9d9;
    margin: 10px 20px;
    font-size: 16px;
    color: #888888;
    .search_input_box {
      margin-left: 20px;
    }
    .search_button_entergl {
      width: 90px;
      height: 30px;
      background: #2592f3;
      border-radius: 5px;
      margin-left: 10px;
      @include center;
      color: #fff;
    }
    .search_status_entergl {
      margin-left: 20px;
    }
  }
  .form_box_entergl {
    min-height: 200px;
  }
  .page_box_entergl {
    @include center;
    margin-top: 30px;
  }
}
</style>
