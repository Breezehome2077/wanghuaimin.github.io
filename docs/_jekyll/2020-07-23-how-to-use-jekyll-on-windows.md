---
title:  "教程：在 Windows 上安装并使用 Jekyll"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.jpg"
excerpt: "在 Win 系统上安装和使用 Jekyll 的详细步骤。"
date: 2020-07-23 07:06:00 +0800
modified-date: 2023-06-29 06:51:00 +0800
tag: jekyll,install
category: jekyll
---

## 2023.06.29 更新

1. 登录 [Ruby官网][Ruby官网]，下载安装包；如果不知道下载那个好的话，可以按照页面右侧的文字提示下载推荐版本。
2. 下载完成后，运行安装包，一路选择默认安装；安装完成后会弹出新的（命令行）安装窗口，再次选择默认安装。
3. 安装完成后按照提示升级“gem”版本，如果没有提示则跳过该步。
4. 点击“开始菜单”，在“最近添加”中可以找到新项目<b>“Start Command Prompt with Ruby”</b>，点击运行。
5. 运行命令 <code>gem install jekyll bundler</code>（这里推荐完成第六步，换为国内源后再来执行该命令）。
6. 执行以下命令，将 ruby 源换成国内源。
   1. 我在这里浪费了实打实一天的功夫，程序在执行 <code>jekyll new blog</code> 命令时卡主了，提示“<code>Running bundle install in C:/MyBlog/blog...</code>”，就再也没反应了。
   2. 刚开始以为是工具不行，搜索解决方法，寻找工具，结果还是不行，这个过程就花了上午9点到下午2点的时间。
   3. 接着搜索到国内源，按照方法切换到国内源，结果还是在这里（<code>Running bundle install in C:/MyBlog/gsd...</code>）卡主了。
   4. 继续搜寻解决办法，无果；然后突然发现工具还开着，关闭后，依旧卡主。
   5. 破罐子破摔。
   6. 去做其他事情了，忙完回来后自己好了。
   7. 总结：检查命令，命令无问题后，就是<strong>网络问题</strong>，无论国外还是国内，慢慢等；实在不行就去做别的，换个<strong>其他时间段</strong>（比如说晚上），<strong>别干耗着</strong>。
```ruby
      # 清除可能存在的错误
      rm -rf ~/.bundle/ ~/.gem/
      -rf $GEM_HOME/bundler/ $GEM_HOME/cache/bundler/
      -rf .bundle/
      rm -rf vendor/cache/
      rm -rf Gemfile.lock
      
      # 切换ruby为国内源
      gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
      
      # 更新缓存
      gem sources --update
      
      # 检查变更
      gem sources      

      # 切换bundler为国内源
      bundle config mirror.https://rubygems.org https://gems.ruby-china.com
      
      # 检查变更
      bundle config
```
7. 创建新项目
```ruby
   # 因为网站要放到 github 上，所以需要你根据“ 步骤10 ”开通“ Github-Pgaes ”功能（此操作会创建一个新的存储库）；
   # 创建与新存储库名同名的项目名，防止因为软件升级导致网站不能正常运行（参考“ 步骤10.4 ”）。
   jekyll new qinyuanchunxue.github.io 
```
8. 安装过程中可能会遇到的问题一览。
   1. 提示“<code>Deprecation Warning: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.</code>”
```text
      # 解决办法是，打开根目录下的 Gemfile 文件，找到下面的位置，添加新的代码。
      group :jekyll_plugins do # 找到这里，
      gem "jekyll-feed", "~> 0.12"
      gem "jekyll-sass-converter", "~> 2.0"  #要添加的新代码，版本为 2.0 以上即可。
      gem 'jekyll-sitemap', '~> 1.4'
      gem "jekyll-include-cache", '~> 0.2.1'
      end
      
      #解决办法2：放着不管，安装完 gitub-pages 后提示会提示你如何修改（参见下一步：8.安装“ Github-Pages ”）。
```
   2. 提示“<code>Warning: the running version of Bundler ... </code>”
