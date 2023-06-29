---
layout: archive-product
title: 作品集
description: 已完成的项目合集
---
<section class="archive-product">
    <header class="header">
        <h1 class="title">{{ page.title }}</h1>
    </header>
    <div class="main">
        {%- for post in site.portfolio -%}
        <article class="item">
            <div class="wrap">
                <div class="img">
                    <a href="{{ post.url }}">
                        <img src="{{ post.thumbnail }}" alt="{{ post.title }}">
                    </a>
                </div>
                <div class="text">
                    <h5 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h5>
                    <a class="more" href="{{ post.url }}">
                        了解更多<svg class="icon"><use xlink:href="#chevron"></use></svg>
                    </a>
                </div>
            </div>
        </article>
        {%- endfor -%}
    </div>
</section>