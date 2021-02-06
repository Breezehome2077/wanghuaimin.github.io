---
title:  "如何使用 jekyll 的集合（collections）功能"  
date:   2020-09-05 10:27 +0800
categories: jekyll
tags:   jekyll
---

jekyll 的集合（collections）功能相当于将围绕同一主题的多篇文章集合起来，组织成“专题”形式。

所以下文将用“专题”来指代 jekyll 的集合功能。

参考文章：[《集合（Collections）》](http://jekyllcn.com/docs/collections/) 、[《11. Introduction to collections》](https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/)


## 第一步：修改配置文件，注册自定义专题

首先我们要修改配置文件<mark>_config.yml</mark>，在文章底部添加以下内容：

{% highlight plaintext %}
collections:
  jekyll: # 这是专题名称
    output: true  # 允许渲染输出
    permalink: /jekyll/:path/ # 设置文章路径
{% endhighlight %}

如此就完成了专题<mark>jekyll</mark>的注册；接下来重启 jekyll 服务，以使更改生效。

## 第二步：创建专题目录

专题目录必须放在<mark>根目录</mark>下，和文件夹<mark>_post</mark>平级，文件名格式为<mark>\_***</mark>（怕编译冲突，所以文件名这里多加了一个反斜杠）。

由于我们注册的专题名为<mark>jekyll</mark>，所以我们要创建专题目录的为<mark>_jekyll</mark>,创建完成后的网站结构为：

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
    
在<mark>_layouts</mark>模板目录下创建专题内容页模板<mark>jekyll.html</mark>。
  * 如果需要修改，可在此模板文件中修改；
  * 如果不需要修改，可直接复制<mark>post.html</mark>文件中的内容放到此处。
  
## 第四步：创建专题列表页  

1. 复制根目录下的<mark>index.html</mark>，并更名为<mark>jekyll.html</mark>;
2. 将其中的 `site_posts` 更改为 `site_jekyll`；
3. 将其中的 `paginator.posts` 更改为 `site_post.posts`；
4. 移除 `{\%- include page_paginate.html -%}`；

修改前的<mark>jekyll.html</mark>主题内容：

<figure class="post-body-img-wrap rounded">
    <div class="row">
        <div class="col-12 col-lg-12">
            <img class="w-100 post-body-img" src="/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-before.png" alt="开通 github pages 界面">
        </div>
    </div>
</figure>

修改后的<mark>jekyll.html</mark>主题内容：

<figure class="post-body-img-wrap rounded">
    <div class="row">
        <div class="col-12 col-lg-12">
            <img class="w-100 post-body-img" src="/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-after.png" alt="开通 github pages 界面">
        </div>
    </div>
</figure>

其中 `{% assign mod3 = forloop.index | modulo: 2 %} *** {% if mod3 == 0 %}<div class="w-100"></div>{% endif %}`的作用是：
每两个div后添加一个新的div。

<figure class="post-body-img-wrap rounded">
    <div class="row">
        <div class="col-12 col-lg-12">
            <img class="w-100 post-body-img" src="/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-modulo.png" alt="开通 github pages 界面">
        </div>
    </div>
</figure>


## 第五步：文件搬家

1. 将<mark>_posts</mark>目录中和 jekyll 相关的文章移动到<mark>_jekyll</mark>目录中;
2. 编辑相应的文章，修改文章布局：`layout: post` => `layout: jekyll`；
3. 编辑专题列表页（根目录/jekyll.html），设置固定链接：`permalink: /jekyll/`；
4. 编辑专题内容页（根目录/_layouts/jekyll.html），删除“标签”和“分类”的超链接；
5. 访问<mark>http://localhost:4000/jekyll/</mark>即可浏览到最终效果。

<figure class="post-body-img-wrap rounded">
    <div class="row">
        <div class="col-12 col-lg-12">
            <img class="w-100 post-body-img" src="/assets/post/2020-09-05-how-to-use-jekyll-collections-function/jekyll-html-end.png" alt="开通 github pages 界面">
        </div>
    </div>
</figure>

注1：如果不想每次写文章都手动注明“布局的名称”，那就可以在<mark>_config.yml</mark>文件底部添加以下内容：

参考文章：[《Front matter defaults》](https://jekyllrb.com/docs/step-by-step/09-collections/#front-matter-defaults")

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

注2：分页功能未实现（原因：不知道怎么整，目前只知道分页功能仅在文件名为index.html的文件下才可以使用）。

注3：标签页和分类页未制作（原因：太麻烦，而且当前用不到，所以直接略过了。）