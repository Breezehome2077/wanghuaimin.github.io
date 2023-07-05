---
title: "代码块：在 Jekyll 上添加旧文章警告/通知"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.webp"
excerpt: "如题。"
date:   2023-06-27 13:04:00 +0800
modified-date: 2023-06-27 13:04:00 +0800
tag: jekyll,warning,notice
category: jekyll
---

需要在帖子的头信息（YMAL）中添加自定义变量“<code>modified-date（文章修改时间）</code>”。

```html
\{\%- assign wzmTime1 = site.time | date:"%Y" -%}
\{\%- assign wzmTime2 = page.date | date:"%Y" -%}
\{\%- assign wzmTime3 = page.modified-date | date:"%Y" -%}
\{\%- assign wzmTime4 = wzmTime1 | minus: wzmTime3 -%}
\{\%- if wzmTime4 >= 3 -%}
<div class="post-mark single-old-post-warning">
    <h5 class="title">警告！这篇文章很旧！</h5>
    \{\%- if wzmTime2 <= wzmTime3 -%}
    <p>这篇文章最初写于 \{\{ wzmTime2 }} 年，距离现在已经 \{\{ wzmTime4 }} 年没有未更新/维护了，请根据实际情况谨慎使用。</p>
    \{\%- else -%}
    <p>这篇文章上次更新时间是 \{\{ wzmTime3 }} 年，距离现在已经 \{\{ wzmTime4 }} 年没有未更新/维护了，请根据实际情况谨慎使用。</p>
    \{\%- endif -%}
</div>
\{\% endif %}
```