```text
      # 将网站从旧环境移动到新环境后就可能会出现这个问题。
      # 这里出现这个问题的原因是我想更新这篇文章，于是就把旧环境卸载了，准备重装，结果就出现了这个问题。
      # 我搜了很多解决办法，浪费了很多时间，但没用。
      # 最终发现的解决办法是：不移动整个网站，而是仅移动“主题+内容”，配置文件不动；然后对照旧的配置文件，修改新的配置文件。
      # 创建一个新的网站，然后运行，这样新的配置文件就生成。
      # 停止运行，移动文件和修改配置文件；期间新网站没装的插件手动装上。
      # 主题+内容：_include文件夹、 _layouts文件夹、_assets文件夹、_docs（创建的合集）文件夹、_根目录下的单页面主题模板（如404.md、index.md等）。
      # 配置文件（根目录下）：.gitignore文件、_config.yml文件、Gemfile文件、Gemfile.lock文件。
```
   3. 提示“<code>bundler: failed to load command: jekyll ... in `require': cannot load such file -- webrick (LoadError)</code>”。
```ruby
      # 原因是 Ruby 3.0 后，webrick 不再一起提供。
      # https://github.com/github/pages-gem/issues/752
      # 运行以下命令即可。
      bundle add webrick
```
   4. 发现网站修改后，生成特别慢。
```ruby
      # 有可能是没有安装 jekyll-include-cache。
      # 检查有无安装
      gem list
      
      # 如果没有安装，则手动安装
      gem install jekyll-include-cache
      # 然后修改根目录下的 _congif.yml 文件
      plugins:    # 找到这里
        - jekyll-feed
        - jekyll-seo-tag
        - jekyll-sitemap
        - jekyll-include-cache  # 要添加的记录
      # 接着修改根目录下的 Gemfile 文件
      group :jekyll_plugins do   # 找到这里
        gem "jekyll-feed", "~> 0.12"
        gem "jekyll-sass-converter", "~> 1.5.2"
        gem 'jekyll-sitemap', '~> 1.4'
        gem "jekyll-include-cache", '~> 0.2.1'  # 要添加的记录
      end
      # 最后重新启动网站
      
      # 如果有安装，但还是慢，可以参考这篇文章进行检查。
      # https://cloudcannon.com/blog/speed-up-your-jekyll-builds/
      # 文章内容简单概括：
      # 1. 升级 jekyll 版本。
      # 2. 排除与构建网站无关的文件和文件夹。
      # 3. 多语言环境（这里推荐插件 https://gtranslate.io/ 代替 ）。
      # 4. 检查 Liquid 语法，可以用下面的命令，检测渲染时间。
      bundle exec jekyll build --profile
      # 5. 重新确认已安装的插件是否是必须的。
      # 6. 寻求新技术，比如说 https://images.weserv.nl/，它可以免费为您提供不同分辨率的缩略图,这样就不用再额外安装插件进行图片处理了。
```
   5. 发现 \_site 文件夹中的 sitemap.xml 站点地图文件中的网址是以“localhost://4000”开头。
```ruby
   # 这是因为站点地图插件 jekyll-sitemap 的生成命令需要执行 “jekyll build”，如果执行“jekyll s(service)” 就会这样；
   # 参考文档：https://blog.csdn.net/qq_33919450/article/details/129282355
   # 因为之前安装 bundler 软件，所以新的生成命令是“ bundle exec jekyll build ”。
   # 首先编辑 _config.yml 文件，在开头部分找到“ url ”选项，添加域名网址，使其变成“ url: "https://www.wangzhaomin.com" ”。
   # 然后运行命令，重新生成站点地图。
   bundle exec jekyll build
   # 如果提示“Auto-regeneration: disabled. Use --watch to enable.”
   # 无视它，因为没有安装 jekyll-admin 插件，参考文档：
   # https://stackoverflow.com/questions/43559969/jekyll-auto-regeneration-not-working-even-with-watch-used
