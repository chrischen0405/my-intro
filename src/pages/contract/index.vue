<template>
  <div class="container">
    <div class="main">
      <p class="tip">点击文本可复制</p>
      <div class="box" style="margin-top: 40rpx" @click="copy('http://chrischen0405.github.io/')">
        <img src="../../../static/images/home.png"/>
        <p>http://chrischen0405.github.io/</p>
      </div>
      <div class="box" @click="copy('chrischen0405@qq.com')">
        <img src="../../../static/images/email.png"/>
        <p>chrischen0405@qq.com</p>
      </div>
      <div class="box">
        <button open-type="contact">在线联系</button>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '../../utils/index'
  export default {
    data: {},
    methods: {
      copy (data) {
        mpvue.setClipboardData({
          data: data,
          success () {
            util.showToast('复制成功')
          }
        })
      }
    },
    onShareAppMessage () {}
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
      .tip {
        margin: 40rpx 40rpx 0;
        text-align: left;
        @include font(24, #666, 40, 400);
      }
      .box {
        @include w_h(590, 80);
        margin: 80rpx auto;
        @include flex(row, flex-start, center);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        img {
          margin-left: 20rpx;
          @include w_h(60, 60);
        }
        p {
          margin-left: 20rpx;
          @include font(32, #000, 40, 400);
        }
        button {
          @include font(32, #000, 40, 400);
        }
      }
    }
  }
</style>
