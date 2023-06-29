---
layout: archive-post
title: 使用手册
description: 用户手册、客户手册、或者其他手册等等。
---
<section class="archive-post">
    <header class="header">
        <h1 class="title">{{ page.title }}</h1>
    </header>
    <div class="main">
        {%- for post in site.manuals -%}
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