```
9. 安装“Github-Pages”。
```ruby
   # 安装 github-pages
   gem install github-pages
   
   # 检查是否安装成功（这里耗费了一些时间，原因是执行了但没有安装成功）
   gem list    
```
```text
   # 修改根目录下的 Gemfile 文件，按照提示操作：
   # 注释掉“ gem "jekyll", "~> 4.3.2" ”。
   # 取消对“ gem "github-pages", group: :jekyll_plugins ”的注释。
```
```ruby
   # 更新依赖项
   bundle update github-pages
   
   # 提示“ Could not find gem 'jekyll-sass-converter (~> 2.0)' in ... Run `bundle install` to install missing gems. ”
   # 这个就是前面提到的不用管，接下来按照提示进行操作就好了。
   bundle install
```
10. 剩余部分，参考文档：[《教程：将 Jekyll 博客推送到 GitHub》](/docs/jekyll/how-to-push-Jekyll's-blog-to-github.html)
    1. 在 github 上开通“Github-Pgaes”功能（此操作会创建一个新的存储库）；
    2. 安装[GitBish](https://gitforwindows.org/)软件，并一路默认安装；
    3. 运行“Git Bish”；
       1. 配置身份信息（如果感觉字号偏小，可以在命令窗口，右击鼠标，在右键菜单中找到设置选项“ Options ”进行修改。）
       2. 进入指定目录，然后克隆新仓库内容到本地；如果没有指定目录的话，默认位置在“ C:\Users\username\”这里。
    4. 将 CANME 文件和隐藏的 .git 文件夹移动到博客目录下。
       1. 在参考文档中的操作：删除其他文件，然后将博客文件移动到仓库目录下，最后在仓库目录下运行 jekyll。
       2. 这里改为了直接创建与仓库名同名的项目（网站）名，然后把仓库文件移动网站（博客）目录下（参见“步骤7”）。
       3. 原因是这样可以避免<b>步骤 8.2 </b>中提到的问题，因为版本升级导致网站不能在仓库目录下运行。
    5. 关掉服务，运行命令“<code>bundle exec jekyll build</code>”生成新的站点地图（参见“步骤8.5”）。
    6. 推送到 github。
   
       






## 参考文档

1. [《官方文档》][jekyll-docs]
2. [《官方中文文档》][jekyll-docs-zh]



## 第一步：安装环境

1. 登录 [Ruby官网][Ruby官网]，下载安装包；如果不知道下载那个好的话，可以按照页面右侧的文字提示下载推荐版本。
2. 下载完成后，运行安装包，一路选择默认安装；
3. 安装完成后会弹出新的（命令行）安装窗口，再次选择默认安装；
4. 安装完成后按照提示升级“gem”，如果没有提示则跳过该步。



## 第二步：安装并运行 Jekyll

1. 点击“开始菜单”，在“最近添加”中可以找到新项目<b>“Start Command Prompt with Ruby”</b>，这就是我们以后要用来运行 Jekyll 的工具了，点击打开。 
2. 运行以下命令，安装并运行Jekyll。
```ruby
    cd Jekyll # 进入自定义安装位置
    gem install jekyll bundler # 安装jekyll 和 bundler
    jekyll new MyBlog # 创建新项目
    cd myblog # 进入项目文件夹
    bundle exec jekyll s # 运行项目
```
   <figure class="post-mark">
      <p>注：指定文件夹的目的是将 jekyll 安装到自己想要的位置；如果没有指定文件夹就完成了安装的话，可以使用命令：<code>gem uninstall jekyll</code> 进行卸载，然后再重新安装。</p>
   </figure>

3. 打开浏览器，在地址栏输入网址：[http://localhost:4000/][localhost:4000] 就可以看见项目网页了。
4. 如果命令行窗口提示：<code>Deprecation Warning: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.</code>，可按以下操作进行处理。
   1. 打开根目录下的 <b>Gemfile文件</b>，如果没有就自己创建建一个，该文件无后缀（无拓展名）。
   2. 找到 <code>group :jekyll_plugins do</code> 一行（如图所示），在代码下方添加 <code>gem "jekyll-sass-converter", "~> 2.0"</code>。
```text         
       # If you have any plugins, put them here!
       group :jekyll_plugins do  # 找到这里
       gem "jekyll-feed", "~> 0.12"
       gem "jekyll-sass-converter", "~> 2.0" # 添加代码
       end
       # Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
