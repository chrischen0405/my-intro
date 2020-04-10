<template>
  <div class="container">
    <div class="main">
      <div class="work">
        <p class="time">2019.4-2020.3</p>
        <div class="header">
          <p>杭州兔狗科技有限公司</p>
          <p>前端开发工程师</p>
        </div>
        <p class="content">
          1、主要负责公司小程序，移动端网页及app的前端开发和维护；<br>
          2、参与公司新产品功能需求的技术评估以及开发；<br>
          3、对公司官网和管理后台进行开发以及维护；<br>
          4、带着实习生熟悉公司业务及技术，解决其遇到的大部分问题；<br>
          5、公司项目涉及技术栈较多，需要学习使用各种前端技术。
        </p>
      </div>
      <div class="work" style="margin-top: 80rpx">
        <p class="time">2018.8-2018.12</p>
        <div class="header">
          <p>贝因美婴童食品有限公司</p>
          <p>前端开发实习生</p>
        </div>
        <p class="content">
          1、主要负责公司微信公众号每月会员活动日h5小游戏的编写；<br>
          2、和UI交接素材和后端对接口。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: {}
  }
</script>

<style scoped lang="scss">
  @import "../../styles/comm";
  .container {
    padding: 40rpx 0;
    width: 750rpx;
    @include flex(column, flex-start, center);
    .main {
      width: 670rpx;
      border-radius: 8rpx;
      box-shadow: 0 10rpx 20rpx #1296db;
      .work {
        margin: 40rpx;
        @include flex(column, flex-start, flex-start);
        .time {
          @include font(40, #1296db, 40, 600);
          text-align: left;
        }
        .header {
          margin-top: 40rpx;
          @include flex(row, space-between, center);
          p {
            display: inline-block;
            @include font(32, #000, 40, 500);
          }
        }
        .content {
          margin-top: 40rpx;
          text-align: left;
          @include font(28, #444, 36, 400);
        }
      }
    }
  }
</style>
