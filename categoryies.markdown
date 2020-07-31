---
layout: page
title: 分类目录
permalink: /page/categories/
---

{%- if site.categories.size > 0 -%}
<ul class="list-unstyled mb-0 row page-tags-group">
    {% assign sort_categories = site.categories | sort %}
    {%- for category in sort_categories -%}
    {% assign name = category | first %}
    {% assign count = category | last | size %}
    <li class="col-auto page-tags-group-item" data-category-name="{{ name }}">
        <a href="javascript:void(0)">{{ name | capitalize }}<span>{{ count }}</span></a>
    </li>
    {%- endfor -%}
</ul>
{%- endif -%}

<div class="page-tags-content">
    <div id="error" class="page-tags-error"></div>
    <figure class="post-content-table">
        <table class="table">
            <thead><tr><th>日期</th><th>文章</th></tr></thead>
            <tbody id="page-tags-table-tbody"></tbody>
        </table>
    </figure>
</div>