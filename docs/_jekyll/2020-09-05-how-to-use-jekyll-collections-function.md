---
title:  "教程：使用 Jekyll 的 Collections 功能"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.jpg"
excerpt: "介绍 Jekyll 的 Collections 功能，可以用它制作专题功能。"
date:   2020-09-05 10:40:00 +0800
modified-date: 2020-09-05 10:40:00 +0800
tag: jekyll,collections
category: jekyll
---
<figure class="post-mark">
   <p>前言：下文中提到的“专题”、“收藏夹”、“集合”都是指“Collections功能”。</p>
</figure>



## 参考文档

1. [《文档-集合（Collections）》][jekyll-docs-zh-collections]
2. [《11. Introduction to collections》][11.Introduction to collections]



## 第一步：修改配置文件，注册新的专题

1. 将下面的代码加入您的 <b>_config.yml文件</b> 中。
```text
collections:
    # 这是新专题的名称，不要让它和类别重名，以免发生路径冲突;且英文字母之间不推荐使用连字符进行连接。
    jekyllStudy: 
        # 是否允许集合内文档作为单个文件进行输出
        output: true
        # 设置url格式，参考：http://jekyllcn.com/docs/permalinks/，https://github.com/jekyll/jekyll/issues/2293
        # 示例：http://localhost:4000/jekyllStudy/how-to-use-jekyll-collections-function.html
        permalink: /:collection/:title.html 
```

2. 重启 jekyll 服务，以使设置生效。
```ruby
# 组合键 Ctrl+C，退出服务
bundle exec jekyll s # 重新运行服务
```



## 第二步：创建专题文件夹

1. 专题文件夹需要放置于根目录下，和“<b>_post文件夹</b>”平级；且文件名格式为“<b>下划线+英文字母</b>”。示例：
```text
|— MyBlog
    |— _JekyllStudy
    |— _posts
```

2. 将相应的文件放入专题文件夹中。
```text
|— MyBlog
    |— _JekyllStudy
       |— 2023-05-06-how-to-use-jekyll-on-windows.md
       |— 2023-05-07-how-to-use-jekyll-collections-function.md
    |— _posts
```



## 第三步：制作专题列表页

1. 制作方式很简单，在根目录下创建与专题同名的网页文件即可。
```text
|— MyBlog
    |— JekyllStudy.md # 复制“index.markdown”文件并重命名为“JekyllStudy.md”
    |— index.markdown
```
2. 返回浏览器并刷新专题列表页“http://localhost:4000/JekyllStudy/”，可以看到页面发生了更改。
3. 编辑专题列表页，让它显示属于该专题的全部文章。
   1. 复制[《文档-集合（Collections）》][jekyll-docs-zh-collections]中的最后一段代码到“<b>JekyllStudy.md</b>”中。
   2. 更改代码中调用的集合。
```html
   for album in site.albums 
   更改为
   for album in site.JekyllStudy
```
   3. 返回浏览器并刷新页面，可以看到属于该专题内的文章全部出现了。
4. 创建专题列表页的模板。
   1. 在“<b>_layouts文件夹</b>”中创建专题模板“<b>collections.html</b>”。
```html
   # 为了正常显示，这里使用了转义符号“/”。
   /{/% include header-collections.html %}
   /<div class="main">
    /{/{ content }} # content是全局变量，参见介绍：http://jekyllcn.com/docs/variables/
   /</div>
   /{/% include footer.html %}
```

   2. 在“<b>_includes文件夹</b>”复制“<b>header.html</b>”，然后重命名为“<b>header-collections.html</b>”；
```html
   # 为了正确显示页面标题，将 site.title 更改为 page.title。
   /<title>/{/{ site.title }} - /{/{ site.description }}</title>
   更改为
   /<title>/{/{ page.title }} - /{/{ site.title }}</title>
```

   3. 修改专题文件“<b>JekyllStudy.md</b>”的“<b>YAML头信息</b>”。
```html
   layout: home
   更改为
   layout: collections
```

   4. 返回浏览器并刷新页面，内容可以正常显示。




## 第四步：样式设置

经过前面的几步，你已经拥有了一个专题和对应的专题列表页，现在你可以对专题列表页的样式进行详细设置了。

如果需要的话，你还可以为专题内的文章设置不同的样式，复制并重命名“<b>_layouts文件夹</b>”中的“<b>post.html文件</b>”即可；
还有就是设置完后别忘了修改专题文章的“<b>YAML头信息</b>”。



## 第五步：将所有集合放在同一个目录中

1. 如果有很多专题的话，那为了方便管理，你指定一个目录将它们放在一起；但相应的你需要将“<b>\_posts文件夹（默认文章）</b>”和“<b>\_drafts文件夹（草稿）</b>”一起挪过去，因为它们也算是一种合集。
2. 同时该目录的名字不能以下划线（“_”）开头。
```text
# 根目录下“_config.yml”文件
collections_dir: docs
collections:
    JekyllStudy: # 这是新专题的名称，它会和类别产生路径冲突，所以不要重名。
```
```text
# 根目录下文件和文件夹结构
|— MyBlog
    |— docs
        |— _drafts
        |— _JekyllStudy
        |— _posts
    |— index.markdown
    |— JekyllStudy.md    
```
```ruby
# 退出并重启服务
组合键 Ctrl+C
bundle exec jekyll s
```



[jekyll-docs-zh-collections]: http://jekyllcn.com/docs/collections/
[11.Introduction to collections]: https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/ "网站cloudcannon对集合的介绍"