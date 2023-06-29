---
title: "教程：给 Jekyll 添加分页功能"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.jpg"
excerpt: "此功能由插件 jekyll-paginate 实现。"
date:   2021-03-25 10:40:00 +0800
modified-date: 2021-03-25 10:40:00 +0800
tag: jekyll,paginate,pagination
category: jekyll
---

## 第一步：安装分页插件 jekyll-paginate

需要先停止 Jekyll 服务，然后再执行以下代码进行安装。

```ruby
gem install jekyll-paginate
```



## 第二步：在配置文件中添加记录

1.编辑网站根目录下文件 <b>Gemfile（无后缀名）</b>,找到下面的位置：

```html
group :jekyll_plugins do
```

2.在 <code>group :jekyll_plugins do</code> 下追加记录 <code>gem 'jekyll-paginate', '~> 1.1.0'</code>。

```text
    group :jekyll_plugins do
      gem "jekyll-feed"
      gem 'jekyll-paginate', '~> 1.1.0'
    end
```

3.编辑网站根目录下文件 _config.yml，找到下面的位置追加记录 <code>- jekyll-paginate</code>，然后空一行添加记录 <code>paginate: 6</code>。

```text
    plugins:
      - jekyll-feed
      - jekyll-paginate # 追加的记录
      
    paginate: 12    # 数字12表示每页显示的数量
```



## 第三步：修改和添加代码 

1.打开文件夹 _layouts，编辑文件 home.html。

修改前：
```html
……
\{\%- for post in posts -%}
……     
\{\%- endfor -%}
……
```

修改后：
```html
……
\{\%- for post in paginator.posts -%}
……     
\{\%- endfor -%}
……
#引入分页代码
\{\%- include page_paginate.html -%}   
……
```

2.分页代码（page_paginate.html）位于根目录下的 _includes 文件夹中，内容如下：
```html
\{\% if paginator.total_pages > 1 %}
<div class="pagination">
    <ul class="list-unstyled mb-0 w-100 row justify-content-center">
        <li class="col-auto">
            \{\% if paginator.previous_page %}
            <a href="{ { paginator.previous_page_path | relative_url }}">&laquo; 上一页</a>
            \{\% else %}
            <span>&laquo; 上一页</span>
            \{\% endif %}
        </li>
        \{\% for page in (1..paginator.total_pages) %}
            <li class="col-auto">
                \{\% if page == paginator.page %}
                <span>{ { page }}</span>
                \{\% elsif page == 1 %}
                <a href="{ { '/' | relative_url }}">\{\{page }}</a>
                \{\% else %}
                <a href="{ { site.paginate_path | relative_url | replace: ':num', page }}">\{\{ page }}</a>
                \{\% endif %}
            </li>
        \{\% endfor %}
        <li class="col-auto">
            \{\% if paginator.next_page %}
            <a href="{ { paginator.next_page_path | relative_url }}">下一页 &raquo;</a>
            \{\% else %}
            <span>下一页 &raquo;</span>
            \{\% endif %}
        </li>
    </ul>
</div>
\{\% endif %}
```



## 2023.06.25 补充

因为有了合集功能，所以分页直接去掉了；如果文章多的话，到时会做成小专题的形式，放入导航，进行引导。