---
title: "教程：将 WordPress 插件上传到官方 SVN 存储库"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.webp"
excerpt: "上传过程记录。"
date: 2021-05-29 5:40:00 +0800
modified-date: 2021-05-29 5:40:00 +0800
tag: wordpress
category: wordpress
---

## 前提条件

拥有一台位于国外的电脑控制权（因为在国内上传或者使用工具，会提示你“429 Too Many Requests”）； 这里推荐系统使用 Linux，因为我没有 Windows，所以只测试了 Linux。


## 用到的软件

1. Xshell 用于连接 Linux 服务器；
2. Xftp 用于将文件上传到 Linux 服务器。
3. 如果资金充足不妨支持一下；另外官方还为家庭和学校提供了免费版， 您可以点击这里进行申请。


## 上传步骤

1. 通过 Xshell 登陆服务器；
2. 安装 svn；
```text
yum install svn 
```
3. 选择一个合适的地方创建工作副本；
```text
mkdir my-local-dir
```
4. 检查预构建的存储库；
```text
svn co https://plugins.svn.wordpress.org/your-plugin-name my-local-dir
```
5. 通过 Xftp 登录服务器，并将插件文件 your-plugin-name.php 和 readme.txt 上传到 trunk文件夹中；
```text
# 如果你用的ssh工具是 Xshell，那么直接点击工具栏的 Xftp 图标（一个绿色的文件夹图标），可以实现免输入直接登录服务器。
```
6. 将目标文件添加进 SVN 的更新记录；
```text
svn add trunk/*
```
7. 提交记录在案的文件到 SVN 存储库；
```text
svn ci -m 'Adding first version of my plugin'
```
8. 输入自己的用户名和密码；
```text
# 如果没专门设置的话，会提示让你输入用户(root)的密码；不用担心，直接回车，它会让你重新输入用户名和密码；
这时再输入你的 wordpress.org 的“用户ID”和“用户密码”即可。
```
9. 也可以整合7、8，直接输入命令。
```text
svn ci -m 'Adding first version of my plugin' --username your_username --password your_password
```
10. 稍后你会收到一封来自 noreply@wordpress.org 的邮件（里面是你本次的操作记录和上传的文件内容）， 表明你成功完成了插件的上传工作。



## 插件的更新

### 编辑现有文件

1. 通过 Xshell 登录服务器，进入之前创建的“my-local-dir”文件中；
```text
cd my-local-dir
```
2. 执行以下命令，保证工作副本为最新；
```text
svn up // 在这里，我们都是最新的；如果中央存储库发生更改，它们将被下载并合并到您的本地副本中。
```
3. 通过 Xftp 下载上传文件；
```text
# 1.通过 Xftp 下载要修改的文件，完成修改后，再上传到服务器覆盖原文件。
# 2.推荐每次修改都做好备份，尤其是大改的时候。
```
4. 运行以下命令，检查目标文件是否发生了更改；
```text
svn stat // 检查不同，“M”表示文件已发生修改。
svn diff // 检查有哪些不同，可以看到具体的代码
```
5. 执行以下命令，将这些修改更新到线上存储库；
```text
svn ci -m "注明做了什么（推荐英文）"
```
6. 输入账号密码，等待完成提交。
```text
# 如果不能保证服务器安全的话，推荐不保存密码。
```


## 更新版本

每次正式发布插件时，您都应该标记该版本代码的副本。
这可以让您的用户轻松地获取最新的（或较旧的）版本，它允许您更轻松地跟踪更改，并让 WordPress.org 插件目录知道您的插件应该告诉人们下载哪个版本。

```text
# 版本号命名规则参考：语义化版本 2.0.0。
# https://semver.org/lang/zh-CN/
svn cp trunk tags/2.0   // 2.0 为版本号
svn ci -m "tagging version 2.0" // 标记新版本 2.0
```


## 参考文档

1. [《Using Subversion》](https://developer.wordpress.org/plugins/wordpress-org/how-to-use-subversion/)
2. [《svn使用教程》](https://svnbucket.com/posts/)
3. [《SVN客户端的下载和安装使用方法》](https://zhuanlan.zhihu.com/p/34096447)
4. [TortoiseSVN：针对 Windows 平台的 Subversion 客户端](https://tortoisesvn.net/docs/release/TortoiseSVN_zh_CN/)
5. [《Submitting A New WordPress Plugin And Uploading It On SVN》](https://codeytek.com/submitting-a-new-wordpress-plugin-and-uploading-it-on-svn/)