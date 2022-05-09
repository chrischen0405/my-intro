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
import { projectList } from '../../utils/data'

export default {
    data () {
        return {
            list: projectList
        }
    },
    onShareAppMessage () {
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
