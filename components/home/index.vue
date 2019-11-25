<template>
  <div class="container_home">
    <div class="list_box">
      <div class="content_box1 one">
        <p>+301人</p>
        <p class="font1">今日业绩</p>
      </div>
      <div class="content_box1 two">
        <p>+201人</p>
        <p class="font1">昨天业绩</p>
      </div>
      <div class="content_box1 three">
        <p>+28001人</p>
        <p class="font1">本月业绩</p>
      </div>
      <div class="content_box1 four">
        <p>+18001人</p>
        <p class="font1">上月业绩</p>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin column() {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container_home {
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  .list_box {
    width: 92%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0;
    .content_box1 {
      width: 22%;
      height: 190px;
      @include column;
      border-radius: 5px;
      color: #fff;
      p:first-child {
        font-size: 38px;
        line-height: 120px;
        white-space: nowrap;
      }
      p:last-child {
        font-size: 22px;
        padding-top: 5px;
      }
    }
    .one {
      background: url("../../assets/img/home/nowadays.png") no-repeat;
      background-size: 100% 100%;
    }
    .two {
      background: url("../../assets/img/home/yesterday.png") no-repeat;
      background-size: 100% 100%;
    }
    .three {
      background: url("../../assets/img/home/month.png") no-repeat;
      background-size: 100% 100%;
    }
    .four {
      background: url("../../assets/img/home/lastmonth.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