```
   3. 运行命令 <code>bundle update</code>，等待 <b>Sass</b>完成升级；
   4. 再次运行命令 <code>bundle exec jekyll s</code>启用服务，现在命令行窗口就没有错误提示了。
   <figure class="post-mark">
      注：
      <ol>
         <li>关于 <b>Gemfile文件</b> 的相关介绍可以通过阅读<a title="官方文档关于插件的介绍" href="https://jekyllrb.com/docs/plugins/installation/#using-a-gemfile">《文档-插件》</a>获得。</li>
         <li>解决方法来源于：<a title="参考链接" href="https://www.reddit.com/r/Jekyll/comments/zunif0/help_please_i_keep_getting_deprecation_warnings/">https://www.reddit.com/r/Jekyll/comments/zunif0/help_please_i_keep_getting_deprecation_warnings/</a></li>
      </ol>
   </figure>



## 第三步：添加一篇文章

1. 打开自带的文章所在的文件夹 <b>“_posts”</b>，复制其中的示例文章，并重新命名。
2. 文章命名遵循的格式为：<b>“年-月-日-标题.MARKUP”</b>；在这里，年是 4 位数字，月和日都是 2 位数字，扩展名则代表了这篇文章是用什么格式写的。
~~~ text
# 示例
2023-05-06-how-to-use-jekyll-on-windows.md
~~~
3. 返回浏览器并刷新页面，就可以看到新增加的文章了。



## 第四步：修改文章的内容

1. 通过编辑器查看自带的第一篇文章，我们可以发现文章的结构如下：
```markdown
/---
layout: post
title:  "Welcome to Jekyll!"
date:   2023-05-06 06:30:30 +0800
categories: jekyll update
/---
You’ll find this post in your `_posts` directory. Go ahead and edit it ...
```
2. 在两行三虚线之间的部分是“<b>[YAML 头信息(YAML front-matter)][YAML头信息]</b>”，你可以在这里修改文章的标题、时间、类别等信息。涉及到的变量主要有以下这些：
    <figure class="post-table">
        <table class="table">
            <thead>
                <tr>
                    <th>变量</th>
                    <th>描述</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>layout</th>
                    <td>指定使用的模板文件名称；该模板文件位于 <code>_layouts</code> 目录下。</td>
                </tr>
                <tr>
                    <th>title</th>
                    <td>文章标题</td>
                </tr>
                <tr>
                    <th>excerpt</th>
                    <td>文章摘要；默认设置下摘要为文章第一段的内容，推荐用一句话概括文章内容。</td>
                </tr>
                <tr>
                    <th>author</th>
                    <td>文章作者</td>
                </tr>
                <tr>
                    <th>date</th>
                    <td>文章日期。该日期会覆盖文章名字中的日期，这样就可以用来保障文章排序的正确。<br>日期的具体格式为 <code>YYYY-MM-DD HH:MM:SS +/-TTTT</code>；这里的“时，分，秒和时区”都是可选的。</td>
                </tr>
                <tr>
                    <th>permalink</th>
                    <td>文章 URL，设置后可覆盖默认的 URL 格式。</td>
                </tr>
                <tr>
                    <th>published</th>
                    <td>文章状态，设置 <code>false</code> 后可隐藏该文章。</td>
                </tr>
                <tr>
                    <th>category <br> categories</th>
                    <td>归属分类，若存在多个分类，则可以通过 <a title="维基百科中关于YAML的介绍" href="https://en.wikipedia.org/wiki/YAML#Basic_components" rel="noopener noreferrer">YAML List</a> 或相互之间用英文逗号分隔开。</td>
                </tr>
                <tr>
                    <th>tag <br> tags</th>
                    <td>文章标签，若存在多个标签，则可以通过 <a title="维基百科中关于YAML的介绍" href="https://en.wikipedia.org/wiki/YAML#Basic_components" rel="noopener noreferrer">YAML List</a> 或相互之间用英文逗号分隔开。</td>
                </tr>
            </tbody>
        </table>
    </figure>
   <figure class="post-mark">
      注：
      <ol>
         <li>对于变量 <code>categories</code> 和 <code>tags</code> 的介绍，请参考这里<a title="官方文档中关于标签的介绍" href="https://jekyllrb.com/docs/posts/#tags" rel="noopener noreferrer">《标签和类别》</a>。</li>
         <li>关于空格：
            <ol>
               <li>tag(单数形式) 后面的字符串，中间有空格也算作一个，示例：“tag: classic hollywood”，标签为：“classic hollywood”。</li>
               <li>tags(复数形式) 后面的字符串，中间有空格则算为多个，示例：“tags: classic hollywood”，标签为：“classic”和“hollywood”。</li>
               <li>“category” 和 “categories” 同上。</li>
            </ol>
         </li>
      </ol>
   </figure>
   
3. 在两行三虚线之下的部分是文章的内容部分，你可以在这里修改文章的内容。



## 第五步：修改文章的样式

1. 修改文章样式之前，需要先找到样式表 <b>style.css</b> 在哪。
2. 通过文章顶部的<b>头信息</b>可以知道当前文章用的模板是 <b>post</b>，但我们现在找不到它。
3. 阅读[《文档-layouts》][jekyll-docs-layouts]，我们了解到模板 <b>post</b> 的全名为 <b>post.html</b>，位于根目录 <b>_layouts文件夹</b> 中，因此我们需要创建对应的文件。
```text
— Myblog
    |— _layouts
        |— post.html
    |— _post
        |— 2023-05-06-how-to-use-jekyll-on-windows.md
        |— 2023-05-06-welcome-to-jekyll.markdown
