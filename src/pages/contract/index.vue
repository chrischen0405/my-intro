<template>
    <div class="container">
        <div class="main">
            <p class="tip">点击文本可复制</p>
            <div class="box" @click="copy('http://chrischen0405.github.io/')">
                <img src="../../../static/images/home.png"/>
                <p>http://chrischen0405.github.io/</p>
            </div>
            <div class="box" @click="copy('chrischen0405@qq.com')">
                <img src="../../../static/images/email.png"/>
                <p>chrischen0405@qq.com</p>
            </div>
            <div class="box" @click="copy('https://www.jianshu.com/u/c6a5a7f59d5f')">
                <img class="blog-img" src="../../../static/images/blog.png"/>
                <p>博客地址</p>
            </div>
            <div class="box" @click="copy('https://github.com/chrischen0405')">
                <img src="../../../static/images/github.png"/>
                <p>chrischen0405</p>
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
    data () {
        return {}
    },
    methods: {
        copy (data) {
            mpvue.setClipboardData({
                data: data,
                success () {
                    util.showToast(`${data} 复制成功`)
                }
            })
        }
    },
    onShareAppMessage () {
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/comm";

.container {
    padding: 40rpx 0;
    @include w_h(750);
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        .tip {
            margin: 40rpx 40rpx 40rpx;
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
            .blog-img {
                @include w_h(45, 45);
                margin-left: 30rpx;
            }
        }
    }
}
</style>
