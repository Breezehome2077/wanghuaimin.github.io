---
layout: post
title:  "如何在 Jekyll 上添加分页功能"  
date:   2020-07-25 16:39 +0800
categories: jekyll
tags:   jekyll paginate pagination
---

该方法适用于 jekyll 版本为<mark>4.1.1</mark>的情况。

注：分页代码修改完成后需要<mark>重启 jekyll 服务</mark>才能正常显示。

## 安装分页插件 jekyll-paginate

{% highlight plaintext %}

gem install jekyll-paginate  #安装分页插件 jekyll-paginate

{% endhighlight %}

## 在文件中添加记录

编辑网站根目录下文件<mark>Gemfile（无后缀名）</mark>,找到下面的位置：

{% highlight plaintext %}
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end
{% endhighlight %}

在 `group :jekyll_plugins do` 下添加记录 `gem 'jekyll-paginate', '~> 1.1.0'`。

{% highlight plaintext %}
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-paginate", "~> 1.1.0"
end
{% endhighlight %}

编辑网站根目录下文件<mark>_config.yml</mark>，找到下面的位置：

{% highlight plaintext %}
plugins:
  - jekyll-feed
{% endhighlight %}

在 `plugins:` 下添加记录 `- jekyll-paginate`，然后空一行添加记录 `paginate: 12`。

{% highlight plaintext %}
plugins:
  - jekyll-feed
  - jekyll-paginate
  
paginate: 12    #数字12表示每页显示的数量
{% endhighlight %}

## 修改和添加代码

在修改之前，需要将网站根目录下文件<mark>index.markdown</mark>更名为<mark>index.html</mark>，
然后打开文件夹<mark>_layouts</mark>，编辑文件<mark>home.html</mark>。

注：为了避免因代码冲突，导致无法正常显示，所以在字符串 `{ %` 和 `{ {`中间多加了一个<span>空格</span>；要是复制的话，别忘了在复制后别忘了去除。

修改前：

{% highlight plaintext %}
……
{ %- for post in posts -%}
……     
{ %- endfor -%}
……
{% endhighlight %}

修改后：

{% highlight plaintext %}
……
{ %- for post in paginator.posts -%}
……     
{ %- endfor -%}
……
{ %- include page_paginate.html -%}  #引入分页代码
……
{% endhighlight %}

分页代码结构如下：

{% highlight html %}
{ % if paginator.total_pages > 1 %}
<div class="pagination">
    <ul class="list-unstyled mb-0 w-100 row justify-content-center">
        <li class="col-auto">
            { % if paginator.previous_page %}
            <a href="{ { paginator.previous_page_path | relative_url }}">&laquo; 上一页</a>
            { % else %}
            <span>&laquo; 上一页</span>
            { % endif %}
        </li>
        { % for page in (1..paginator.total_pages) %}
            <li class="col-auto">
                { % if page == paginator.page %}
                <span>{ { page }}</span>
                { % elsif page == 1 %}
                <a href="{ { '/' | relative_url }}">{ { page }}</a>
                { % else %}
                <a href="{ { site.paginate_path | relative_url | replace: ':num', page }}">{ { page }}</a>
                { % endif %}
            </li>
        { % endfor %}
        <li class="col-auto">
            { % if paginator.next_page %}
            <a href="{ { paginator.next_page_path | relative_url }}">下一页 &raquo;</a>
            { % else %}
            <span>下一页 &raquo;</span>
            { % endif %}
        </li>
    </ul>
</div>
{ % endif %}
{% endhighlight %}

最终效果如下：

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/page_paginate.PNG" alt="分页效果">
    </div>
</figure>