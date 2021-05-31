---
title:         教程：在 Windos 上使用 Jekyll  
date:          2020-07-23 13:05 +0800
description:   记录第一次安装 Jekyll 的过程。
order:         101
---

## 安装 Jekyll

很顺利，没有想象中的那么难，可能是因为版本更新已经把问题都解决了吧。

### 第一步：安装环境

登录[官网](https://rubyinstaller.org/downloads/)，下载安装包；
如果不知道下载那个好的话，可以按照页面右侧的推荐，选择“Ruby + Devkit 2.7.1-1（x64）”进行下载。

<p class="post-body-mark">
2021.03.25更新：推荐下载已更改为“Ruby+Devkit 2.7.2-1 (x64)”。
</p>

下载完成后，双击运行安装程序。执行默认安装，在<b>“是否安装 MSYS2”</b>界面时选择确认安装。

安装完成后会弹出新的对话框，提示<b>“是否安装MYSY2”</b>，按回车键执行默认安装；

等待安装完后，再按回车键，对话框会自动关闭。

至此，jekyll需要的环境就安装完成了。

### 第二步：安装 Jekyll

点击<b>“开始菜单”</b>，在<b>“最近添加”</b>一栏可以看到出现了一个新的项目<b>“Start Command Prompt with Ruby”</b>，
这就是我们以后要用来运行 Jekyll 的工具了；现在打开它，并运行以下命令：

{% highlight ruby %}

gem install jekyll bundler  # 安装 Jekyll 和 bundler、gems

gem jekyll new myblog   # 建立站点“myblog”
    
cd myblog   # 转到站点目录
    
bundle exec jekyll serve(s)    # 运行站点

{% endhighlight %}

接着打开浏览器，输入网址 <b>“http://localhost:4000”</b> 就可以看到新网站了。

到此，Jekyll 的安装就完成了。

## 创建 Jekyll 主题

### 第一步：添加一篇文章

打开文章所在的文件夹 <b>_posts</b>，复制其中的示例文章，并重新命名。

文章命名遵循的格式为：<b>年-月-日-标题.MARKUP</b>；在这里，年是 4 位数字，月和日都是 2 位数字，扩展名则代表了这篇文章是用什么格式写的。

示例：

{% highlight plaintext %}
2020-07-23-how-to-use-jekyll-on-windows.md
{% endhighlight %}

回到浏览器刷新页面，会发现多了一篇同名文件，但路径却不相同；路径和我们文件名一致的就是我们新添加的文章了。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/add_post.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/add_post.png" alt="jekyll 复制文章并重命名">
            </a>
        </div>
    </div>
</figure>

### 第二步：修改文章内容

#### 修改文章标题

通过编辑器查看文章内容，我们可以发现在文章顶部发现存在这样的内容：

{% highlight plaintext %}
layout: post
title:  "Welcome to Jekyll!"
date:   2020-07-23 11:52:49 +0800
categories: jekyll update
{% endhighlight %}

这一部分内容称为 [“YAML 头信息(YAML front- matter)”](http://jekyllcn.com/docs/frontmatter/)，
涉及到的变量大概有以下这些：

<figure class="post-content-table">
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
                <td>文章日期。该日期会覆盖文章名字中的日期，这样就可以用来保障文章排序的正确。<br>日期的具体格式为 <code>YYYY-MM-DD HH:MM:SS +/-TTTT</code> ；这里的“时，分，秒和时区”都是可选的。</td>
            </tr>
            <tr>
                <th>permalink</th>
                <td>文章URL，设置后可覆盖默认的URL格式。</td>
            </tr>
            <tr>
                <th>published</th>
                <td>文章状态，设置 <code>false</code> 后可隐藏该文章。</td>
            </tr>
            <tr>
                <th>category <br/> categories</th>
                <td>归属分类。若存在多个分类，则可以指定为<a href="https://en.wikipedia.org/wiki/YAML#Basic_components">YAML列表</a>或相互之间用空格分隔开。</td>
            </tr>
            <tr>
                <th>tag <br/> tags</th>
                <td>文章标签。若存在多个标签，则可以指定为<a href="https://en.wikipedia.org/wiki/YAML#Basic_components">YAML列表</a>或相互之间用空格分隔开。</td>
            </tr>
        </tbody>
    </table>
</figure>

<p class="post-body-mark">
注1：以上变量都可以在网站根目录下的配置文件 <b>_config.yml</b> 中设置默认值，具体方法请参考文档<a href="http://jekyllcn.com/docs/configuration/#front-matter-defaults">《配置》</a>。
</p>
<p class="post-body-mark">
注2：
<br>
1. 对于变量 <code>categories</code> 和 <code>tags</code>，请参考这里<a href="https://jekyllrb.com/docs/posts/#tags">《标签和类别》</a>。
<br>
2. tag(单数形式)后面的字符串，中间有空行也算是一个，示例：tag: classic hollywood，标签为“classic hollywood”。
<br>
3. tags(复数形式)后面的字符串，中间有空行则算为多个，示例：tags: classic hollywood，标签为“classic”和“hollywood”。
</p>

OK，现在我们已经了解了 [“YAML 头信息(YAML front- matter)”](http://jekyllcn.com/docs/frontmatter/)的规则，
那么接下来就尝试改一下吧。修改如下：

{% highlight plaintext %}
layout: post
title:  如何在Windos上安装jekyll
date:   2020-07-23 13:05 +0800
categories: jekyll
tags:   jekyll
{% endhighlight %}

返回页面刷新一下看看，发现页面标题已经更改过来了。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/revise_post_title.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/revise_post_title.png" alt="jekyll 修改文章标题">
            </a>
        </div>
    </div>
</figure>

#### 修改文章内容

接下来是修改文章内容，当前是这个样子的：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post.png" alt="jekyll 当前文章内容">
            </a>
        </div>
    </div>
</figure>

##### 修改日期，使其显示中文

说到这，咱们会发现网站当前目录下没有和模板相关的东西，那么要去哪里改呢？

答案：要去<b>主题</b>那里改。

<p class="post-body-mark">
建议：先复制一下原文件，然后再去修改；如忘记备份，可通过<a href="https://github.com/jekyll/minima">这里</a>下载原版文件。
</p>

继续之前打开的命令行窗口，按照提示，使用快捷键 <kbd>Ctrl+C</kbd> 关闭服务器。

然后运行命令 `bundle info --path minima` （“minima”为当前使用的默认主题名称）得到当前主题的所在地址：C:/Ruby27-x64/lib/ruby/gems/2.7.0/gems/minima-2.5.1。

<p class="post-body-mark">
参考文档：<a href="https://jekyllrb.com/docs/themes/#overriding-theme-defaults">《覆盖主题默认值》</a>
</p>

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/layouts.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/layouts.png" alt="jekyll 默认主题 minima 所在的位置">
            </a>
        </div>
    </div>
</figure>

根据之前获得的信息（YMAL头信息），我们可以知道当前文章内容页使用的模板文件名是 <b>post</b>，存放于 <b>_layouts</b> 文件夹中；所以我们接下来要编辑的文件就是 <b>“post.html”</b>。

其中关于“日期”的部分内容如下：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_date.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_date.png" alt="jekyll post.html中关于日期部分的代码">
            </a>
        </div>
    </div>
</figure>

让我们修改一下：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/revise_post_date.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/revise_post_date.png" alt="jekyll post.html 中修改后的日期代码">
            </a>
        </div>
    </div>
</figure>

运行命令 `bundle exec jekyll s` ，重新启动 Jekyll 服务，然后刷新浏览器，检查效果。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_date_new.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_date_new.png" alt="jekyll post.html 中修改后的日期效果">
            </a>
        </div>
    </div>
</figure>

可以看到日期已经改过来了（就是日期和月份弄错了^_^）。那么接下来就按照自己想要的样子大刀阔斧的进行改造吧。

<p class="post-body-mark">
注1：相关使用和注意事项，请参考<a href="https://jekyllrb.com/docs/">《官网文档》</a>以及默认主题提供的范例。
</p>

<p class="post-body-mark">
注2：<b>_layouts</b> 目录下有个 <b>default.html</b> 文件可以看看。
</p>

#### 修改 CSS 样式

1. 参考上一步，修改页面结构：将模板文件覆盖到对应文件，并用 jekyll 的语法（直接搜索“ jekyll 语法”即可）替换相应部分的代码。
2. 修改样式：将 css、js、img 等文件移动到相应的 _scss 和 assets 目录下，并在 “_includes/header.html” 中修正路径。
3. 关于代码高亮，可以参考[《高亮代码介绍》](https://jekyllrb.com/docs/liquid/tags/)和[短名称列表](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers)；
    1. 这个不是自动的，需要你先生成配置样式；然后手动添加到网站才能使用；
    2. 我这里没管它，直接复制一个喜欢的网站上的高亮样式，添加到网站上使用；
    3. 如果你没有喜欢的样式，可以点击[这里](https://mazhuang.org/rouge-themes/)查看默认的 rouge 样式有哪些。

最终成品如下：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_new.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_new.jpg" alt="jekyll 文章内容页修改后的最终效果图">
            </a>
        </div>
    </div>
</figure>

### 卸载 jekyll 

吐槽：百度搜到的一些文章的卸载命令是之所以不管用，是因为单词 <b>uninstall</b> 少了一个字母 <b>n</b>。

{% highlight ruby %}
# 正确的
gem uninstall jekyll

# 错误的
gem unistall jekyll
{% endhighlight %}