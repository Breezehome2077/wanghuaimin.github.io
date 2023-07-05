---
title: "教程：将 Jekyll 博客推送到 GitHub"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.webp"
excerpt: "上传过程记录。"
date: 2020-07-31 5:40:00 +0800
modified-date: 2021-03-29 5:40:00 +0800
tag: jekyll,github
category: jekyll,github
---

## 2021.03.29 更新

如果之前已做好博客，需要在新电脑上工作，大概步骤如下：

1. 下载 Ruby 一键安装包；
2. 安装 GitBish；
3. 运行 GitBish，克隆仓库到本地；
4. 运行 Ruby，安装 jekyll
5. 进入到仓库目录，运行命令 bundle install 安装捆绑包；
6. 运行命令 bundle update github-pages，更新环境；
7. 运行命令 bundle exec jekyll s 在当前文件夹创建站点；
8. 配置 SSH 密钥，避免每次都要输密码。




## 第一步：注册 GitHub 账号

登录网址 [https://github.com/](https://github.com/)，按照提示进行操作。


## 第二步：创建一个仓库

在“存储库”页面，点击右侧“New”按钮，新建一个存储库，名称为：username.github.io ；
其中 username 是您在 GitHub 上的用户名（或组织名称）。其他默认，点击创建就可以了。

我的用户名是：qinyuanchunxue；所以我要新建的存储库名称就是：qinyaunchunxue.github.io。

![存储库创建界面](/assets/images/thumbnail-post/jekyll/20200731/new_public.png)

接下来会跳转到新界面，（如图，）记录下当前链接地址（HTTPS）。

![存储库信息](/assets/images/thumbnail-post/jekyll/20200731/public_info.png)



## 第三步：开通 Github Pages

点击 Settings 选项，新界面打开后下拉网页，找到 GitHub Pages 部分，点击按钮 Choose a theme。

![设置主题](/assets/images/thumbnail-post/jekyll/20200731/choose_a_theme.png)

在新界面点击 Select theme 按钮，进入下一步；因为之前已经做好了自己的主题，所以这里选择默认直接确定。

![确认主题](/assets/images/thumbnail-post/jekyll/20200731/select_theme.png)

在新界面直接点击按钮 Commit changes，进入下一步。

![提交修改](/assets/images/thumbnail-post/jekyll/20200731/commit_changes.png)

OK，又回到了之前的仓库界面，继续点击 Settings 选项，在新界面仍旧下拉找到 GitHub Pages 部分，会发现它已经变成了下面这个样子：

![github pages 开通成功](/assets/images/thumbnail-post/jekyll/20200731/github_pages_new.png)

看到上面的提示了吗？现在就可以通过在浏览器地址栏中输入 username.github.io 来访问你的仓库了。

![github pages 界面](/assets/images/thumbnail-post/jekyll/20200731/public_new.jpg)

到此，我们就开通了 Github Pages。



## 第四步：绑定域名

<div class="post-mark">
    <p>注：如果不需要的话，可以直接跳到第五步。</p>
</div>

1. 在第三步中的 GitHub Pages 部分的 Custom domain 一栏，填入你购买的域名。

域名这里推荐使用 www.**.com的形式， 原因是：www子域不受GitHub服务器IP地址更改的影响，因此可以有效地防止DOS攻击，所以您的站点也将加载得更快。

![绑定域名](/assets/images/thumbnail-post/jekyll/20200731/github_pages_new_domain.png)

<div class="post-mark">
    <p>注：图中的 Enforce HTTPS 选项，需要新存储库创建12个小时之后才能勾选；这里可以直接使用的原因是之前已经绑定过了，为了写这篇文章又删掉了。</p>
</div>

2. 在域名服务商那里做一下域名解析：添加一个 CNAME 记录，将子域名 www 解析到 username.github.io。

![解析域名](/assets/images/thumbnail-post/jekyll/20200731/github_pages_new_domain_2.png)



## 第五步：安装 Gitbash

点击网址（[https://gitforwindows.org/](https://gitforwindows.org/)）下载并进行默认安装。

完成后，点击“开始菜单”，在“最新添加”一栏可以看到多出了3个图标，分别是 “Git Bash”、“Git GUI” 和 “Git CMD”。



## 第六步：克隆仓库到本地

运行 “Git Bash”，理由是：教程上都是用这个；如果感觉字号偏小，可以看[这里](https://jingyan.baidu.com/article/d7130635faa67613fdf47520.html)进行修改。

不过在克隆仓库之前，我们需要配置身份信息，告诉 GitHub 你是谁。

```ruby
git config --global user.name "Your Name"   # 注意前边是“- -global”，有两个横线。
git config --global user.email "Your Email@example.com"
```

![git bash 登录界面](/assets/images/thumbnail-post/jekyll/20200731/git_1.png)

然后在本地指定一个目录，将仓库克隆到本地。

```ruby
# 选定存放位置：E盘Git文件夹，
# 为防止代码显示冲突，“cd” 前面多加了一个 “/”。
/cd e:/git   

# 克隆仓库到本地，username 别忘了替换成你的用户名。
git clone https://github.com/username/username.github.io
```

![git bash 克隆过程](/assets/images/thumbnail-post/jekyll/20200731/git_2.png)

可以看到仓库已经克隆下来了，具体是不是呢，咱们可以打开文件管理器确认一下。

![查看本地仓库](/assets/images/thumbnail-post/jekyll/20200731/git_2_2.png)



## 第七步：复制博客文件到本地仓库

1.将除 CANME 文件和隐藏文件夹 .git 以外的所有文件都删掉。

![删除文件后的本地仓库](/assets/images/thumbnail-post/jekyll/20200731/git_3.png)

2.将博客文件（jekyll目录下的网站文件）全都复制过来。

![移动博客文件](/assets/images/thumbnail-post/jekyll/20200731/git_4.png)

![文件移动完成后的本地仓库](/assets/images/thumbnail-post/jekyll/20200731/git_4_2.png)



## 第八步：在仓库文件夹运行 Jekyll

1.转到仓库文件夹，打开文件 Gemfile，找到以下内容：

![Gemfile 文件内容](/assets/images/thumbnail-post/jekyll/20200731/git_5.png)

2.按照提示，删除 gem "jekyll" 语句，然后取消 gem "github-pages",group: :jekyll_plugins 的注释。

![编辑 Gemfile 文件](/assets/images/thumbnail-post/jekyll/20200731/git_5_2.png)

3.将 git 命令行窗口（Git Bish）缩小到最小化，然后打开 jekyll 命令行窗口（Start Command Prompt with Ruby）。

3.1.前进到本地仓库目录，然后执行命令 bundle update，更新环境（不更新就会报错）。

![打开 jekyll 命令行窗口](/assets/images/thumbnail-post/jekyll/20200731/git_6.png)

![在本地仓库更新 Jekyll 环境](/assets/images/thumbnail-post/jekyll/20200731/git_6_2.png)

3.2. 等待几分钟后，更新完成，即可执行命令 bundle exec jekyll s 运行 jekyll 了。

![运行 jekyll](/assets/images/thumbnail-post/jekyll/20200731/git_7.png)

至此， jekyll 博客就迁移到仓库目录了，修改添加文章都是在此进行了（原先的就可以删掉了。）




## 第九步：推送 Jekyll 到 GitHub

OK，经过重重险阻，我们终于抵达了最后，只要接下来我们将 jekyll 推送到 Github ，就算大功告成了。

推送到 github 只需要以下三条命令：

```ruby
# 在执行命令过程时，会提示你输入账号密码，请按提示输入即可。
git add --all   # 添加文件
git commit -m "***"  # 提交 -m “这里要写点什么，什么都行”
git push -u origin master   # 推送到线上仓库，之后直接输入 git push 即可。
```

最后感谢众多文章的作者，尤其是以下文章的作者，可算是帮了大忙了。

1. 感谢[《GitHub教程 Git Bash详细教程》](https://blog.csdn.net/qq_36667170/article/details/79085301)讲解了 Git Bash 的大概用法。
2. 感谢[《官方文档》](https://pages.github.com/) 讲述了推送的大概流程。
3. 感谢[《Jekyll本地搭建开发环境以及Github部署流程》](https://blog.csdn.net/weixin_43513465/article/details/86764299) 让我知道了 github 和 jekyll 是如何关联起来的。

就这样，博客摇摇晃晃的上线了，相信之后会越来越好的。


## 附注

### 附1：fatal: HttpRequestException encountered 发送请求时出错

请安装用于Windows的Git凭据管理器（Git-Credential-Manager-for-Windows）；安装完成后重新执行命令即可。

![HttpRequestException encountered 报错界面](/assets/images/thumbnail-post/jekyll/20200731/git_8.png)

如果依旧提示错误，去刷新下网页看看更改的地方更改过来了吗？如果更改过来就无视它，如果没更改过来再想想其他办法。

我这边也是出现了多次，但之后推送的时候又好了，没有这个提示了；而且有提示的时候发现线上也依旧更改过来了，所以只好无视它了。



### 附2：hint: Updates were rejected because the remote contains work that you do

你可以执行命令 <code>git push origin master -f（强制推送）</code>，
该命令会直接用本地数据覆盖掉远程数据，因此存在损失数据的可能，所以请谨慎使用（推荐备份后再使用）。

![Updates were rejected because ... 报错界面](/assets/images/thumbnail-post/jekyll/20200731/git_8_2.png)

1. 参考文档1：[《Error "Updates were rejected because the remote contains work that you do not have locally"》](https://stackoverflow.com/questions/24357108/error-updates-were-rejected-because-the-remote-contains-work-that-you-do-not-ha)
2. 参考文档2：[《Issue pushing new code in Github》](https://stackoverflow.com/questions/20939648/issue-pushing-new-code-in-github)
3. 参考文档3：[《Github "Updates were rejected because the remote contains work that you do not have locally."》](https://stackoverflow.com/questions/18328800/github-updates-were-rejected-because-the-remote-contains-work-that-you-do-not-h)