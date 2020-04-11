<template>
  <div class="container">
    <div class="main">
      <img src="/static/images/avatar.png"/>
      <p class="name">陈文杰</p>
      <p></p>
    </div>
    <div class="base">
      <div class="box">
        <p>年龄: 23</p>
        <p>学历: 本科</p>
        <p>所在地: 浙江杭州</p>
        <p>工作经验: 1年</p>
        <p>籍贯: 浙江绍兴</p>
        <p>求职意向: 前端开发</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: {},
    onShareAppMessage () {}
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/comm";
  .container {
    padding-top: 40rpx;
    width: 750rpx;
    height: 100%;
    @include flex(column, flex-start, center);
    .main {
      @include w_h(670, 500);
      @include flex($j: center, $a: center);
      border-radius: 8rpx;
      box-shadow: 0 10rpx 20rpx #1296db;
      img {
        @include w_h(200, 200);
        border-radius: 100rpx;
      }
      .name {
        margin-top: 40rpx;
        text-align: center;
        @include font(40, #000, 40, 600);
      }
    }
    .base {
      margin-top: 80rpx;
      width: 670rpx;
      border-radius: 8rpx;
      box-shadow: 0 10rpx 20rpx #1296db;
      .box {
        margin-top: 20rpx;
        margin-bottom: 20rpx;
        p {
          text-align: center;
          @include font(32, #000, 50, 400);
        }
      }
    }
  }
</style>
