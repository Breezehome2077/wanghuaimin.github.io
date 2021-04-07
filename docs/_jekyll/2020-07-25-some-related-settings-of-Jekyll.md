---
title:  技巧：关于 Jekyll 的一些相关设置 
date:   2020-07-25 21:12 +0800
abstract:   一些不成系统的记录。
order:   21
---

## Liquid语法

Jekyll 依靠 Liquid 来解析模板，因此语法可参考 Liquid语法。
1. [《Jekyll语法介绍》](https://jekyllrb.com/docs/liquid/)
2. [《Liquid语法介绍》](https://shopify.github.io/liquid/basics/introduction/)

## 语法

{% highlight plaintext %}
# post.tags 表示要查询的字段；
# 竖线后面跟的是过滤器 “| jsonify”，意思是“将数据格式转化为json格式并输出”。
"tags": { { post.tags | jsonify }}   
{% endhighlight %}

## 关于 <b>&#123;&#37;</b> 和 <b>&#123;&#37;&#8211;</b> 的区别

用于移除代码块上下的空白行。（参考文档：[《Whitespace control》](https://shopify.dev/docs/themes/liquid/reference/basics/whitespace)）

添加前：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-25-some-related-settings-of-Jekyll/not_add_hyphen.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-25-some-related-settings-of-Jekyll/not_add_hyphen.png" alt="添加连字符前的效果（上下有空白行）">
            </a>
        </div>
    </div>
</figure>

添加后：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-25-some-related-settings-of-Jekyll/add_hyphen.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-25-some-related-settings-of-Jekyll/add_hyphen.png" alt="添加连字符后的效果（上下空白行被移除）">
            </a>
        </div>
    </div>
</figure>

## 推送时忽略某个文件夹

编辑根目录下文件 <b>.gitignore</b>文件，在其中添加对应的文件夹名字或文件名即可。

{% highlight plaintext %}
_site
.sass-cache
.jekyll-cache
.jekyll-metadata
vendor
{% endhighlight %}


## 更改固定链接

参考[官方文档](http://jekyllcn.com/docs/permalinks/)
或者直接在文章的 <b>YAML 头信息</b> 添加以下代码：

{% highlight plaintext %}
permalink: /docs/jekyll 
{% endhighlight %}

## 单页面

可以直接网站根目录下新建 <b>abc.html</b>，然后设置固定链接 `permalink`；最后将链接添加到导航栏中即可。

## 新窗口打开

2021.03.26 更新：
{% highlight jquery %}
$(".post-body a[href]").attr({"target":"_black","rel":"noopener noreferrer"});
{% endhighlight %}

## 声明变量

{% highlight html %}
# 这里是声明 name = 标签名称，
# 在当前循环中可以直接用 { { name }} 调用。
{ % assign name = tag | first %}    
{% endhighlight %}

## 判断当前页面是否是指定页面

{% highlight html %}
# 如果当前页面是目标页面，则加载js文件。
{ %- if { {page.url}} == '/page/tags/' -%}
<script src='{ { "/assets/js/wzm_tags.js" | relative_url }}'></script> 
{ %- endif -%}
{% endhighlight %}

## 给文章页面的标签加链接

参考文档[《Liquid语法》](https://www.jianshu.com/p/4224b8ea0ec0)。

{% highlight html %}
{ %- for tag in page.tags -%}
<a href="/page/tags/#{ { tag }}">{ { tag }}</a>
{ %- endfor -%}
{% endhighlight %}


## 标签排序、类别排序

只支持英文排序，不支持中文排序。

{% highlight html %}
{ % assign sort_tags = site.tags | sort %}
{ %- for tag in sort_tags -%}
……
{ %- endfor -%}
{% endhighlight %}

{% highlight html %}
{ % assign sort_categories = site.categories | sort %}
{ %- for tag in sort_categories -%}
……
{ %- endfor -%}
{% endhighlight %}


## 在 for 循环中插入 if 语句

{% highlight html %}
{ %- if site.jekyll.size > 0 -%}
{ %- assign date_format = site.minima.date_format | default: "%Y年%m月%d日" -%}
{ %- for post in site.jekyll -%}
    # 过滤器modulo介绍：https://shopify.github.io/liquid/filters/modulo/
    # 这里的整体意思是：每3篇文章分为一组，在每组的第一篇文章前添加一个DIV。
    { % assign mod3 = forloop.index | modulo: 3 %}
    <article class="card collections-loop-item">
    ……
    </article>
    { % if mod3 == 0 %}
        <div class="w-100"></div>
    { % endif %}
{ %- endfor -%}
{ %- endif -%}
{% endhighlight %}

## 不使用任何模板

{% highlight plaintext %}
layout: null
{% endhighlight %}
