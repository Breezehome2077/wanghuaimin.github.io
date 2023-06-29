---
title: "技巧：Jekyll 如何隐藏某一篇文章"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.jpg"
excerpt: "添加变量 hidden，然后利用运算符 if 或者 contains 来判断文章是否存在该变量，如果存在就不显示该文章。"
date:   2021-03-25 10:40:00 +0800
modified-date: 2021-03-25 10:40:00 +0800
tag: jekyll
category: jekyll
---

首先要建立一个变量，用于提供给判断语句进行判断：这篇文章是否是自己想要的。

我这里变量用的是 tag: hidden，意思是：如果这篇文章带有 hidden 标签，则文章不显示。



## 运算符 if

运算符 if 表示：判断是否符合某个条件。

```html
\{\ % assign date_format = site.date_format %}
\{\ % for post in site.jekyll %}
    \{\ % if post.tag != "hidden" %}
        \{\ % include post_list_item.html %}
    \{\ % endif %}
\{\ % endfor %}
```



## 运算符 contains

运算符 contains 表示：某个字符串（字符串数组）中是否含有某个字串。

```html
\{\ % assign date_format = site.date_format %} 
\{\ % for post in site.jekyll %}
    \{\ % if post.tag contains "hidden" %}
        # 这里留空，表示结果为真时不输出内容
    \{\ % else %}
        \{\ % include post_list_item.html %}
    \{\ % endif %}
\{\ % endfor %}
```