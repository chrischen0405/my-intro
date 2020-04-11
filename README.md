# my-intro

我的个人简历小程序，可以微信扫码查看

![小程序码](https://github.com/chrischen0405/my-intro/blob/master/md-img/minicode.jpg)

## Build Setup

``` bash
# 添加appid
需要在project.config.json把appid填上

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```
