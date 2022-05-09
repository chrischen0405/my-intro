<template>
    <div class="container">
        <div class="main">
            <div class="work" v-for="(item, index) in list" :key="index">
                <p class="time">{{item.time}}</p>
                <div class="header">
                    <p>{{item.companyName}}</p>
                    <p>{{item.job}}</p>
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
            .time {
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
