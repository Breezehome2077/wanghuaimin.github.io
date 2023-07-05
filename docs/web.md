---
layout: archive-post
title: Web前端开发
description: 记录制作制作网页时遇到的各种问题
---
{%- for post in site.web -%}
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