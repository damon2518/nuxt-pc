<template>
  <div class="head">
    <div class="top_menu_left">nuxt后台管理系统</div>
    <div class="top_menu_center">
      <nuxt-link class="menu-item" href="" :to="item.path" v-for="(item, index) in menu"
        :key="index" :class="{ active: item.path === active }">
        <img :src="item.icon" alt="" />
        <span class="item-text">{{ item.name }}</span>
      </nuxt-link>
    </div>
    <div class="top_menu_right">
      <div class="information" @click="viewMessage"><img :src="require('@/assets/img/info.png')"
          alt=""><i>{{~~num}}</i>
      </div>
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img :src="imageUrl" class="avatar_img" />
      </el-upload>
      <div>Alice</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 5,
      imageUrl: require("../../assets/img/head_icon.jpg"),
      active: "",
      menu: [
        {
          name: "首页",
          path: "/home",
          icon: require("../../assets/img/home.png")
        },
        {
          name: "页面1",
          path: "/managedevice",
          icon: require("../../assets/img/home.png")
        },
        {
          name: "页面2",
          path: "/managecard",
          icon: require("../../assets/img/home.png")
        },
        {
          name: "页面3",
          path: "/manageout",
          icon: require("../../assets/img/home.png")
        },
        {
          name: "页面页面4",
          path: "/manageenter",
          icon: require("../../assets/img/home.png")
        }
      ]
    };
  },
  computed: {},
  methods: {
    // 查看消息
    viewMessage() {
      console.log("查看消息");
    },
    clickMenu(item) {
      this.$nuxt.$router.push(item.path);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 0.3;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是JPG或者PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 350KB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {
    this.active = this.$route.path;
  },
  watch: {
    // "$route.path"() {
    //   this.active = this.$route.path;
    // },
    $route: function(to, from) {
      this.active = to.path;
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "../../assets/common.scss";
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin end() {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.head {
  min-width: 1400px;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 18px;
  color: #fff;
  background: url("../../assets/img/headbg.png");
  .top_menu_left {
    width: 26%;
    font-size: 32px;
    font-weight: 900;
  }
  .top_menu_center {
    flex: 1;
    display: flex;
    align-items: center;
    .menu-item {
      width: 16%;
      min-width: 136px;
      height: 88px;
      @include center;
      cursor: pointer;
      .item-text {
        color: #fff;
      }
    }
  }
  .active,
  .menu-item:hover {
    background-color: #000000;
    opacity: 0.2;
  }
  img {
    width: 28px;
    margin-right: 5px;
    vertical-align: middle;
  }
  .top_menu_right {
    width: 22%;
    @include end;
    padding-right: 20px;
    // border: 1px solid red;
    .information {
      position: relative;
      img {
        width: 27px;
        height: 21px;
      }
      i {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: red;
        position: absolute;
        margin: -6px 0 0 -8px;
        font-size: 12px;
        text-align: center;
      }
    }
    .avatar_img {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 20px;
    }
  }
}
</style>
