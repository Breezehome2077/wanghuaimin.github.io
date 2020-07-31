---
layout: post
title:  "如何将 Jekyll 博客推送到 GitHub"  
date:   2020-07-31 15:06 +0800
categories: jekyll
tags:   jekyll github
---

如何将之前搭建的 jekyll 博客和 github 两者联系起来。

## 第一步：注册 GitHub 账号

略。

## 第二步：创建一个仓库

在“存储库”页面，点击右侧 “New” 按钮，新建一个仓库；
仓库名称为：<mark>username.github.io</mark>的新存储库，其中<mark>username</mark>是您在 GitHub 上的用户名（或组织名称）。
其他默认，点击创建就可以了。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-8">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/new_public.png" alt="新建存储库">
    </div>
</figure>

接下来会跳转到新界面，（如图，）记录下当前链接地址（HTTPS）

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/public_info.png" alt="存储库界面">
    </div>
</figure>

## 第三步：开通 Github Pages

然后点击<mark>Settings</mark>选项；新界面打开后下拉网页，找到<mark>GitHub Pages</mark>部分，点击按钮<mark>Choose a theme</mark>。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-10">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/choose_a_theme.png" alt="开通 github pages 界面">
    </div>
</figure>

在新界面点击<mark>Select theme</mark>按钮，进入下一步。（由于之前咱们已经做好了自己的主题，所以这里直接默认确定就行。）

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/select_theme.png" alt="选择主题界面">
    </div>
</figure>

在新界面直接点击按钮<mark>Commit changes</mark>，进入下一步。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/commit_changes.png" alt="存储库界面">
    </div>
</figure>

OK，又回到了之前的仓库界面，继续点击<mark>Settings</mark>选项，在新界面仍旧下拉找到<mark>GitHub Pages</mark>部分，会发现它已经变成了这个样子：

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-10">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_new.PNG" alt="GitHub Pages 新样子">
    </div>
</figure>

看到上面的提示了吗？现在就可以通过在浏览器地址栏中输入<mark>username.github.io</mark>来访问你的仓库了。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-12">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/public_new.PNG" alt="GitHub Pages 开通了">
    </div>
</figure>

到此，我们就开通了<mark>Github Pages</mark>。

## 第四步：绑定域名

如果不需要的话，请直接跳到第五步。

首先，在第四步中的<mark>GitHub Pages</mark>部分的<mark>Custom domain</mark>一栏，填入你购买的域名。

域名这里推荐使用<mark>www.****.com</mark>的形式,原因是[www子域不受GitHub服务器IP地址更改的影响，因此可以有效地防止DOS攻击，所以您的站点也将加载得更快](https://docs.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages#using-a-subdomain-for-your-github-pages-site)。

<figure class="post-content-img row justify-content-center">
    <div class="col-12 col-lg-10">
        <img class="w-100" src="/assets/post/2020-07-31-how-to-push-Jekyll's-blog-to-github/github_pages_news_domain.PNG" alt="GitHub Pages 绑定域名">
    </div>
</figure>

注：途中的<mark>Enforce HTTPS</mark>选项，需要新仓库创建12个小时之后才能勾选；这里可以直接使用的原因是之前已经绑定过了，为了写这篇文章又删掉了。

## 第五步：安装 Gitbash 

点击[下载](https://gitforwindows.org/)并默认安装。

安装完成后，点击“开始菜单”，在“最新添加”一栏可以看到多出了3个图标，分别是 “Git Bash”、“Git GUI” 和 “Git CMD”。

## 第六步：

运行 “Git Bash”。（大家都用这个，所以咱们也用吧。）另外，如果感觉字号偏小，可以看[这里](https://jingyan.baidu.com/article/d7130635faa67613fdf47520.html)修改。