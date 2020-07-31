---
layout: post
title:  "关于Jekyll的一些相关设置"  
date:   2020-07-25 21:12 +0800
categories: jekyll
tags:   jekyll
---

一些不成系统的记录。

关于[《Liquid》](https://shopify.github.io/liquid/basics/introduction/)语法的更多介绍。

## 更改固定链接
编辑网站根目录下的<mark>_config.yml</mark>文件，在其中添加以下内容：

{% highlight plaintext %}
permalink: /post/:title     # 参数介绍：http://jekyllcn.com/docs/permalinks/
{% endhighlight %}

## 新窗口打开

{% highlight javascript %}
$(document).ready(function(){
    $("#articleBody").find("a").attr('target','_blank')
});
{% endhighlight %}

## 不想使用任何模板

{% highlight plaintext %}
layout: null
{% endhighlight %}


## 语法

不知道这样认识对不对？（参考：[网络文档](https://www.dazhuanlan.com/2019/09/25/5d8ade56f342c/)、[网络文档2](https://www.jianshu.com/p/c04475ba80e4)）

{% highlight plaintext %}
"tags": { { post.tags | jsonify }}   # post.tags 表示要查询的字段，竖线后面跟的是过略器 ‘| jsonify’ 表示‘格式化json数据输出’
{% endhighlight %}

## 单页面

可以直接网站根目录下新建<mark>***.html</mark>。

## 声明变量

{% highlight plaintext %}
{ % assign name = tag | first %}    # 这里是声明 name = 标签名称，后续循环中可以直接用 { { name }} 调用。
{% endhighlight %}

## 判断当前页面是否是指定页面

{% highlight plaintext %}
{ %- if { {page.url}} == '/page/tags/' -%}
<script src='{ { "/assets/js/wzm_tags.js" | relative_url }}'></script>  #如果当前页面是目标页面，则加载js文件。
{ %- endif -%}
{% endhighlight %}

## 给文章页面的标签加链接

参考文档[《Liquid语法》](https://www.jianshu.com/p/4224b8ea0ec0)。

{% highlight plaintext %}
{ %- for tag in page.tags -%}
<a href="/page/tags/#{ { tag }}">{ { tag }}</a>
{ %- endfor -%}
{% endhighlight %}


## 标签排序、类别排序

{% highlight plaintext %}
{ % assign sort_tags = site.tags | sort %}
{ %- for tag in sort_tags -%}
……
{ %- endfor -%}
{% endhighlight %}

{% highlight plaintext %}
{ % assign sort_categories = site.categories | sort %}
{ %- for tag in sort_categories -%}
……
{ %- endfor -%}
{% endhighlight %}


