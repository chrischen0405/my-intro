<template>
    <div class="container">
        <div class="main">
            <div class="work" v-for="(item, index) in list" :key="index">
                <p class="title">{{item.companyName}}</p>
                <div class="header">
                    <span>{{item.job}}</span>
                    <span>{{item.time}}</span>
                </div>
                <div class="tag-container">
                    <div class="tag" v-for="(tag, i) in item.tags" :key="i">{{tag}}</div>
                </div>
                <p class="content" v-for="(x, i) in item.desc" :key="i">
                    {{x}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { workList } from '../../utils/data'

export default {
    data () {
        return {
            list: workList
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
    @include w_h(750);
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        .work {
            margin: 80rpx 40rpx 40rpx 40rpx;
            @include flex(column, flex-start, flex-start);
            .title {
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
            .tag-container {
                margin-top: 30rpx;
                @include flex(row, flex-start, center);
                flex-wrap: wrap;
                .tag {
                    margin-right: 16rpx;
                    @include font(24, #444, 32);
                    padding: 4rpx 10rpx;
                    background-color: #ddd;
                    border-radius: 6rpx;
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
