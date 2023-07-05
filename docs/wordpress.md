---
layout: archive-post
title: WordPress工作记录
description: 记录使用WordPress过程中遇到的各种问题和收获
---
{%- for post in site.wordpress -%}
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