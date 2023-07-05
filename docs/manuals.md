---
layout: archive-post
title: 使用手册
description: 用户手册、客户手册、或者其他手册等等。
permalink: /docs/manuals/
---
{%- for post in site.manuals -%}
<article class="item rounded shadow">
    <div class="wrap">
        <div class="img">
            <a href="{{ post.url }}">
                <img src="{{ post.thumbnail }}" alt="{{ post.title }}">
            </a>
        </div>
        <div class="text">
            <h5 class="title">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </h5>
            <p class="excerpt">{{ post.excerpt }}</p>
        </div>
    </div>
</article>
{%- endfor -%}