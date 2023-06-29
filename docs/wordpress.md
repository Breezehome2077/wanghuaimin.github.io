---
layout: archive-post
title: WordPress工作记录
description: 记录使用WordPress过程中遇到的各种问题和收获
---
<section class="archive-post">
    <header class="header">
        <h1 class="title">{{ page.title }}</h1>
    </header>
    <div class="main">
        {%- for post in site.wordpress -%}
        <article class="item">
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
                    <a class="more" href="{{ post.url }}">
                        了解更多<svg class="icon"><use xlink:href="#chevron"></use></svg>
                    </a>
                </div>
            </div>
        </article>
        {%- endfor -%}
    </div>
</section>