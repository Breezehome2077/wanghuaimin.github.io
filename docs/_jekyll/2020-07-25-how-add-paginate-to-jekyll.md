---
title:        功能：给 Jekyll 添加分页功能  
date:         2020-07-25 16:39 +0800
description:  在 Jekyll v4.1.1 上实现，应该兼容后续版本。
order:        1101
---

## 安装分页插件 jekyll-paginate

接上篇，先停止 Jekyll 服务，然后执行以下代码，安装分页插件 jekyll-paginate

{% highlight ruby %}
gem install jekyll-paginate
{% endhighlight %}

## 在文件中添加记录

1.&nbsp;编辑网站根目录下文件 <b>Gemfile（无后缀名）</b>,找到下面的位置：

{% highlight plaintext %}
group :jekyll_plugins do
{% endhighlight %}

2.&nbsp;在 `group :jekyll_plugins do` 下添加记录 `gem 'jekyll-paginate'`。

{% highlight plaintext %}
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate"
end
{% endhighlight %}

<p class="post-body-mark">
2021.03.31 补充：在编辑这一步时，有的主题在后面添加了版本（<code>gem 'jekyll-paginate', '~> 1.1.0'</code>），有的没添加；
个人推荐添加，版本号可以在<a href="https://pages.github.com/versions/">这里</a>找到。
</p>

3.&nbsp;编辑网站根目录下文件 <b>_config.yml</b>，找到下面的位置：

{% highlight plaintext %}
plugins:
  - jekyll-feed
{% endhighlight %}

在 `plugins:` 下添加记录 `- jekyll-paginate`，然后空一行添加记录 `paginate: 12`。

{% highlight plaintext %}
plugins:
  - jekyll-feed
  - jekyll-paginate
  
paginate: 12    # 数字12表示每页显示的数量
{% endhighlight %}

## 修改和添加代码

在修改之前，需要将网站根目录下文件 <b>index.markdown</b>更名为 <b>index.html</b>（2021.03.26补充:其实改不改都能正常显示），
然后打开文件夹 <b>_layouts</b>，编辑文件 <b>home.html</b>。

<p class="post-body-mark">
注：为了避免因代码冲突，导致无法正常浏览，所以在代码开头部分的&nbsp;<b>“&#123;%”</b> 中多加了一个<strong>空格</strong>,
变成了<span style="display: inline-block">&nbsp;<b>“&#123; %”</b></span>；所以要是复制的话，别忘了移除空格。
</p>

修改前：

{% highlight html %}
……
{ %- for post in posts -%}
……     
{ %- endfor -%}
……
{% endhighlight %}

修改后：

{% highlight html %}
……
{ %- for post in paginator.posts -%}
……     
{ %- endfor -%}
……
#引入分页代码
{ %- include page_paginate.html -%}   
……
{% endhighlight %}

分页代码（page_paginate.html）位于根目录下的 _includes 文件夹中，内容如下：

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

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/page_paginate.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/page_paginate.jpg" alt="jekyll 分页效果展示">
            </a>
        </div>
    </div>
</figure>