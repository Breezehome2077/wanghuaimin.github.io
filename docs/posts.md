---
layout: archive-post
title: 笔记
description: 随便写
permalink: /docs/posts/
---
{%- for post in site.posts -%}
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