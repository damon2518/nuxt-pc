<template>
  <div class="login">
    <div class="login_box">
      <h2 class="title">nuxt后台管理系统</h2>
      <div class="ms_login">
        <p class="p_box"><img class="p_img" :src="require('@/assets/img/cup.png')" alt="">请输入用户名和密码
        </p>
        <el-form :model="ruleForm" :rules="ruleInline" ref="ruleForm" label-width="0px"
          class="demo_ruleForm">
          <el-form-item prop="username">
            <img class="img_img" :src="require('@/assets/img/username.png')" alt="">
            <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <img class="img_img" :src="require('@/assets/img/password.png')" alt="">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item prop="vcode" class="vcode_box">
            <img class="img_img" :src="require('@/assets/img/code.png')" alt="">
            <el-input type="password" placeholder="验证码" v-model="ruleForm.vcode"></el-input>
            <div class="vcode_img"><img class="img" src="" alt="图片"></div>
          </el-form-item>

          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <div class="login_btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "loginindex",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        vcode: ""
      },
      checked: "",
      ruleInline: {
        username: [
          {
            required: true,
            message: "请填写账户名",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "用户名必须是六位以上",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: /^(?!0)[a-zA-Z0-9_.]+$/,
            message: "用户名不能包含特殊字符与0开头",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: /^[a-zA-Z0-9_]+$/,
            message: "密码不能包含特殊字符",
            trigger: "change"
          }
        ],
        vcode: [
          {
            required: true,
            message: "请填写验证码",
            trigger: "blur"
          },
          {
            type: "string",
            name: "vcode",
            pattern: /^[0-9]{5}$/,
            message: "请输入正确验证码",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState({})
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/home");
          this.$message({
            message: "登录成功",
            type: "success"
          });
        } else {
          this.$router.push("/home"); // 因没接数据,为方便校验失败也跳转首页
          return false;
        }
      });

      const self = this;
      //判断,勾选则调用配置cookie方法
      if (self.checked == true) {
        //传入账号名，密码，和保存天数3个参数
        self.setCookie(self.ruleForm.username, self.ruleForm.password, 7);
      } else {
        //清空Cookie
        self.clearCookie();
      }
    },

    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.ruleForm.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.ruleForm.password = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }
  }
};
</script>
<style lang="scss">
.login {
  .el-input__inner {
    padding-left: 54px;
  }
}
</style>
<style lang="scss">
.login {
  .el-button--primary {
    width: 120px;
    font-size: 18px;
  }
}
</style>
<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin columnleft() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  width: 100%;
  height: 100vh;
  min-width: 1400px;
  @include center;
  background: url("../../assets/img/bgimg.png") no-repeat center;
  background-size: 100% 100%;
  .login_box {
    width: 480px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    font-size: 18px;
    .title {
      color: #fff;
      padding-bottom: 40px;
      font-size: 36px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.5);
    }
    .ms_login {
      width: 100%;
      height: 430px;
      background: #f8f8f8;
      border: 1px solid #dddada;
      @include center;
      flex-direction: column;
      .p_box {
        width: 84%;
        margin-bottom: 24px;
        line-height: 60px;
        color: #428bca;
        text-align: left;
        border-bottom: 1px solid #71a8d7;
        .p_img {
          width: 23px;
          height: 26px;
          margin: -5px 14px;
        }
      }
      .demo_ruleForm {
        width: 84%;
        text-align: left;
        position: relative;
        .login_btn {
          width: 120px;
          margin: 15px auto;
        }
        .img_img {
          position: absolute;
          z-index: 10000;
          width: 20px;
          height: 20px;
          margin: 9px 0 0 18px;
        }
        .vcode_box {
          width: 62%;
          .vcode_img {
            text-align: right;
            .img {
              margin: -40px 0 0 20px;
              position: absolute;
              width: 130px;
              background-color: #ebf5fa;
            }
          }
        }
      }
    }
  }
}
</style>
