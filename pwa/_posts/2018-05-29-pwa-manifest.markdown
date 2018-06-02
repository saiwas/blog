---
layout: post
title: Progressive Web App - Manifest.json
date: 2018-05-29 12:00:35 +0800
categories:
  - pwa
---

## Web App Manifest
Web应用程序清单在一个JSON文本文件中提供有关应用程序的信息(如名称,作者,图标和描述),manifest 的目的是将Web应用程序安装到设备的主屏幕,为用户提供更快的访问和更丰富的体验.

---

## Web App Manifest 与 PWA
PWA 提供的一项重要功能 是 *允许将站点添加至主屏幕*. `manifest.json` 便是帮助 PWA 实现 添加至桌面的功能实现.

---

## Manifest 可实现的功能
+ 基本功能
  + 自定义名称
  + 自定义图标
  + 设置启动网址
  + 设置作用域
  + 改善应用体验
+ 添加启动画面
    + 设置显示类型
    + 指定显示方向
    + 设置主题色
+ 应用安装横幅
  + 引导用户添加应用
  + 引导用户安装原生应用

---

## 创建Manifest.json
> `快速生成器:` https://app-manifest.firebaseapp.com/

基本的格式:
```manifest.json
{
    "short_name": "短名称",
    "name": "这是一个完整名称",
    <!-- 这是图标 -->
    "icon": [
        {
            "src": "icon.png",
            "type": "image/png",
            "sizes": "48x48"
        }
    ],
    <!-- 这是用户打开后显示的第一个页面 -->
    "start_url": "index.html"
}
```

使用 `link` 标签将 `manifest.json` 部署到 PWA 站点 HTML 页面的 **头部**
``` html
<link rel="manifest" href="path-to-manifest/manifest.json">
```
---

## 总结
虽然当前 `manifest.json` 的标准仍属于草案阶段, 但是Chrome 和 Firefox 已经实现了这个功能, 微软也正努力在 Edge 浏览器上实现. IOS 11.3 中Safari已经新添加了 `Add to home screen` 的功能.