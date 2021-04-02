---
title:  如何将 Jekyll 博客推送到 GitHub  
date:   2020-07-31 15:06 +0800
abstract: 之前讲的都是本地的一些设置，这次讲如何将本地网站放到网上。
---

## 2021.03.29 更新

如果之前已做好博客，需要在新电脑上工作，大概步骤如下：
1. 下载 Ruby 一键安装包；
2. 安装 GitBish；
3. 运行 GitBish，克隆仓库到本地；
4. 运行 Ruby，安装 jekyll
   1. 进入到仓库目录，运行命令 `bundle install` 安装捆绑包；
   2. 运行命令 `bundle update github-pages`，更新环境；
   3. 运行命令 `bundle exec jekyll s` 在当前文件夹创建站点；
   3. <a href="{{ site.baseurl | relative_url }}/docs/jekyll/jekyll-uses-ssh-to-connect-to-github/">《配置 SSH 密钥，避免每次都要输密码》</a>。
   
<p class="post-body-mark">
注：由于重装的时候没有截图，所以现在要截图的话还需要卸载然后一步步重装，显得有些麻烦；
而且内容还和本系列的两篇文章有所冲突，但又不能替代这两篇文章，所以决定目前不做截图了，留待下次重装系统时再做。
</p>


## 原文

## 第一步：注册 GitHub 账号

根据提示进行注册即可。

## 第二步：创建一个仓库

在“存储库”页面，点击右侧 “New” 按钮，新建一个仓库；
仓库名称为：<b>username.github.io</b> 的新存储库，其中 <b>username</b> 是您在 GitHub 上的用户名（或组织名称）。
其他默认，点击创建就可以了。

我的用户名是：qinyuanchunxue；所以我注册的存储库名称就是：qinyaunchunxue.github.io。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/new_public.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/new_public.png" alt="新建存储库">
            </a>
        </div>
    </div>
</figure>

接下来会跳转到新界面，（如图，）记录下当前链接地址（HTTPS）

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/public_info.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/public_info.png" alt="存储库界面">
            </a>
        </div>
    </div>
</figure>

## 第三步：开通 Github Pages

点击 <b>Settings</b> 选项；新界面打开后下拉网页，找到 <b>GitHub Pages</b> 部分，点击按钮 <b>Choose a theme</b>。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/choose_a_theme.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/choose_a_theme.png" alt="开通 github pages 界面">
            </a>
        </div>
    </div>
</figure>

在新界面点击 <b>Select theme</b> 按钮，进入下一步。因为之前已经做好了自己的主题，所以这里选择默认直接确定。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/select_theme.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/select_theme.png" alt="选择主题界面">
            </a>
        </div>
    </div>
</figure>

在新界面直接点击按钮 <b>Commit changes</b>，进入下一步。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/commit_changes.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/commit_changes.png" alt="存储库界面">
            </a>
        </div>
    </div>
</figure>

OK，又回到了之前的仓库界面，继续点击 <b>Settings</b> 选项，在新界面仍旧下拉找到 <b>GitHub Pages</b> 部分，会发现它已经变成了下面这个样子：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_new.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_new.png" alt="GitHub Pages 新样子">
            </a>
        </div>
    </div>
</figure>

看到上面的提示了吗？现在就可以通过在浏览器地址栏中输入 <b>username.github.io</b> 来访问你的仓库了。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/public_new.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/public_new.jpg" alt="GitHub Pages 开通了">
            </a>
        </div>
    </div>
</figure>

到此，我们就开通了 <b>Github Pages</b>。

## 第四步：绑定域名

如果不需要的话，请直接跳到第五步。

1.在第三步中的 <b>GitHub Pages</b> 部分的 <b>Custom domain</b> 一栏，填入你购买的域名。

