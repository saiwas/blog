---
layout: post
title: Grid Layout -- Concept
date: 2018-06-01 12:00:35 +0800
categories:
  - css_layout
---

## 背景
如今, 随着移动设备的广泛应用和迅速发展, 在Web领域上, `Responsive Web Design(RWD)` 得到了广泛的应用. 为了开发人员更加容易实现 `RWD`, 2009年, W3C 提出了一种新的方案--Flex 布局. 这种布局解决了大部分的 `RWD` 的布局问题, 并且提供了创建复杂布局的灵活性. 但当需要在二维空间中创建 `RWD` 时, 那就GG了.

于是, W3C在 2017年09月 提出了新的 `Css Grid Layout` 布局方法. 截至2017年10月, 除了 IE 10,11, Opera Mini和UC浏览器外, Chrome，Firefox，Safari和Edge全都支持没有供应商前缀的 `CSS Grid Layout` , 截止 2018年06月, 87% 的浏览器版本都能支持这种布局 -- 参考 [Can I Use](https://caniuse.com/#feat=css-grid)

---

## 基本概念
基本的HTML代码布局如下:
```html
<div class="container">
  <div class="item"></div>
  <div class="item">
    <p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```
<br />

### Grid Container
>  如上述例子, 只要 `container` 设置 `display: grid`, 那么 `container` 就称为 *Grid Container*

<br />

### Grid Item
> 如上述例子, *Grid Container* 里的所有 `item` 元素都称为 *Grid Item*, 但是 `item` 底下的元素 `sub-item` 不是.

<br />

### Grid Line
> 网格结构的所有分界线.

![Grid Line](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-line.png)

<br />

### Grid Track
> 两条 `Grid Line` 之间的空隙, 称为 `Grid Track`. 也就是网格的 `行` 和 `列`

![Grid Track](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-track.png)

<br />

### Grid Cell
> `行` 和 `列` 交集的区域叫 `Grid Cell`.

![Grid Cell](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-cell.png)

<br />

### Grid Area
> 1个或者多个连续 `Grid Cell` 的总空间, 称为 `Grid Area`

![Grid Area](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-area.png)

---

**Demo :** [GridCssLayout Demo](https://github.com/saiwas/GridCssLayout)
