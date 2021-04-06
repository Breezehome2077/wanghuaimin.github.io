---
title: 技巧：Jekyll 如何隐藏某一篇文章
date: 2021-03-25 10:46 +0800
abstract: 可通过运算符 if 和 contains 来实现隐藏文章。
order:   99
---

首先要建立一个变量，用于提供给判断语句进行判断：这篇文章是否是自己想要的。

我这里变量用的是 `tag: hidden`，意思是：如果这篇文章带有 <b>hidden</b> 标签，则文章不显示。

## 运算符 if

运算符 `if` 表示：判断是否符合某个条件。

{% highlight html %}
{ % assign date_format = site.date_format %}
{ % for post in site.jekyll -%}
    { % if post.tag != "hidden" %}
        { % include post_list_item.html %}
    { % endif %}
{ % endfor -%}
{% endhighlight %}

## 运算符 contains

运算符 `contains` 表示：某个字符串（字符串数组）中是否含有某个字串。

{% highlight html %}
{ % assign date_format = site.date_format %} 
{ % for post in site.jekyll -%}
    { % if post.tag contains "hidden" %}
        # 这里留空，表示结果为真时不输出内容
    { % else %}
        { % include post_list_item.html %}
    { % endif %}
{ % endfor -%}
{% endhighlight %}

<p class="post-body-mark">
    注：当文章拥有多个标签时，<b>tag</b>&nbsp;表现形式为字符串数组；因此如果你也用&nbsp;<b>tag</b>&nbsp;的话，推荐用这个。
</p>

附：[《Liquid语法》](https://shopify.github.io/liquid/basics/operators/)