域名这里推荐使用 <b>www.****.com</b>的形式，
原因是：[www子域不受GitHub服务器IP地址更改的影响，因此可以有效地防止DOS攻击，所以您的站点也将加载得更快](https://docs.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages#using-a-subdomain-for-your-github-pages-site)。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_new_domain.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_new_domain.png" alt="GitHub Pages 绑定域名">
            </a>
        </div>
    </div>
</figure>

<p class="post-body-mark">
注：途中的 <b>Enforce HTTPS</b> 选项，需要新仓库创建12个小时之后才能勾选；这里可以直接使用的原因是之前已经绑定过了，为了写这篇文章又删掉了。
</p>

2.在域名服务商那里做一下域名解析：添加一个 <b>CNAME</b> 记录，将子域名 <b>www</b> 解析到 <b>username.github.io</b>。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_new_domain_2.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_new_domain_2.png" alt="GitHub Pages 绑定域名2">
            </a>
        </div>
    </div>
</figure>

## 第五步：安装 Gitbash 

[点击下载](https://gitforwindows.org/)并进行默认安装。

完成后，点击“开始菜单”，在“最新添加”一栏可以看到多出了3个图标，分别是 “Git Bash”、“Git GUI” 和 “Git CMD”。

## 第六步：克隆仓库到本地

运行 “Git Bash”。（原因：教程上都是用这个。）

<p class="post-body-mark">
注：如果感觉字号偏小，可以<a href="https://jingyan.baidu.com/article/d7130635faa67613fdf47520.html">看这里</a>进行修改。
</p>

不过在克隆仓库之前，我们需要配置身份信息，告诉 GitHub 你是谁。

{% highlight ruby %}
git config --global user.name "Your Name"   #注意前边是“- -global”，有两个横线。
git config --global user.email "Your Email@example.com"

{% endhighlight %}

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_1.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_1.png" alt="Gitbash 配置身份信息">
            </a>
        </div>
    </div>
</figure>

然后在本地指定一个目录，将仓库克隆到本地。

{% highlight ruby %}
#选定存放位置：E盘Git文件夹，
#为防止代码显示冲突，“cd” 前面多加了一个 “/”。
/cd e:/git   

#克隆仓库到本地，username 别忘了替换成你的用户名。
git clone https://github.com/username/username.github.io
{% endhighlight %}

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_2.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_2.png" alt="Gitbash 克隆仓库到本地">
            </a>
        </div>
    </div>
</figure>

可以看到仓库已经克隆下来了，具体是不是呢，咱们可以打开文件管理器确认一下。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_2_2.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_2_2.png" alt="Gitbash 克隆仓库到本地2">
            </a>
        </div>
    </div>
</figure>

## 第七步：复制博客文件到本地仓库

1.&nbsp;将除 <b>CANME</b> 文件和隐藏文件夹 <b>.git</b> 以外的所有文件都删掉。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_3.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_3.png" alt="删除本地仓库部分文件">
            </a>
        </div>
    </div>
</figure>

2.&nbsp;将博客文件全都复制过来。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_4.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_4.png" alt="复制博客文件到本地仓库">
            </a>
        </div>
    </div>
</figure>

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_4_2.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_4_2.png" alt="复制博客文件到本地仓库2">
            </a>
        </div>
    </div>
</figure>

## 第八步：在仓库文件夹运行 Jekyll

1.&nbsp;转到仓库文件夹，打开文件 <b>Gemfile</b>，找到以下内容：

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_5.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_5.png" alt="修改 Gemfile 文件">
            </a>
        </div>
    </div>
</figure>

2.&nbsp;按照提示，删除 `gem "jekyll"` 语句，然后取消 `gem "github-pages",group: :jekyll_plugins` 的注释。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_5_2.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_5_2.png" alt="修改 Gemfile 文件2">
            </a>
        </div>
    </div>
</figure>

3.&nbsp;将 git 命令行窗口（Git Bish）缩小到最小化，然后打开 jekyll 命令行窗口（Start Command Prompt with Ruby）。

3.1.&nbsp;前进到本地仓库目录，然后执行命令 `bundle update`，更新环境（不更新就会报错）。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_6.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_6.png" alt="jekyll 进入仓库目录">
            </a>
        </div>
    </div>
</figure>

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_6_2.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_6_2.png" alt="jekyll 进行更新">
            </a>
        </div>
    </div>
</figure>

3.2.&nbsp;等待几分钟后，更新完成，即可执行命令 `bundle exec jekyll s` 运行 jekyll 了。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_7.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_7.png" alt="运行 jekyll">
            </a>
        </div>
    </div>
</figure>

至此， jekyll 博客就迁移到仓库目录了，修改添加文章都是在此进行了（原先的就可以删掉了。）

## 第九步：推送 Jekyll 到 GitHub

OK，经过重重险阻，我们终于抵达了最后，只要接下来我们将 jekyll 推送到 Github ，就算大功告成了。

推送到 github 只需要以下三条命令：

{% highlight plaintext %}

git add --all   # 添加文件

git commit -m "***"  # 提交 -m “这里要写点什么，什么都行”

git push -u origin master   # 推送到线上仓库，之后直接输入 git push 即可。

{% endhighlight %}

注：在执行以上命令过程时，会提示你输入账号密码，请按提示输入即可。

最后感谢众多文章的作者，尤其是以下文章的作者，可算是帮了大忙了。

* 感谢[《GitHub教程 Git Bash详细教程》](https://blog.csdn.net/qq_36667170/article/details/79085301) 讲解了 Git Bash 的大概用法。
* 感谢[《官方文档》](https://pages.github.com/) 讲述了推送的大概流程。
* 感谢[《Jekyll本地搭建开发环境以及Github部署流程》](https://blog.csdn.net/weixin_43513465/article/details/86764299) 让我知道了 github 和 jekyll 是如何关联起来的。

就这样，博客摇摇晃晃的上线了，相信之后会越来越好的。

<br />

附1：如果推送时提示 <b>fatal: HttpRequestException encountered 发送请求时出错</b>，
请安装[用于Windows的Git凭据管理器（Git-Credential-Manager-for-Windows）](https://github.com/microsoft/Git-Credential-Manager-for-Windows/releases/download/v1.14.0/GCMW-1.14.0.exe)；
安装完成后重新执行命令即可。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_8.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_8.png" alt="问题：fatal: HttpRequestException ……">
            </a>
        </div>
    </div>
</figure>

如果依旧提示错误，去刷新下网页看看更改的地方更改过来了吗？如果更改过来就无视它，如果没更改过来再想想其他办法。

我这边也是出现了多次，但之后推送的时候又好了，没有这个提示了；而且有提示的时候发现线上也依旧更改过来了，所以只好无视它了。

附2：如果推送失败，导致再次推送时出现以下错误：`hint: Updates were rejected because the remote contains work that you do`，
你可以执行命令 `git push origin master -f`（强制推送），该命令会直接用本地数据覆盖掉远程数据，因此存在损失数据的可能，所以请谨慎使用（备份后再使用）。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_8_2.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/git_8_2.png" alt="问题：fatal: HttpRequestException ……">
            </a>
        </div>
    </div>
</figure>

参考：[《问题1》](https://stackoverflow.com/questions/24357108/git-updates-were-rejected-because-the-remote-contains-work-that-you-do-not-have)、
[《问题2》](https://stackoverflow.com/questions/20939648/issue-pushing-new-code-in-github)、
[《问题3》](https://stackoverflow.com/questions/18328800/github-updates-were-rejected-because-the-remote-contains-work-that-you-do-not-h)