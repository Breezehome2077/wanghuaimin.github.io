---
title:  功能：给 Jekyll 添加一个标签页面  
date:   2020-07-27 18:02 +0800
abstract: 将所有文章的标题、标签和超链接转换成 json 格式的数据，然后按照要求进行读取、筛选和组装。
order:   5
---
## 2021.03.29 补充
因为知道了 Jkeyll 有集合功能，因此放弃标签，改用手动排序。

所有文章都置于 _post 文件夹下；如果其中有不少于3篇的文章是和某一个主题有关，则创建该对应主题的分组（例如：jekyll），
并将相关文章都移动到该分组（ 示例：_jekyll 文件夹）之下。

## 原文
根据[别人的方法](https://blog.fooleap.org/jekyll-tags-page.html)修改而来，稍微改改还可以做“目录页”和“时光轴”。

因为是借用别人的方法，所以没啥好说的，所以东西放这里，自己看吧。

## Tags页面的js

<a href="{{ site.baseurl | relative_url }}/assets/js/wzm_tags.js">点击查看js</a>
<p class="post-body-mark">
注：目录页也可以根据这个来做，<a href="{{ site.baseurl | relative_url }}/assets/js/wzm_categories.js">点击查看js</a>。
</p>

## Tags 页面的代码

{% highlight html %}
# 遍历标签，并按字母顺序排序（可惜不支持中文）
{ %- if site.tags.size > 0 -%}     
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

# 遍历出来的文章放这里
<div class="page-tags-content">     
    <div id="error" class="page-tags-error"></div>
    <figure class="post-content-table">
        <table class="table">
            <thead><tr><th>日期</th><th>文章</th></tr></thead>
            <tbody id="page-tags-table-tbody"></tbody>
        </table>
    </figure>
</div>
{% endhighlight %} 

## Tags 页面用的 json 文件

{% highlight html %}
#为了正常显示，前面多加了一个‘\’
\[ { % for post in site.posts %}    
    {
        "title":    { { post.title | jsonify }},
        "url":      { { post.url | jsonify }},
        "publication_date":     { { post.date | date:"%Y-%m-%d" | jsonify }},
        "categories":   { { post.categories | jsonify }},
        "tags":     { { post.tags | jsonify }}
    },
{ % endfor %}]
{% endhighlight %} 

## Tags 页面的最终效果

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-27-add-a-tag-page-to-jekyll/page_tags_0727.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-27-add-a-tag-page-to-jekyll/page_tags_0727.jpg" alt="标签页当前效果（2020年7月27日）">
            </a>
        </div>
    </div>
</figure>