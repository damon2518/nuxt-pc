<template>
  <div class="cardgl">
    <div class="select_box_cardgl">
      <div class="search_name">
        搜索账号:
      </div>
      <div class="search_input_box">
        <el-input placeholder="请输入内容" v-model="valuename" clearable size="medium">
        </el-input>
      </div>
      <div class="search_button_cardgl" @click="searchContent()">
        <span>搜索</span>
        <i class="el-icon-search"></i>
      </div>
      <div class="status_cardgl">运行状态:
        <el-select v-model="value1" placeholder="请选择" size="medium" class="status_zt">
          <el-option v-for="item in options1" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="status_cardgl">运行状态2:
        <el-select v-model="value2" placeholder="请选择" size="medium" class="status_zt">
          <el-option v-for="item in options2" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="status_cardgl">运行状态3:
        <el-select v-model="value2" placeholder="请选择" size="medium" class="status_zt">
          <el-option v-for="item in options2" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search_button_cardgl button_add" @click="addAdministrator()">
        <i class="el-icon-circle-plus-outline"></i>
        <span>添加管理</span>
      </div>
    </div>
    <!-- 表格 -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="卡片列表1" name="first">
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
            <el-table-column label="操作" min-width="180">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
                  编辑
                </el-button>
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
                  编辑
                </el-button>
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
      <el-tab-pane label="卡片列表2" name="second">卡片列表2管理</el-tab-pane>
      <el-tab-pane label="卡片列表3" name="third">卡片列表3管理卡片列表3管理</el-tab-pane>
    </el-tabs>
    <!-- 添加管理 -->
    <el-dialog title="添加管理员" :visible.sync="addDialogVisible" width="420px"
      :close-on-click-modal="false">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" size="mini"
        class="add_formbox">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="pass">
          <el-input v-model="ruleForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="ruleForm.name" clearable></el-input>
        </el-form-item>

        <el-form-item label="角色类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择角色类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="账号状态" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="正常"></el-radio>
            <el-radio label="锁定"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="submitForm('ruleForm')">添 加</el-button>
      </span>
    </el-dialog>
    <!-- 详情 -->
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
  name: "cardgl-list",
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        email: "",
        region: "",
        resource: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        email: [{ required: true, message: "请输入邮箱地址", trigger: "blur" }],
        region: [
          { required: true, message: "请选择角色类型", trigger: "change" }
        ],
        resource: [
          { required: true, message: "请选择账号状态", trigger: "change" }
        ]
      },
      //
      activeName: "first",
      totalNum: "8",
      pageNum: 10,
      currentPage1: 1,
      valueSwitch: false,
      centerDialogVisible: false,
      addDialogVisible: false,
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
    // 提交添加
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
    // 添加
    addAdministrator() {
      this.addDialogVisible = true;
    },
    // 切换选项卡
    handleClick(tab, event) {
      console.log("1111", tab, event);
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
.cardgl {
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
    padding: 5px 15px; // 操作
  }
  .add_formbox {
    width: 300px; // 添加表单
    margin: 0 auto;
    .el-input__inner {
      width: 200px;
    }
  }
  .el-dialog__body {
    padding: 10px 0;
  }
  .el-dialog__footer {
    padding: 0 20px 34px 20px;
    text-align: center;
    .el-button--success {
      width: 100px;
    }
  }
  .el-dialog__title {
    color: #2599fe;
  }
}
</style>
<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardgl {
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .select_box_cardgl {
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
    .search_button_cardgl {
      width: 90px;
      height: 30px;
      background: #2592f3;
      border-radius: 5px;
      margin-left: 20px;
      @include center;
      color: #fff;
    }
    .button_add {
      width: 120px;
    }
    .status_cardgl {
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
