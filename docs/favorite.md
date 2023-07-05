---
layout: archive-post
title: 收藏夹
description: 用于收藏网址和其他网站上的文章。
---

<article class="item rounded shadow">
    <div class="img">
            <a href="/website-collection.html">
                <img src="/assets/images/thumbnail-post/favorite/favorite.webp" alt="网址收藏">
            </a>
        </div>
        <div class="text">
            <h5 class="title">
                <a href="/website-collection.html">网址收藏</a>
            </h5>
            <p class="excerpt">如题。</p>
        </div>
</article>
<article class="item rounded shadow">
    <div class="img">
            <a href="/other-peoples-blog.html">
                <img src="/assets/images/thumbnail-post/favorite/other-people-blog.webp" alt="其他人的博客">
            </a>
        </div>
        <div class="text">
            <h5 class="title">
                <a href="/other-peoples-blog.html">其他人的博客</a>
            </h5>
            <p class="excerpt">记录搜索资料时找到的博客，下次有空时再去转转。</p>
        </div>
</article>
{%- for post in site.favorite -%}
{%- if post.tag contains "hidden" -%}
{%- else -%}
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
{%- endif -%}
{%- endfor -%}