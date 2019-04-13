---
title: 个人主页
description: 分享个人项目，展示简历和生活博客。
tags: [全栈, CI]
github: https://github.com/UtoYuri/utohub.com
link: https://utohub.com
cover: https://io.utohub.com/utohub/home/data/utohub/images/logo.png
---

## utohub.com
分享个人项目，展示简历和生活博客.

## 开发技术栈
`Typescript`、`React`

## CI
使用`TravisCI`监听仓库`master`分支变化，当代码更新时，自动构建`docker`镜像并将镜像推送到腾讯云到镜像仓库。

同时使用`coscmd`命令，将所有`WebPack`打包好的`JS`，`CSS`文件和依赖的数据源上传到腾讯云`COS`。

## 部署 & 运维
从腾讯云镜像仓库拉取最新镜像并通过`docker-compose`部署到其他相关服务（如`MySQL`）的局域网络中。

## 在线预览
[utohub.com](https://utohub.com)
