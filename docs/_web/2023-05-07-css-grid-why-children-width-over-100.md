---
title: "问题：Grid布局中子元素宽度超过100%的解决办法"
thumbnail: "/assets/images/thumbnail-post/web/grid.webp"
excerpt: "将宽度 fr 替换为 minmax(0,1fr) 的形式即可。"
date: 2023-05-09 5:40:00 +0800
modified-date: 2023-05-09 5:40:00 +0800
tag: web,grid
category: web
---

<b>问题描述：</b>

在制作博客首页的时候发现DIV中的文字长度超过了100%，手动加限制也不管用，除非指定固定的单位长度才可以。

<b>检查过程：</b>

1. 从最近的div到body，依次设置“width:100%,overflow:hidden”，无效果；
2. 开始搜索，找到了这篇文章[《解决 grid 布局 item 被子元素撑开的问题》][《解决 grid 布局 item 被子元素撑开的问题》]
3. 检查发现宽度单位确实是用了“fr”，于是按文章所说将其换成了“minmax(0,1fr)”，问题解决。

<b>结论：</b>

以后用“fr”作单位时，将其替换为“minmax(0,1fr)” 的形式即可避免该问题。

[《解决 grid 布局 item 被子元素撑开的问题》]: https://my.oschina.net/Cubicluo/blog/5356233