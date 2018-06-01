---
layout: post
title: Flex Layout
date: 2018-05-31 12:00:35 +0800
categories:
  - css_layout
---

## 背景
传统的*Css*布局, 都是在基于 *盒状模型* 的基础上, 使用 `display` + `position` + `float` 进行布局. 这种布局对于一些特殊布局非常不方便, 设计 `Response Design` 起来也十分麻烦.

2009年, W3C 提出了一种新的方案--Flex 布局, 可以简便,完整,响应式地实现各种页面布局, 现在 *97.3%* 的浏览器已经支持这种布局. 请参考 [Can I Use](https://caniuse.com/#feat=flexbox)

---

## Flex Layout 基本元素概念
**Flex Layout** 最重要的两个概念 -- `flex container` 和 `flex item`.
+ `flex container` -- 所有采用 *Flex* 布局的元素, 叫 **Flex 容器**.
+ `flex item` -- *Container* 内的所有子元素叫 **容器成员**.

**Flex布局原理解释:**

![Flex Box 布局原理](https://developer.mozilla.org/files/3739/flex_terms.png)

+ 主轴(`main axis`) -- Flex Box布局的主要轴, *注意* : 这不一定是水平的, 主要取决于 `flex-direction`
+ 交叉轴(`cross axis`) -- 垂直于 `main axis`. 方向取决于`main axis`.
+ `main-start` | `main-end` -- 该轴的开始和结束被称为 `main start` 和 `main end`
+ `cross-start` | `cross-end` -- 该轴的开始和结束被称为 `cross start` 和 `cross end`
+ `main size` -- 主轴 `main axis` 的空间
+ `cross size` -- 交叉轴 `cross axis` 的空间
---

## Flex Contain 用法
***主要属性  :***
1. `flex-direction`
1. `flex-wrap`
1. `flex-flow`
1. `justify-content`
1. `align-items`
1. `align-content`

### Display 设置成 Flex
第一步需要先把 *容器* `display` 设置成 `flex`.

```css
.container {
  display: flex; /* or inline-flex */
}
```

### flex-direction
设置主轴方向:
+ row(default) -- 水平方向, `main-start` 在 *左*
+ row-reverse -- 水平方向, `main-start` 在 *右*
+ column -- 垂直方向, `cross-start` 在 *上*
+ column-reverse -- 垂直方向, `cross-start` 在 *下*

![flex-direction 图解](https://css-tricks.com/wp-content/uploads/2013/04/flex-direction2.svg)

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### flex-wrap
设置 `flex item` 换行方式:

+ nowrap(default) -- 不换行
+ wrap -- 由上往下换行
+ wrap-reverse -- 由下往上换行, 第一行在最底.

![flex-wrap 图解](https://css-tricks.com/wp-content/uploads/2014/05/flex-wrap.svg)

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### justify-content
主轴 `main axis` 上的对齐方式:
+ `flex-start (default)` -- 左对齐
+ `flex-end` -- 右对齐
+ `center` -- 居中
+ `space-between` -- 两端对齐, `item` 之间的间隔都相等
+ `space-around` -- 每个 `item` 两侧的间隔相等.

![justify-content 图解](https://cdn.css-tricks.com/wp-content/uploads/2013/04/justify-content-2.svg)

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

### align-items
交叉轴 `cross axis` 上的对其方式:
+ `flex-start` -- 上对齐
+ `flex-end` -- 下对齐
+ `center` -- 居中
+ `baseline` -- 基于第一个 `item` 的文字基线对齐
+ `stretch(default)` -- 占满整个 `flex contain` 的高度

![align-items 图解](https://cdn.css-tricks.com/wp-content/uploads/2014/05/align-items.svg)

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

### align-content
当内容出现多行 `item` 时(多条 `main axis`)的对其方式. 如果只有一条的时候, 该属性不起效.

+ `flex-start` -- 对齐 `cross axis` 起端.
+ `flex-end` -- 对齐 `cross axis` 终端.
+ `center` -- 居中.
+ `space-between` -- 对齐 `cross axis` 两端, 上下行间距相等, 与 `justify-content` 类似.
+ `space-around` -- 每根轴线两侧的间隔都相等, 与 `justify-content` 类似.
+ `stretch(default)` -- 占满整个 `cross axis`.

![align-content 图解](https://css-tricks.com/wp-content/uploads/2013/04/align-content.svg)

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

---

## Flex Item 用法
**主要属性**
+ order
+ flex-grow
+ flex-shrink
+ flex-basis
+ flex
+ align-self

### order
> 设置 `item` 的排列顺序, default: 0, 数值越小越靠前.

![order 图解](https://css-tricks.com/wp-content/uploads/2013/04/order-2.svg)

```css
.item {
  order: <integer>; /* default is 0 */
}
```

### flex-grow
+ 设置 `item` 的放大比例. default: 0, 也就是不放大.
+ 如果所有的 `item` 都设置为 1, 则将 `contain` 内的 *剩余空间* 平均分给所有 `item`
+ 以上一步为基础, 如果把其中一个 `item` 设置成 2, 则该 `item` 得到的空间是其他的 **两倍**

![order 图解](https://css-tricks.com/wp-content/uploads/2014/05/flex-grow.svg)

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

### flex-shrink

*Demo :* https://codepen.io/saiwas/pen/MXwGVe
+ 设置 `item` 的缩放比例. default: 1
+ 只有所有 `item` 的宽度总和 **大于** `Contain` 宽度, 该属性才生效.
+ 如果该属性设为 0, 则该 `item` 不会缩放

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

### flex-basis
设置 `flex item` 在主轴方向上的初始大小
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
### flex
*Demo :* https://codepen.io/saiwas/pen/rKVvJj

+ 设置 `flex item` 如何伸长或缩短以适应`flex contain`中的可用空间.
+ 可以同时设置 `flex-grow`, `flex-shrink`, `flex-basis`.
+ 取值为 `auto`, `initial`, `none` 或一个无单位数
```css
.item {
  flex: none | [ <'flex-grow'> || <'flex-shrink'> || <'flex-basis'> ]
}
```
### align-self
设置单个 `item` 的 **对齐方式**. 会覆盖 `align-items` 属性.

![align-self 图解](https://css-tricks.com/wp-content/uploads/2014/05/align-self.svg)

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

---

## 总结
**Flex Layout** 相对 *传统布局* 来说, 在控制排版的方面十分方便. 而且更加适用于现在的 `Response Design`. 兼容性方面也相对高.

> ps. 本博客大部分的排版都应用了 Flex 布局

更加详细的教程可以参考 : [Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
