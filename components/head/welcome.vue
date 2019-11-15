<template>
  <div class="welcome">
    <div>
      <span>版本号</span>
      <span>V1.0.0</span>
    </div>
    <i>|</i>
    <div>
      <span>欢迎您!</span>
      <span>{{ user.username || "账户名" }}</span>
    </div>
    <i>|</i>
    <div>
      <span>当前余额</span>
      <p>{{ (user.price * 1).toFixed(2) || 0.0 }}</p>
    </div>
    <i>|</i>
    <div>
      <span>当前IP</span>
      <span>{{ user.ip || "192.245.567.222" }}</span>
    </div>
    <div @click="exitClosed">
      <img src="../../assets/img/switch.png" alt="" />
      <p>退出</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: []
    };
  },
  computed: {},
  mounted() {
    // this.userdata();
  },
  methods: {
    ...mapActions(["requestAccountInfo", "userLogout"]),
    async userdata() {
      let res = await this.requestAccountInfo();
      if (res.RetCode * 1 == 100000) {
        this.user = res.Data;
      }
    },
    async exitClosed() {
      return this.$router.push("/");
      await this.userLogout().then(rec => {
        if (rec) {
          //   setTimeout(() => {
          //     window.location.href = "/";
          //   }, 500);
          this.$router.push("/");
          this.$Message.success("退出登录成功");
        }
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.welcome {
  width: 100%;
  min-width: 1200px;
  height: 32px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #b8b8b8;
  i {
    font-style: normal;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    &:first-child {
      padding-left: 23px;
    }
    p {
      color: red;
    }
    img,
    span {
      padding-right: 5px;
    }
  }
}
</style>
