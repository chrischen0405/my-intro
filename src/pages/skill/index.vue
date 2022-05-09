<template>
    <div class="container">
        <div class="main">
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { skillList } from '../../utils/data'

export default {
    data () {
        return {
            list: skillList
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
        ul {
            margin: 20rpx;
            li {
                @include font(28, #444, 40, 400);
                text-align: left;
                margin: 50rpx 20rpx;
            }
        }
    }
}
</style>