```
4. 返回文章页面并刷新，页面变成了空白，这是因为我们 <b>post.html</b> 文件中没有内容导致的。
5. 复制以下内容到 <b>post.html</b> 文件中。
```html
\<!doctype html>
\<html lang="zh-cn">
    \<head>
        \<meta charset="utf-8">
        \<meta name="viewport" content="width=device-width, initial-scale=1">
        \<title>Bootstrap demo</title>
        \<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    \</head>
    \<body>
        \<h1>Hello, world!</h1>
        \<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    \</body>
\</html>
```
   <figure class="post-mark">
      注：
      <ol>
         <li>复制完后记得去掉前面的转义符号“\”；</li>
         <li>检查代码中的引号是否全部为英文引号，杜绝中英文引号混用；</li>
         <li>代码链接：https://getbootstrap.com/docs/5.3/getting-started/introduction/#quick-start。</li>
      </ol>
   </figure>

6. 返回文章页面并刷新，现在页面出现内容了。
7. 阅读[《中文文档-常用变量》][jekyll-docs-zh-variables],用变量来替换 <b>post.html</b> 文件中的标题和内容。
```html
\<!doctype html>
\<html lang="zh-cn">
    \<head>
        \<meta charset="utf-8">
        \<meta name="viewport" content="width=device-width, initial-scale=1">
        \<title>\{\{page.title}}</title>
        \<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    \</head>
    \<body>
        \<div class="main">\{\{ page.content }}</div>
        \<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    \</body>
