<template>
  <div class="container">
    <div class="main">
      <div class="project" v-for="(item, index) in list" :key="index">
        <p class="name">{{item.name}}</p>
        <div class="header">
          <p>{{item.time}}</p>
          <p>{{item.work}}</p>
        </div>
        <div class="content">
          <p v-for="(s, i) in item.desc" :key="i">{{s}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: {
      list: [{
        name: '“美翎服疗”app',
        time: '2019.12 - 2020.2',
        work: 'app及管理后台前端开发',
        desc: ['1、使用flutter进行app开发，个人主要负责业务逻辑以及部分组件的开发。', '2、后台前端使用typescript+vue-cli开发，个人主要负责权限管理功能，使用vuex+vue-route实现。']
      }, {
        name: '“流量蜂”系统一期',
        time: '2019.9 - 2019.12',
        work: '小程序及管理后台前端开发',
        desc: ['1、流量蜂项目是一个分销系统，我们开发第三方小程序，让客户可以在后台进行小程序配置生成小程序，利用小程序进行商品分销。', '2、技术实现小程序使用mpvue+vuex开发，管理后台使用typescript+vue+ant design开发。', '3、流量蜂后台主要用于商品、用户、小程序的管理，流量蜂小程序实现分享及购买功能。']
      }, {
        name: '“aha畅学礼包”小程序',
        time: '2019.6 - 2019.9',
        work: '小程序开发',
        desc: ['1、该小程序主要用于公司aha年卡的分销，是公司重要收入来源。', '2、小程序使用mpvue框架进行开发，主要实现商品、分享功能，支付通过外部h5实现购买。']
      }, {
        name: '“喜得宝”管理后台',
        time: '2019.4 - 2019.8',
        work: '前端开发实习生',
        desc: ['1、喜得宝是公司内部使用的管理系统，主要用于公司各个产品线日常工作开展。', '2、属于实习的练手项目，后台前端使用vue+elementUI实现，部分老代码还使用jQuery。']
      }, {
        name: '学生选课管理系统',
        time: '2019.3 - 2019.4',
        work: '毕业设计项目',
        desc: ['前端使用原生微信小程序开发，后端使用springboot+jpa构建项目，使用mysql数据库，使用git进行版本控制。']
      }]
    }
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
      .project {
        margin: 40rpx;
        @include flex(column, flex-start, flex-start);
        .name {
          @include font(40, #1296db, 40, 600);
          text-align: left;
        }
        .header {
          margin-top: 40rpx;
          @include flex(row, space-between, center);
          flex-wrap: wrap;
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
