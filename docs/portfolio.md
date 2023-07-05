---
layout: archive-product
title: 作品集
description: 已完成的项目合集
permalink: /docs/portfolio/
---
{%- for post in site.portfolio -%}
<article class="item rounded shadow">
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
</article>
{%- endfor -%}