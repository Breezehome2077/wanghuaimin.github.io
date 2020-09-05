---
title:  "如何在 Windos 上使用 Jekyll"  
date:   2020-07-23 13:05 +0800
categories: jekyll
tags:   jekyll
---

萌新第一次在 windows 使用 jekyll 的记录贴。

## 安装 Jekyll

很顺利，没有想象中的那么难，可能是因为版本更新已经把问题都解决了吧。

### 第一步：安装环境

登录[官网](https://rubyinstaller.org/downloads/)，下载安装包；按下载界面的右侧有提示下载即可。
（这里下载的是“Ruby + Devkit 2.7.1-1（x64）”。）

下载完成后，双击运行安装程序。执行默认安装，在<mark>是否安装 MSYS2</mark>界面时选择确认安装。

安装完成后会弹出新的对话框，提示<mark>是否安装MYSY2</mark>，按回车键执行默认安装；安装完后再按回车键，对话框会自动关闭。

至此，jekyll需要的环境就安装完成了。

### 第二步：安装 Jekyll

点击<mark>开始菜单</mark>，在<mark>最近添加</mark>一栏可以看到出现了一个新的项目<i>Start Command Prompt with Ruby</i>。

打开它，并运行以下命令：

{% highlight plaintext %}

gem install jekyll bundler  #安装 Jekyll 和 bundler、gems

gem jekyll new myblog   #建立站点“myblog”
    
cd myblog   #转到站点目录
    
bundle exec jekyll serve    #运行站点

{% endhighlight %}

打开浏览器，输入网址“http://localhost:4000” 就可以看到新网站了。

Jekyll 安装完成。

## 修改 Jekyll 主题

### 第一步：添加一篇文章

打开文章所在的文件夹<mark>_posts</mark>，复制其中的示例文章，并重新命名。

文章命名遵循的格式为：<mark>年-月-日-标题.MARKUP</mark>；在这里，年是 4 位数字，月和日都是 2 位数字，扩展名则代表了这篇文章是用什么格式写的。
（这里我的文件名是：2020-07-23-how-to-use-jekyll-on-windows.markdown。）

回到浏览器刷新页面，会发现多了一篇同名文件，但路径却不相同；路径和我们文件名一致的就是我们新添加的文章了。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-8">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/add_post.PNG" alt="新建文章">
    </div>
</figure>

### 第二步：修改文章内容

#### 正确显示文章的标题

通过编辑器查看文章内容，我们可以发现在文章顶部发现存在这样的内容：

{% highlight plaintext %}
layout: post
title:  "Welcome to Jekyll!"
date:   2020-07-23 11:52:49 +0800
categories: jekyll update
{% endhighlight %}

这一部分内容称为[“YAML 头信息(YAML front- matter)”](http://jekyllcn.com/docs/frontmatter/)，
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
                <td>文章日期。该日期会覆盖文章名字中的日期，这样就可以用来保障文章排序的正确。<br>日期的具体格式为 <code>YYYY-MM-DD HH:MM:SS +/-TTTT</code> ；这里的 “ 时，分，秒和时区 ” 都是可选的。</td>
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

注：

1.以上变量都可以在网站根目录下的配置文件<mark>_config.yml</mark>中设置默认值，具体方法请参考文档[《配置》](http://jekyllcn.com/docs/configuration/#front-matter-defaults)。

2.对于变量<mark>categories</mark>和<mark>tags</mark>请参考这里[《标签和类别》](https://jekyllrb.com/docs/posts/#tags)。
单数后面的字符串，中间有空行也算是一个，示例：<mark>tag: classic hollywood</mark>,标签为<mark>classic hollywood</mark>。
复数后面的字符串，中间有空行则算为多个，示例：<mark>tags: classic hollywood</mark>,标签为<mark>classic</mark>和<mark>hollywood</mark>。

OK，现在我们已经了解了[“YAML 头信息(YAML front- matter)”](http://jekyllcn.com/docs/frontmatter/)的规则，
那么接下来就尝试改一下吧。修改如下：

{% highlight plaintext %}
layout: post
title:  "如何在Windos上安装jekyll"
date:   2020-07-23 13:05 +0800
categories: jekyll
tags:   jekyll
{% endhighlight %}

返回页面刷新一下看看，发现页面标题已经更改过来了。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-8">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/revise_post_title.PNG" alt="修改文章标题">
    </div>
</figure>

#### 正确显示文章内容

接下来是修改文章内容，目前是这个样子的：

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-8">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post.PNG" alt="文章目前样式">
    </div>
</figure>

##### 修改日期，使其显示中文

说到这，咱们会发现网站当前目录下没有和模板相关的东西，那么要去哪里改呢？

答案：要去<mark>主题</mark>那里改。
（建议：先复制一下原文件，然后再去修改；如果未备份，可通过[这里](https://github.com/jekyll/minima)下载原版文件。）

先选中之前打开的命令行窗口，按<kbd><kbd>Ctrl</kbd> + <kbd>C</kbd></kbd>组合键关闭服务器，
再输入<kbd>Y</kbd>确认关闭，然后运行命令 `bundle info --path minima`（“minima”为当前使用的默认主题名称）。
（更多介绍，请参考文档[《覆盖主题默认值》](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)。）

根据得到的结果打开主题所在地址（C:/Ruby27-x64/lib/ruby/gems/2.7.0/gems/minima-2.5.1）。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/layouts.PNG" alt="模板文件夹">
    </div>
</figure>

根据前面提到的信息，我们可以知道当前文章内容页使用的模板文件名是<mark>post</mark>，而且该文件存放于<mark>_layouts</mark>文件夹中。所以我们接下来编辑的文件是<mark>“post.html”</mark>。

其中关于“日期”的部分内容如下：

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_date.PNG" alt="文章日期">
    </div>
</figure>

让我们修改一下：

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/revise_post_date.PNG" alt="修改文章日期">
    </div>
</figure>

返回浏览器刷新一下，看看效果。（之前关闭过服务器，别忘了打开哦）

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-10">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_date_new.PNG" alt="修改文章日期效果">
    </div>
</figure>

可以看到日期已经改过来了（就是日期和月份弄错了^_^）。那么接下来就按照自己想要的样子大刀阔斧的进行改造吧。
（相关使用和注意事项，请参考[官网文档](https://jekyllrb.com/docs/)以及默认主题提供的范例。）

小提示：<mark>_layouts</mark>目录下有个<mark>default.html</mark>文件可以看看。

#### 正确的显示样式

修改页面结构（将模板文件覆盖到对应文件，并用 jekyll 的语法替换之前的语法调用。）

……

修改页面样式（将 css、js、img 等文件移动到相应的 _scss 和 assets 目录下，并修订内部路径。）

……

关于代码高亮，可以参考[《高亮代码介绍》](https://jekyllrb.com/docs/liquid/tags/)和[短名称列表](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers)。

……

最终成品如下：

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-23-how-to-use-jekyll-on-windows/post_new.PNG" alt="文章内容页最终效果">
    </div>
</figure>

注：卸载 jekyll 

{% highlight plaintext %}
gem uninstall jekyll
{% endhighlight %}

吐槽：百度有些文章的卸载命令是 `gem unistall jekyll` 和正确的 `gem uninstall jekyll` 相比，少了一个字母<mark>n</mark>。