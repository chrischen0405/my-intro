<template>
  <div class="container">
    <div class="main">
      <div class="box">
        <p>chrischen0405@qq.com</p>
      </div>
      <div class="box">
        <p>在线联系</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/comm";
  .container {
    padding: 40rpx 0;
    width: 750rpx;
    @include flex(column, flex-start, center);
    .main {
      width: 670rpx;
      border-radius: 8rpx;
      box-shadow: 0 10rpx 20rpx #1296db;
      .box {
        @include w_h(590, 60);
        margin: 80rpx auto;
        @include flex(row, center, center);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        p {
          @include font(40, #000, 40, 400);
        }
      }
    }
  }
</style>
