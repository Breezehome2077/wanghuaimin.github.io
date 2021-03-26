---
title:  给 Jekyll 添加一个标签页面  
date:   2020-07-27 18:02 +0800
abstract: 
---

根据[别人的方法](https://blog.fooleap.org/jekyll-tags-page.html)修改而来，稍微改改还可以做“目录页”和“时光轴”。

因为是借用别人的方法，所以没啥好说的，所以东西放这里，自己看吧。

## tags页面的js

\[[查看js](/assets/js/wzm_tags.js)]

## tags页面的代码

{% highlight plaintext %}
{ %- if site.tags.size > 0 -%}      # 遍历标签，并按字母顺序排序（可惜：中文不能自动排序）
<ul class="list-unstyled mb-0 row">
    { % assign sort_tags = site.tags | sort %}
    { %- for tag in sort_tags -%}
    { % assign name = tag | first %}
    { % assign count = tag | last | size %}
    <li class="col-auto page-tags-group-item">
        <a class="page-tags-group-item-btn" href="javascript:void(0)" data-tag-name="{ { name }}">
            { { name | capitalize }}<span>{ { count }}</span>
        </a>
    </li>
    { %- endfor -%}
</ul>
{ %- endif -%}

<div class="page-tags-content">     # 遍历出来的文章放这里
    <div id="error" class="page-tags-error"></div>
    <figure class="post-content-table">
        <table class="table">
            <thead><tr><th>日期</th><th>文章</th></tr></thead>
            <tbody id="page-tags-table-tbody"></tbody>
        </table>
    </figure>
</div>
{% endhighlight %} 

## post.json文件

{% highlight plaintext %}
\[ { % for post in site.posts %}    # 为了正常显示，前面多加了一个‘\’
    {
        "title":    { { post.title | jsonify }},
        "url":      { { post.url | jsonify }},
        "publication_date":     { { post.date | date:"%Y-%m-%d" | jsonify }},
        "categories":   { { post.categories | jsonify }},
        "tags":     { { post.tags | jsonify }}
    },
{ % endfor %}]
{% endhighlight %} 

最终效果如下：

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-27-add-a-tag-page-to-jekyll/page_tags_0727.PNG" alt="标签页当前效果（2020年7月27日）">
    </div>
</figure>