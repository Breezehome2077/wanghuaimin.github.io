---
title:  "技巧：关于 Jekyll 的一些相关设置"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.jpg"
excerpt: "一些零碎的设置和介绍。"
date:   2020-07-25 13:12:00 +0800
modified-date: 2023-06-26 10:40:00 +0800
tag: jekyll
category: jekyll
---

<figure class="post-mark">
   <p>前言：下面示例代码中频繁出现的转义符“\”是为了能让代码在 Markdown 语法下可以正常显示。</p>
</figure>

## 为什么选择 jekyll

因为 github <b>免费</b>支持 jekyll，所以仅需要购买一个域名就可以开展您的事业了。

搜索资料时发现好多博客都停留在好些年前，使用 github 可以省好多服务器的费用；

服务器不一定年年续费，但域名却可以一下续费好些年；而且如果你选择使用 github 给的二级域名的话，甚至连一分钱都不用花。


## 推荐网站

1. [没有插件的杰基尔](http://jekyllcodex.org/without-plugins/)
   1. 无插件解决方案更易于“安装”，托管成本更低。
   2. 如果您不使用插件，您只需选择在 GitHub 页面上托管您的 Jekyll 项目即可。GitHub 页面允许您使用自定义域名在 GitHub 上免费部署您的网站！
   3. 下面出现的面包屑导航代码及来源[于此](https://jekyllcodex.org/without-plugin/breadcrumbs/#)。
2. [siteleaf](https://www.siteleaf.com/blog/tags/jekyll/)
   1. 教程更多。

## Liquid语法

Jekyll 依靠 Liquid 来解析模板，因此语法可参考 Liquid语法。

1. [《Jekyll语法介绍》](https://jekyllrb.com/docs/liquid/)
2. [《Liquid语法介绍》](https://shopify.github.io/liquid/basics/introduction/)


## 命名规则

\_layout 文件夹中的模板名字可以用连字符链接的，例如“/layouts/products-list.html”

合集（ Collections ）文件夹的名字不能用连字符，合集所在的指定目录不仅不能用连字符，还不能在前面加下划线“_”。



## 关于 \{\% 和 \{\%– 的区别

用于移除 Liquid 渲染时产生的空白。（参考文档：[《Whitespace control》](https://shopify.dev/docs/api/liquid/basics#whitespace-control)）



## 推送时忽略某个文件夹

编辑根目录下的 <b>.gitignore </b> 文件，在下方追加添加对应的文件夹名字或文件名即可。

```text
_site
.sass-cache
.jekyll-cache
.jekyll-metadata
vendor
```



## 单页面

可以直接网站根目录下新建 abc.html，然后手动设置固定链接 permalink 为“/abc.html”；最后将固定链接添加到导航栏中即可。



## 新窗口打开

```js
$(".post-body a[href]").attr({"target":"_black","rel":"noopener noreferrer"});
```



## 声明变量

```html
# 这里是声明 name = 标签名称，
# 在当前循环中可以直接用 { { name }} 调用。
{ % assign name = tag | first %} 
```



## 判断当前页是否是目标页面

```html
# 如果当前页面是目标页面，则加载js文件。
\{\ %- if { {page.url}} == '/page/tags/' -%}
<script src='\{\ {\ "/assets/js/wzm_tags.js" | relative_url }}'></script> 
\{\ %- endif -%}
```



## 标签排序、类别排序

只支持英文排序，不支持中文排序。

```html
\{\ % assign sort_tags = site.tags | sort %}
\{\ %- for tag in sort_tags -%}
……
\{\ %- endfor -%}
```

```html
\{\ % assign sort_categories = site.categories | sort %}
\{\ %- for tag in sort_categories -%}
……
\{\ %- endfor -%}
```



## 在 for 循环中插入 if 语句

```html
\{\ %- if site.jekyll.size > 0 -%}
\{\ %- assign date_format = site.minima.date_format | default: "%Y年%m月%d日" -%}
\{\ %- for post in site.jekyll -%}
    # 过滤器modulo介绍：https://shopify.github.io/liquid/filters/modulo/
    # 这里的整体意思是：每3篇文章分为一组，在每组的第一篇文章前添加一个DIV。
    \{\ % assign mod3 = forloop.index | modulo: 3 %}
    <article class="card collections-loop-item">
    ……
    </article>
    \{\ % if mod3 == 0 %}
        <div class="w-100"></div>
    \{\ % endif %}
\{\ %- endfor -%}
\{\ %- endif -%}
```



## 不使用任何模板

```html
layout: null
```



## 面包屑导航代码

```html
\{\% assign crumbs = page.url | remove:'/index.html' | split: '/' %}
<a href="/">Home</a>
\{\% for crumb in crumbs offset: 1 %}
  \{\% if forloop.last %}
    / \{\{ page.title }}
  \{\% else %}
    / <a href="\{\% assign crumb_limit = forloop.index | plus: 1 %}{% for crumb in crumbs limit: crumb_limit %}{{ crumb | append: '/' }}{% endfor %}">\{\{ crumb | replace:'-',' ' | remove:'.html' | capitalize }}</a>
  \{\% endif %}
\{\% endfor %}
```



## 建立集合后，\_posts 文件夹的处理方式

1. 当指定一个目录，储存所有集合时；
2. 默认的 \_posts文件夹也需要移动到该目录下；
3. 此时 \_posts文件夹就可以看做是一个集合。
4. 因此，调用时，其他合集怎么用， \_posts文件夹就怎么用。

示例：
```text
# 根目录下 _config.yml文件
collections_dir: docs
collections:
    ...
    posts: #笔记
        collection: "笔记"
        output: true
        permalink: /docs/:collection/:title.html
```
```html
# 目录页 posts.md
\{\%- for post in site.posts -%}
...
\{\%- endfor -%}
```


## tag 和 tags 的区别

1. post.tag 得到的是字符串；post.tags 得到的是数组。
   1. 判定理由是“<code>if post.tag contains "hidden"</code>”有效，“<code>if post.tags contains "hidden"</code>”无效。
   2. [contains只能搜索字符串。不能使用它来检查对象数组中的对象。](https://shopify.github.io/liquid/basics/operators/)




## li标签下如何添加代码块

不是每一次都成功，不成功就手动分层吧，没必要在这里浪费时间。

效果展示：

[![效果展示](/assets/images/thumbnail-post/jekyll/20200725/li-code.webp)](/assets/images/thumbnail-post/jekyll/20200725/li-code.webp)


代码展示：

[![代码展示](/assets/images/thumbnail-post/jekyll/20200725/li-code-2.webp)](/assets/images/thumbnail-post/jekyll/20200725/li-code-2.webp)



















[jekyll-docs-zh-collections]: http://jekyllcn.com/docs/collections/
[11.Introduction to collections]: https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/ "网站cloudcannon对集合的介绍"