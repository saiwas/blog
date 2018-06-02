---
layout: post
title: Progressive Web App - Getting Start
date: 2018-05-28 20:06:40 +0800
categories:
  - pwa
---

## 前言
在移动大时代的前期, Mobile Web一直受到了 `用户体验枷锁` 和 `用户留存枷锁` 两大枷锁的限制. 这促使互联网公司更愿意投入人力在 Native App 的开发上, 而忽略 Web.因此, Native App 顺势迅速成长起来, 大量的需求出现了, 也吸引了各类培训机构开启相关NA开发的课程, 吸引了很多人转做NA开发, 各种Native App的技术, 教程, 实践等, 也如雨后春笋般布满了各大技术论坛.

对于Native App 来说, 其最大的问题是 **本身封闭, 内容无法被索引**

但是 **相对于Native App的封闭, PWA 却是完全开放的**

按照当前的发展趋势, PWA 将会带来 Web App 的大量需求

---

## 什么是PWA?

+ PWA（Progressive Web App）是 *全新的网页技术*, 让网站的离线体验变得更好,网络连接断断续续时体验也会更好, 它会模拟一些原生功能, 比如通知推送. 在移动端利用标准化框架, 让网页应用呈现和原生应用相似的体验.

+ Twitter和Flipboard都推出了PWA, 你可以将它放在Android主屏. 微软将PWA带到了Windows 10.

+ PWA不能包含原生OS相关代码.

+ PWA仍然是网站, 只是在缓存, 通知, 后台功能等方面表现更好.

---
## PWA 的特点
+ **Progressive** - 适用于所有用户, 无论浏览器的选择是什么.
+ **Responsive** - 适用于任何形式的设备：桌面, 手机, 平板或其他.
+ **Connectivity independent** - 与 `Service Worker` 进行离线或低质量网络工作.
+ **App-like** - 感觉就像一个应用程序.
+ **Fresh** - 通过 `Service Worker` 保持最新的消息.
+ **Safe** - 通过HTTPS提供防止窥探并确保内容未被篡改.
+ **Discoverable** - PWA使用 `manifest.json` 和 `Service Worker scope`可让客户端被识别为“应用程序” , 但是由于本身是web page,所以是可以被搜索引擎索引的.
+ **Installable** - 允许用户添加他们到主屏幕的应用程序, 而省去用应用程序商店的麻烦.
+ **Linkable** - 通过URL轻松共享应用程序, 不需要复杂的安装.

---
## PWA 需要的技术
+ 响应式设计
+ Web App Manifest (Web应用程序清单)
+ Service Worker
+ Cache API
+ Push & Notification

---
## 实行PWA的步骤

> PWA 涉及到从安全, 性能和体验等方面的优化, 想要一次性支持所有特性, 代价很高, 老板也不一定愿意投入大量人力来支持这项大工程.
所以, 相对的, 我们也可以用渐进式的方法, 一步步地把现有的项目转成PWA:

1. 将全站 `HTTPS` 化. `HTTPS` 不但能提高全站的安全性, 而且 `HTTPS` 还是 PWA 的基础.
1. 添加 `Service Worker`. `SW` 不只是 *PWA* 的专项, `SW` 可以提供离线功能, 能有效提高 **首屏时间**, 性能优化上是一个不错的选择.
1. 添加 `manifest.json`. 在完成网站优化以后, 我们就可以构建程序清单 `manifest.json` 告诉用户我们的网站是可以运行安装. 当然, 这步可以和第二步同时进行.
1. 增加消息推送功能.
1. 添加其他业务特性 .......

---
## 总结
PWA作为2018最火热的技术概念之一, 对提升Web应用的安全, 性能和体验有着很大的意义, 非常值得我们去了解与学习.