\</html>
```
8. 返回页面并刷新，现在页面内容回来了。
9. 阅读[《中文文档-静态文件》][jekyll-docs-zh-static-files]，可以看到图片文件放在“<b>assets文件夹</b>”中，所以这里将自定义样式表同样放到“<b>assets文件夹</b>”中；如果你喜欢，直接放到根目录下也可以。
```text
— Myblog
|— _post
    |— 2023-05-06-how-to-use-jekyll-on-windows.md
    |— 2023-05-06-welcome-to-jekyll.markdown
|— assets
    |— css
        |— wzm_style.css
    |— images
    |— js  
```
```html
\<head>
    \<meta charset="utf-8">
    \<meta name="viewport" content="width=device-width, initial-scale=1">
    \<title>\{\{page.title}}</title>
    \<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    \<link href="\{\{ site.url }}/assets/css/wzm_style.css" rel="stylesheet">
\</head>
```



## 第六步：修改文章的样式·拓展 —— 引用

1. 由于文章页面的顶部和底部是可以复用的，所以我们可以将其拆分出来，供其他页面（如 index.html）引用。
2. 阅读[《文档-includes》][jekyll-docs-includes]，可以知道引用的内容不一定都放在“<b>_includes文件夹</b>”中，但可复用的模板一般都放在这里，比如说“header.html”和“footer.html”。
3. 创建，然后拆分。
```text
    |— Myblog
        |— _includes
            |— footer.html
            |— header.html
        |— _layouts
            |— post.html
```
```html
    # header.html
    # 为了能够正常显示，添加了转义符“\”。
    \<!doctype html>
    \<html lang="zh-cn">
    \<head>
        \<meta charset="utf-8">
        \<meta name="viewport" content="width=device-width, initial-scale=1">
        \<title>\{\{page.title}}</title>
        \<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        \<link href="\{\{ site.url }}/assets/css/wzm_style.css" rel="stylesheet">
        \</head>
    \<body>
```
```html
    # footer.html
    \<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    \</body>
    \</html>
```
```html
    # post.html
    \{\% include header.html %}
    \<div class="main">\{\{ page.content }}</div>
    \{\% include footer.html %}
```
4. 返回浏览器并刷新文章页面，如果内容可以正常显示，就说明做对了；后续有其他可复用的模板，直接重复此操作就可以了。



## 第七步：修改主页、关于我们等页面

这个就简单了，直接阅读[《中文文档-页面》][jekyll-docs-zh-pages]，然后根据提示在根目录下创建对应的页面文件即可。
<figure class="post-mark">
   <p>注：没必要太过于纠结主页造型。虽然它很重要，但折腾这个的目的是记笔记，所以等以后熟悉了再慢慢折腾就行。</p>
</figure>



## 第八步：修改站点基本信息

这里需要修改根目录下的“<b>_config.yml文件</b>”，打开后可以看到详细的说明；然后根据提示进行修改，完成后重启服务就可以看到改变了。
```ruby
使用快捷键 Ctrl+C，退出服务； # 需要退出两次的原因是除了启动了jekyll外还启动了bundler服务。
bundle exec jekyll s # 运行服务
```



## 最后的话

至此，你已经可以简单使用 Jekyll 了；如果想学习更多，请继续阅读[《官方文档》][jekyll-docs]或者登录 [Jekyll问答社区][jekyll-talk] 来进行下一步的学习。


[Ruby官网]: https://rubyinstaller.org/downloads/
[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-docs-zh]: http://jekyllcn.com/docs/home/
[localhost:4000]: http://localhost:4000/ "点击打开本地网页"
[YAML头信息]: http://jekyllcn.com/docs/frontmatter/
[jekyll-docs-layouts]: https://jekyllrb.com/docs/layouts/
[jekyll-docs-zh-variables]: http://jekyllcn.com/docs/variables/
[jekyll-docs-zh-static-files]: http://jekyllcn.com/docs/static-files/
[jekyll-docs-includes]: https://jekyllrb.com/docs/includes/
[jekyll-docs-zh-pages]: http://jekyllcn.com/docs/pages/
[jekyll-talk]: https://talk.jekyllrb.com/