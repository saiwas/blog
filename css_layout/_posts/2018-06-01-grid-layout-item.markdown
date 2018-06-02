---
layout: post
title: Grid Layout -- Item
date: 2018-06-01 14:00:35 +0800
categories:
  - css_layout
---

## Grid Item用法
主要属性:
1. grid-column-start | grid-column-end | grid-row-start | grid-row-end
1. grid-column | grid-row
1. grid-area
1. justify-self
1. align-self
1. place-self

---

### grid-column-start | grid-column-end | grid-row-start | grid-row-end
> 在网格布局中, 设置特定的 `行`/`列` 来设置一个 `Grid Item`的位置
> `grid-column-start/grid-row-start` 设置 `Item` 的开始位置,
> `grid-column-end/grid-row-end` 设置结束位置

*grid-column-end* / *grid-row-end* 如果没有设置, default 为 `span 1`. `Item` 可以重叠, 我们可以使用 `z-index` 来控制重叠的顺序.

取值:
+ **`line <number>/<name>`** -- *行/列* 的编号或者 *行/列* 的名称
+ **`span <name>`** -- `Item` 跨域的 `Cell` 名字.
+ **`span <number>`** -- `Item` 将跨越的 `Cell` 数量.
+ **`auto`** -- 表示自动放置，自动跨度或默认跨度.

例子:
```css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start
  grid-row-end: 3
}

.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2
  grid-row-end: span 2
}
```
![例子A](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-start-end-a.png)

![例子B](https://cdn.css-tricks.com/wp-content/uploads/2016/11/grid-start-end-b.png)

---

### grid-column | grid-row
+ **grid-column** 是 `grid-column-start` + `grid-column-end` 缩写
+ **grid-row** 是 `grid-row-start` + `grid-row-end` 缩写
+ 如果没有设置, `default: span 1`

取值:
`<start-line>` / `<end-line>` -- 设置开始位置, 和跨域 `cell` 的数量.

例子:
```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

![grid-column | grid-row](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-start-end-c.png)

---

### grid-area
在 `container` 可以通过 `grid-template-areas` 设置布局, `item` 设置此属性, 可以轻松放置到指定的区域.

取值:
+ `<name>` - 自定义区域的名字
+ `<row-start>`/`<column-start>`/`<row-end>`/`<column-end>` - *行数* / *行名*

例子:
```css
.container {
  grid-template-areas:
    ". | . | 300px | header | header"
    ". | . | 300px | header | header"
    ". | . | 300px | header | header";
}

.item-d {
  grid-area: header
}

/* It's the same as above */
.item-d {
  grid-area: 1 / col4-start / last-line / 6
}
```

![grid-area](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-start-end-d.png)

---

### justify-self
设置 `cell` 中的 `item` 对齐方式.

取值:
+ `start` - `cell` 内, `item` 左端对齐
+ `end` - `cell` 内, `item` 右端对齐
+ `center` - `cell` 内, `item` 居中
+ `stretch` - 填满整个 `cell`

例子:
```css
.item-a {
  justify-self: start;
}
```

![justify-self:start](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-start.png)

```css
.item-a {
  justify-self: end;
}
```

![justify-self:end](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-end.png)

```css
.item-a {
  justify-self: center;
}
```

![justify-self:center](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-center.png)

```css
.item-a {
  justify-self: stretch;
}
```

![justify-self:stretch](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-stretch.png)

---

### align-self
设置 `cell` 中的 `item` 对齐方式.

取值:
+ `start` - `cell` 内, `item` 上端对齐
+ `end` - `cell` 内, `item` 下端对齐
+ `center` - `cell` 内, `item` 居中
+ `stretch` - 填满整个 `cell`

```css
.item-a {
  align-self: start;
}
```

![align-self: start](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-start.png)

```css
.item-a {
  align-self: end;
}
```

![align-self: end](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-end.png)

```css
.item-a {
  align-self: center;
}
```

![align-self: center](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-center.png)

```css
.item-a {
  align-self: stretch;
}
```

![align-self: stretch](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-stretch.png)

---

### place-self
同时设置 `align-self` 和 `justify-self`
例子:

取值:
+ `auto` -- 默认值
+ `<align-self>` / `<justify-self>` -- 如果 `justify-self` 缺少, 会默认取 `align-self` 的值.

```css
.item-a {
  place-self: center;
}
```

![place-self: center](https://cdn.css-tricks.com/wp-content/uploads/2018/04/grid-place-self-center.png)

```css
.item-a {
  place-self: center stretch;
}
```

![place-self: center stretch;](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-center.png)
