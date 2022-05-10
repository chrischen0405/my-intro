<template>
    <div class="container">
        <div class="main">
            <div class="project" v-for="(item, index) in list" :key="index">
                <p class="name">{{item.name}}</p>
                <div class="header">
                    <span>{{item.work}}</span>
                    <span>{{item.time}}</span>
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
    @include w_h(750);
    padding: 40rpx 0;
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670);
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
                width: 100%;
                margin-top: 40rpx;
                @include flex(row, space-between, center);
                flex-wrap: wrap;
                span {
                    @include font(32, #333, 40, 500);
                }
            }
            .content {
                text-align: left;
                @include font(28, #444, 36, 400);
                p {
                    margin-top: 40rpx;
                }
            }
        }
    }
}
</style>
