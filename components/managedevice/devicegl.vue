<template>
  <div class="devicegl">
    <div class="select_box">
      <div class="search_name">
        搜索账号:
      </div>
      <div class="search_input_box">
        <el-input placeholder="请输入内容" v-model="valuename" clearable size="medium">
        </el-input>
      </div>
      <div class="search_button" @click="searchContent()">
        <span>搜索</span>
        <i class="el-icon-search"></i>
        <!-- <img class="span_img" :src="require('@/assets/img/device/search.png')" alt=""> -->
      </div>
      <div class="search_status">运行状态:
        <el-select v-model="value1" placeholder="请选择" size="medium" class="status_zt">
          <el-option v-for="item in options1" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search_status">运行状态2:
        <el-select v-model="value2" placeholder="请选择" size="medium" class="status_zt">
          <el-option v-for="item in options2" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <!-- 表格 -->
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="设备列表" name="first">
        <div class="form_box">
          <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column label="登录IP">
              <template slot-scope="scope">
                <span>{{ scope.row.dlIP }}</span>
              </template>
            </el-table-column>
            <el-table-column label="型号">
              <template slot-scope="scope">
                <span>{{ scope.row.xh }}</span>
              </template>
            </el-table-column>
            <el-table-column label="工作状态">
              <template slot-scope="scope">
                <span>{{ scope.row.gzzt }}</span>
              </template>
            </el-table-column>
            <el-table-column label="登录状态">
              <template slot-scope="scope">
                <span>{{ scope.row.dlzt }}</span>
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
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="时间">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="工作时长">
              <template slot-scope="scope">
                <span>{{ scope.row.gzsj }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background @current-change="handleCurrentChange"
            :current-page.sync="currentPage1" :page-size="pageNum" layout="total, prev, pager, next"
            :total="~~totalNum">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="修改提示" :visible.sync="centerDialogVisible" width="400px"
      :close-on-click-modal="false">
      <el-switch v-model="valueSwitch" active-color="#13ce66">
      </el-switch>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  name: "devicegl-list",
  components: {},
  data() {
    return {
      activeName: "first",
      totalNum: "8",
      pageNum: 10,
      currentPage1: 1,
      valueSwitch: false,
      centerDialogVisible: false,
      options1: [
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
        // this.isSearchData = false;
        // this.datalist = [];
      }
    },
    valueSwitch(newName) {
      this.$message({
        type: "info",
        duration: 1000,
        message: newName ? "开启" : "关闭"
      });
    },
    value2(newName) {
      console.log("value2", newName);
    }
  },
  async mounted() {},
  methods: {
    // 搜索
    async searchContent() {
      if (this.valuename == "") {
        return this.$message({
          message: "请输入内容搜索...",
          duration: 1000,
          type: "warning"
        });
      }
    },
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
      this.centerDialogVisible = true;
    },
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss">
.devicegl {
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
.devicegl {
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .select_box {
    width: 97%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // border: 1px solid #d9d9;
    margin: 10px 20px;
    font-size: 16px;
    color: #888888;
    .search_name {
      margin-right: 10px;
    }
    .search_button {
      width: 90px;
      height: 30px;
      background: #2592f3;
      border-radius: 5px;
      margin-left: 20px;
      @include center;
      color: #fff;
      // .span_img {
      //   margin-left: 5px;
      //   width: 20px;
      //   height: 20px;
      // }
    }
    .search_status {
      margin-left: 20px;
      .status_zt {
        width: 120px;
      }
    }
  }
  .form_box {
    min-height: 200px;
  }
  .page_box {
    @include center;
    margin-top: 30px;
  }
}
</style>
