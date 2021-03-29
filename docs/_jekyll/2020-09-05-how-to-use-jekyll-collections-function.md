---
title:  如何使用 jekyll 的 Collections 功能  
date:   2020-09-05 10:27 +0800
abstract: 将和同一主题相关的多篇文章集合起来，组织成“专题”的形式。
---

<p class="post-body-mark">
前言：本文中提到的“专题”、“收藏夹”、“集合”都是指 Collections 功能。
</p>

<p><strong>参考文档：</strong></p>

1. <a href="http://jekyllcn.com/docs/collections/">《集合（Collections）》</a>
2. <a href="https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/">《11. Introduction to collections》</a>

## 第一步：修改配置文件，注册新专题

首先我们要修改配置文件 <b>_config.yml</b>，在文章底部添加以下内容：

{% highlight plaintext %}
collections:
  jekyll: # 这是新专题的名称
    output: true  # 是否允许集合内文档作为单个文件进行输出
    permalink: /docs/jekyll/:title/ #设置url格式
{% endhighlight %}

如此就完成了专题 <b>jekyll</b> 的注册；接下来重启 jekyll 服务，以使更改生效。

## 第二步：创建专题目录

专题目录必须放在 <b>根目录</b> 下，和文件夹 <b>_post</b> 平级，文件名格式为 <b>\_abc</b>（怕编译冲突，所以文件名这里多加了一个反斜杠）。

由于我们注册的专题名为 <b>jekyll</b>，所以我们要创建专题目录的为 <b>_jekyll</b>,创建完成后的网站结构为：

{% highlight plaintext %}
qinyuanchunxue.github.io
    |- _includes
    |- _jekyll  # 创建的专题目录
    |- _layouts
    |- _posts
    ......
    ......
    ......
{% endhighlight %}

## 第三步：创建专题内容页
    
在 <b>_layouts</b> 模板目录下创建专题内容页模板 <b>jekyll.html</b>。
  * 如果需要修改，可在此模板文件中修改；
  * 如果不需要修改，可直接复制 <b>post.html</b> 文件中的内容放到此处。
  
## 第四步：创建专题列表页  

1. 复制根目录下的 <b>index.html</b>，并更名为 <b>jekyll.html</b>;
2. 将其中的 `site_posts` 更改为 `site_jekyll`；
3. 将其中的 `paginator.posts` 更改为 `site_post.posts`；
4. 移除 `{\%- include page_paginate.html -%}`（这里为了防止冲突，多写了一个“\”）；

修改前的 <b>jekyll.html</b> 主题内容：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-before.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-before.jpg" alt="jekyll 目录页的代码-修改前">
            </a>
        </div>
    </div>
</figure>

修改后的 <b>jekyll.html</b> 主题内容：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-after.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-after.jpg" alt="专题 jekyll 目录页的代码-修改后">
            </a>
        </div>
    </div>
</figure>

其中 `{\ % assign mod3 = forloop.index | modulo: 2 %} ... {\ % if mod3 == 0 %}<div class="w-100"></div>{\% endif %}`的作用是：
每两个 div 后添加一个新的 div。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-modulo.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-modulo.jpg" alt="语法 mod 的效果展示">
            </a>
        </div>
    </div>
</figure>

## 第五步：文件搬家

1. 将 <b>_posts</b> 目录中和 jekyll 相关的文章移动到 <b>_jekyll</b> 目录中;
2. 编辑相应的文章，修改文章布局：`layout: post` => `layout: jekyll`；
3. 编辑专题列表页（根目录/jekyll.html），设置固定链接：`permalink: /jekyll/`；
4. 编辑专题内容页（根目录/_layouts/jekyll.html），删除“标签”和“分类”的超链接；
5. 访问 <b>http://localhost:4000/jekyll/</b> 即可浏览到最终效果。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-end.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-end.jpg" alt="专题 jekyll 的目录页效果">
            </a>
        </div>
    </div>
</figure>

另外，如果不想每次写文章都手动注明“布局的名称”，那就可以在 <b>_config.yml</b>文件底部添加以下内容：

参考文档：[《Front matter defaults》](https://jekyllrb.com/docs/step-by-step/09-collections/#front-matter-defaults")

{% highlight plaintext %}
defaults:   # 默认设置属性
  - scope:
      path: ""
      type: "jekyll"
    values:
      layout: "jekyll"
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
  - scope:
      path: ""
    values:
      layout: "default"
{% endhighlight %}

## 2021.03.29 补充:

这里还可以注册自定义合集的名称，代码为 `collections_dir: docs`，如果启用该项，则：

1. 需要在根目录下创建文件夹 "docs"；
2. 所有专题文件夹（如 _jekyll）和默认文件夹 “_post” 都要移动到 “docs” 文件夹下
3. 专题文章链接会由 “abc.com/jekyll/abc.html” 变为 “abc.com/docs/jekyll/abc.html”；置于 “_post”文件夹中的文件链接则不变。

第一步中的代码则变为：

{% highlight plaintext %}
#自定义合集目录名称不能以下划线“_”开头。
#当启用时，需要将“_post目录（这也是合集：默认的文章合集）”也移到该目录下。
collections_dir: docs
collections:
    jekyll: # 这是集合名称，在目录中名称为“_jekyll”
        output: true  # 是否允许集合内文档作为单个文件进行输出
        permalink: /docs/jekyll/:title/ #设置url格式
{% endhighlight %}

第二步中的文章结构为：

{% highlight plaintext %}
qinyuanchunxue.github.io
    |- _includes
    |- _layouts
    |- docs
        |- _jekyll  # 创建的专题目录
        |- _posts
    ......
    ......
    ......
{% endhighlight %}

第三步中的创建文件改为在专题目录中创建 index.html 文件。

{% highlight plaintext %}
|- docs
    |- _jekyll  # 专题目录
        ......
        |— index.html # 创建的文件（用作专题的目录页）
        #问题1：这里 jekyll 不会使用集合 jekyll 目录下的 index.html，而是生成自己的 index.html。
        #解决办法：在集合 jekyll 目录下的 index.html 上添加属性 “permalink: /docs/jekyll/”。
        #问题2：在 index.html 上添加目录代码时，会发现该 index.html 也会同时出现，除了影响阅读之外还会造成SEO抓取的死循环。
        #解决办法：利用添加特定的标签，隐藏该 index.html。
    |- _posts
{% endhighlight %}

第四步的代码则为：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-after-new.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-after-new.jpg" alt="专题 jekyll 目录页的代码-新">
            </a>
        </div>
    </div>
</figure>