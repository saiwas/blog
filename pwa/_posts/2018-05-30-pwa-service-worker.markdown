---
layout: post
title: Progressive Web App - Service Worker
date: 2018-05-30 12:00:00 +0800
categories:
  - pwa
---
## 背景
随着Web 的快速发展, 用户对浏览网站的要求也逐步提高, 而如今移动设备的不断普及, 同时 `Native App` 在用户体验上对 Web领域的冲击, 更多的用户都希望在预览网页时能够想打开app一样的方便, 响应一样的迅速. 于是前端的攻城狮为了优化几十毫秒而费尽心思.

终于, W3C组织早在 2014年 5月 在 **持久的离线缓存** 这个方面提出了 `Service Worker` 这一个 H5 API.

---

## 什么是 `Service Worker` (SW)
> `SW` 是浏览器在后台运行的脚本，在注册并安装成功后, 运行于浏览器后台, 与网页分开, 不受页面刷新的影响, 但是它还可以监听和截拦作用域范围内所有页面的 `HTTP` 请求.

---

## SW 作用
1. 网络代理，转发请求，伪造响应 
1. 离线缓存
1. 消息推送
1. 后台消息传递

![Service Worker](http://ravindranaik.com/wp-content/uploads/2018/02/1fbdd59d923c44cb.png)

---

## SW 生命周期

+ 注册(register/install)
  + 在 `main js(app.js/bundle.js/...)` 里, 我们需要先注册我们的 `sw.js`
    ``` javascript
    <!-- register our `sw.js`. -->
    window.addEventListener('load', async e => {
      if('serviceWorker' in navigator) {
        try {
          navigator.serviceWorker
            .register('sw.js')
            .then((registration) => {
              console.log(`SW registered! scope: ${registration.scope}`);
          });
        } catch (error) {
          <!-- If the SW install fail, it will be redundanted automaticly. -->
          console.log(`SW register fail`);
        }
      }
    })
    ```

+ 安装中(installing)
  + 这时候会触发 *SW* 的`install` 事件.
  + 在 `install` 事件中, 我们可以调用 `event.waitUntil()`, `self.skipWaiting()` 两个事件.
    + event.waitUntil() --> 传入一个 Promise 为参数, 等到该 Promise 为 resolve 状态为止.
    + self.skipWaiting() --> `self` 是当前 context 的 global 变量, 执行该方法表示强制当前处在 waiting 状态的 Service Worker 进入 activate 状态.
    ```javascript
    <!-- sw.js -->
    self.addEventListener('install', async e => {
      <!-- Perform install steps -->
      e.waitUntil(
        <!-- using cache/creating cache files -->
          <!-- Perform cache steps code -->
        <!-- or we can skip the installing step -->
          self.skipWaiting();
      )
    });
    ```
+ 安装后(installed)
  + Service Worker 已经完成了安装, 并且等待其他的 Service Worker 线程被关闭。

+ 激活中(activating)
  + 在这个状态下没有被其他的 Service Worker 控制的客户端, 允许当前的 worker 完成安装, 并且清除了其他的 worker 以及关联缓存的旧缓存资源, 等待新的 Service Worker 线程被激活.
  + 这里会触发 `activate` 事件, 并且可以调用 `event.waitUntil()`, `self.clients.claim()` 两个事件
    + event.waitUntil()  --> 传入一个 `Promise` 为参数, 等到该 `Promise` 为 `resolve` 状态为止.
    + self.clients.claim()  --> 在 activate 事件回调中执行该方法表示取得页面的控制权, 这样之后打开页面都会使用版本更新的缓存. 旧的 Service Worker 脚本不再控制着页面, 之后会被停止.
  ```javascript
  self.addEventListener('activate', evnet => {
    event.waitUntil(
      // Code here, we use to clean up/update the cache.
    )
  })
  ```

+ 激活后(activated)
  + 此时, 我们可以处理功能性的事件 -- 请求/推送/后台同步(fetch/push/sync)
    + 请求(fetch) -- 当浏览器发起请求时，会触发 `fetch` 事件, SW激活后, 通过这个事件拦截网络请求
    + 推送(push) -- push 事件是为消息推送准备的. 这里会结合 `Push API` 和 `Notification API` 使用
    + 后台同步(sync) -- sync 事件由 background sync (后台同步)发出.
  ```javascript
  self.addEventListener('fetch', async e => {
    // code here should handle network-first or cache-first
    e.respondWith(response);
  });
  ```

+ 废弃(redundant)
  + 这个状态表示一个 Service Worker 的生命周期结束.

![Service Worker生命周期](https://developers.google.com/web/fundamentals/primers/service-workers/images/sw-lifecycle.png)

---

PS. This blog is a `PWA` Demo. Please have a look if you want.
