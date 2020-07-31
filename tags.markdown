---
layout: page
title: 标签集
permalink: /page/tags/
---

{%- if site.tags.size > 0 -%}
<ul class="list-unstyled mb-0 row page-tags-group">
    {% assign sort_tags = site.tags | sort %}
    {%- for tag in sort_tags -%}
    {% assign name = tag | first %}
    {% assign count = tag | last | size %}
    <li class="col-auto page-tags-group-item" data-tag-name="{{ name }}">
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