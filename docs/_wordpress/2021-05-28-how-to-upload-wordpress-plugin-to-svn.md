---
title:          教程：将 WordPress 插件上传到官方 SVN 存储库
date:           2021-05-29 15:43 +0800
description:    按照官方教程一步一来即可。
order:          100
---
<p class="post-body-mark">
前言：不要用 SVN 进行开发，它与 GitHub 不同，不是一个开发系统，而是一个开发系统。
每次推送代码到 SVN 时，它会为所有版本重建编码文件，这就是为什么有时您的插件更新在长达 6 小时内不会显示的原因，
频繁的推送会造成系统资源的浪费，所以准备好了后再去推送吧。
</p>

## 前提条件
拥有一台位于国外的电脑控制权（因为在国内上传或者使用工具，会提示你“429 Too Many Requests”）；
这里推荐系统使用 Linux，因为我没有 Windows，所以只测试了 Linux。


## 用到的软件
1. [Xshell](https://www.netsarang.com/en/xshell/) 用于连接 Linux 服务器；
2. [Xftp](https://www.netsarang.com/en/xftp/) 用于将文件上传到 Linux 服务器。

如果资金充足不妨支持一下；另外官方还为家庭和学校提供了免费版，
您可以点击[这里](https://www.netsarang.com/en/free-for-home-school/)进行申请。


## 上传步骤

&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;通过 Xshell 登陆服务器；

&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;安装 svn；
{% highlight plaintext %}
yum install svn
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;选择一个合适的地方创建工作副本；
{% highlight plaintext %}
mkdir my-local-dir
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;4.&nbsp;检查预构建的存储库；
{% highlight plaintext %}
svn co https://plugins.svn.wordpress.org/your-plugin-name my-local-dir
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;通过 Xftp 登录服务器，并将插件文件 your-plugin-name.php 和 readme.txt 上传到 trunk文件夹中；
<p class="post-body-mark">如果你用的ssh工具是 Xshell，那么直接点击工具栏的 Xftp 图标（一个绿色的文件夹图标），可以实现免输入直接登录服务器。</p>

&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;将目标文件添加进 SVN 的更新记录；
{% highlight plaintext %}
svn add trunk/*
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;7.&nbsp;提交记录在案的文件到 SVN 存储库；
{% highlight plaintext %}
svn ci -m 'Adding first version of my plugin'
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;8.&nbsp;输入自己的用户名和密码；
{% highlight plaintext %}
如果没专门设置的话，会提示让你输入用户(root)的密码；不用担心，直接回车，它会让你重新输入用户名和密码；
这时再输入你的 wordpress.org 的“用户ID”和“用户密码”即可。
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;9.&nbsp;也可以整合7、8，直接输入命令。
{% highlight plaintext %}
svn ci -m 'Adding first version of my plugin' --username your_username --password your_password
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;10.&nbsp;稍后你会收到一封来自 noreply@wordpress.org 的邮件（里面是你本次的操作记录和上传的文件内容），
表明你成功完成了插件的上传工作。

## 插件的更新
### 编辑现有文件
&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;通过 Xshell 登录服务器，进入之前创建的 <b>“my-local-dir”</b> 文件中；
{% highlight plaintext %}
cd my-local-dir
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;执行以下命令，保证工作副本为最新；
{% highlight plaintext %}
svn up // 在这里，我们都是最新的；如果中央存储库发生更改，它们将被下载并合并到您的本地副本中。
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;通过 Xftp 下载上传文件；
{% highlight plaintext %}
1. 通过 Xftp 下载要修改的文件，完成修改后，再上传到服务器覆盖原文件。
2. 推荐每次修改都做好备份，尤其是大改的时候。
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;4.&nbsp;运行以下命令，检查目标文件是否发生了更改；
{% highlight plaintext %}
svn stat // 检查不同，“M”表示文件已发生修改。
svn diff // 检查有哪些不同，可以看到具体的代码
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;执行以下命令，将这些修改更新到线上存储库；
{% highlight plaintext %}
svn ci -m "注明做了什么（推荐英文）"
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;输入账号密码，等待完成提交。
{% highlight plaintext %}
如果不能保证服务器安全的话，推荐不保存密码。
{% endhighlight %}

### 更新版本
每次正式发布插件时，您都应该标记该版本代码的副本。这可以让您的用户轻松地获取最新的（或较旧的）版本，
它允许您更轻松地跟踪更改，并让 WordPress.org 插件目录知道您的插件应该告诉人们下载哪个版本。
{% highlight plaintext %}
svn cp trunk tags/2.0   // 2.0 为版本号
svn ci -m "tagging version 2.0" // 标记新版本 2.0
{% endhighlight %}

注：版本号命名规则参考：[语义化版本 2.0.0](https://semver.org/lang/zh-CN/)。




   
## 参考文档

1. [WordPress官方说明](https://developer.wordpress.org/plugins/wordpress-org/how-to-use-subversion/)
2. [SVN TortoiseSVN 使用教程](https://svnbucket.com/posts/)
3. [SVN 客户端 TortoiseSVN 的下载和安装使用方法](https://zhuanlan.zhihu.com/p/34096447)
4. [SVN 客户端 TortoiseSVN 的使用方法](https://tortoisesvn.net/docs/release/TortoiseSVN_zh_CN/)
5. [Submitting A New WordPress Plugin And Uploading It On SVN](https://codeytek.com/submitting-a-new-wordpress-plugin-and-uploading-it-on-svn/)


