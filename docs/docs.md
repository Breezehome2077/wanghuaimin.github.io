---
layout: base
title: 文档合集
description: 显示网站所有文章。
permalink: /docs/
---

<section class="archive-docs">
    <header class="header">
        <h1 class="title">{{ page.title }}</h1>
    </header>
    <div class="main">
        {%- for item in site.collections -%}
        <div class="item rounded shadow">
            <h2 class="title">{{ item.collection }}</h2>
            <ul class="list">
            {%- for post in site[item.label] %}
                <li>
                    <a href="{{ post.url }}">
                        <h3 class="title">《 {{ post.title }} 》</h3>
                        <div class="info">
                            <time class="date" datetime="{{ post.date | date_to_xmlschema }}" itemprop="date Published">
                                {{ post.date|date:"%Y-%m-%d" }}
                            </time>
                        </div>
                    </a>
                </li>
            {%- endfor -%}
            </ul>
        </div>
        {%- endfor -%}
    </div>
</section>