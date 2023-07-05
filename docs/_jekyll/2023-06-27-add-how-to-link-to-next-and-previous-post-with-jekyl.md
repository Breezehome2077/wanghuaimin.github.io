---
title: "代码块：在 Jekyll 上添加下一篇/上一篇文章的链接"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.webp"
excerpt: "在文章内容页添加上一篇/下一篇文章的链接。"
date:   2021-03-25 10:40:00 +0800
modified-date: 2021-03-25 10:40:00 +0800
tag: jekyll,previous,next
category: jekyll
---


<div class="post-mark">
<p>注：原文链接：<a href="https://david.elbe.me/jekyll/2015/06/20/how-to-link-to-next-and-previous-post-with-jekyll.html" title="https://david.elbe.me/jekyll/2015/06/20/how-to-link-to-next-and-previous-post-with-jekyll.html">《Jekyll – how to link to next/previous post on your blog》</a></p>
</div>

```html
# 第一行的意思是无法获取上下文链接时不加载该div。
\{\%- if page.previous.url or page.next.url != null -%}
<div class="single-navigation">
    <ul>
        \{\%- if page.previous.url -%}
        <li class="prev">
            <a href="\{\{page.previous.url}}">
                <span>\{\{page.previous.title}}</span>
            </a>
        </li>
        \{\%- endif -%}
        \{\%- if page.next.url -%}
        <li class="next">
            <a href="\{\{page.next.url}}">
                <span>\{\{page.next.title}}</span>
            </a>
        </li>
        \{\%- endif -%}
    </ul>
</div>
\{\%- endif -%}
```

上面的方法仅限于同一个项目只有一个网站，如果一个存在多个网站，请选择下面的方法（未测试）。

参考文档1：[How to Link to Next and Previous Posts for Same Blog Category](https://talk.jekyllrb.com/t/how-to-link-to-next-and-previous-posts-for-same-blog-category/629)

参考文档2：[Jekyll Post Navigation Within a Category](https://talk.jekyllrb.com/t/how-to-link-to-next-and-previous-posts-for-same-blog-category/629)

```ruby
# 脚本代码
module Jekyll
  class WithinCategoryPostNavigation < Generator
    def generate(site)
      site.categories.each_pair do |category, posts|
        posts.sort! { |a,b| b <=> a}
        posts.each do |post|
          index = posts.index post
          next_in_category = nil
          previous_in_category = nil
          if index
            if index < posts.length - 1
              next_in_category = posts[index + 1]
            end
          	if index > 0
              previous_in_category = posts[index - 1]
            end
          end
          post.data["next_in_category"] = next_in_category unless next_in_category.nil?
          post.data["previous_in_category"] = previous_in_category unless previous_in_category.nil?
        end
      end
    end
  end
end
```

将该脚本放入您的 <b>_plugins</b> 目录中（如果不存在，请在您的站点根目录下创建它）。

```html
# html页面代码
\{\% if page.next_in_category != nil %}
	<a href="\{\{page.next_in_category.url}}" class="next-link">Older Post</a>
\{\% endif %}
\{\% if page.previous_in_category != nil %}
	<a href="\{\{page.previous_in_category.url}}" class="previous-link">Newer Post</a>
\{\% endif %}
```