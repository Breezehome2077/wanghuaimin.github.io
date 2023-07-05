---
title:  "教程：给 Jekyll 添加一个标签页面"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.webp"
excerpt: "将所有文章的标题、标签、链接以数组的形式放入一个 json 文件中，然后用 js 读取筛选条件，然后遍历 json 文件，将符合条件的文章进行输出。"
date:   2020-07-27 10:40:00 +0800
modified-date: 2020-07-27 10:40:00 +0800
tag: jekyll,tag,tags
category: jekyll
---



## 2021.03.29 补充

因为知道了 jkeyll 有集合功能，因此放弃标签，改用手动排序。



## 原文

根据[别人的方法](https://blog.fooleap.org/jekyll-tags-page.html)修改而来，稍微改改还可以做“目录页”和“时光轴”。

因为是借用别人的方法，所以没啥好说的，所以东西放这里，自己看吧。



## Tags页面的js

[点击查看 js 文件](/assets/js/add-a-tag-page-to-jekyll.js)

<figure class="post-mark">
      <p>注：目录页也可以根据这个来做，<a href="/assets/js/add-a-categoies-page-to-jekyll.js">点击查看 js</a>。</p>
</figure>



## Tags 页面的代码

```html
    # 遍历标签，并按字母顺序排序（可惜不支持中文）
    \{ \%- if site.tags.size > 0 -%}
    <ul class="list-unstyled mb-0 row">
        \{\ % assign sort_tags = site.tags | sort %}
        \{\ %- for tag in sort_tags -%}
        \{\ % assign name = tag | first %}
        \{\ % assign count = tag | last | size %}
        <li class="col-auto page-tags-group-item">
            <a class="page-tags-group-item-btn" href="javascript:void(0)" data-tag-name="{ { name }}">
                \{\ {\ name | capitalize }}<span>{ { count }}</span>
            </a>
        </li>
        \{\ %- endfor -%}
    </ul>
    \{\ %- endif -%}
    
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
```



## Tags 页面用的 json 文件

直接在项目根目录下创建 tags.json 文件即可。

```html
    \[\ {\ % for post in site.posts %}
    \{\
        "title":    \{\ {\ post.title | jsonify }},
        "url":      \{\ {\ post.url | jsonify }},
        "publication_date":     \{\ {\ post.date | date:"%Y-%m-%d" | jsonify }},
        "categories":   \{ \{ post.categories | jsonify }},
        "tags":     \{\ {\ post.tags | jsonify }}
    \}\,
    \{\ % endfor %}]
```