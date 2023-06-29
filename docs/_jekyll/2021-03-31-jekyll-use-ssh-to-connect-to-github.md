---
title: "教程：Jekyll 通过 SSH 链接到 GitHub"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.png"
excerpt: "如题。"
date: 2021-03-31 5:40:00 +0800
modified-date: 2023-06-29 11:40:00 +0800
tag: jekyll,github,ssh
category: jekyll,github
---


## 第一步：创建 SSH密钥

1. 打开 Git Bash；
2. 运行命令生成密钥。
```ruby
ssh-keygen -t ed25519 -C "your_email@example.com"
```
3. 选择秘钥的保存位置，直接回车，则使用默认位置（C:\Users\username\\.ssh（此为文件夹））。
4. 按提示输入密码短语，而不是直接按回车键；如果直接回车的话，就会卡在密码登录环节，无法下一步。
5. 如果密钥已存在，运行以下命令更新一下密码短语就行，无需重新生成。
```ruby
# Git Bash 命令行窗口
ssh-keygen -p -f ~/.ssh/id_ed25519
```



## 第二步：将密钥添加 SSH 代理

1.启动 SSH 代理

1.1. 手动启动 SSH 代理
```ruby
# Git Bash 命令行窗口
eval "ssh-agent -s"
```

1.2. 自动启动 SSH 代理（不用每次推送都要输密码,仅在开始时输入一次即可。） 
```ruby
# 在您的用户文件夹（C:/User/username）中创建文件 “.profile”。
# 文件内容如下：
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
(umask 077; ssh-agent >| "$env")
. "$env" >| /dev/null ; }

agent_load_env

#agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
agent_start
ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
ssh-add
fi

unset env
```

```ruby
# 添加完文件后执行下面的命令，然后重启 Git Bash。
# 关闭 Git Bash 窗口，可以用快捷键 Ctrl+D。
ssh-agent ~/.profile
```

2.将密钥添加到SSH代理

```ruby
   ssh-add ~/.ssh/id_ed25519 
```

3.将密钥添加 GitHub。

打开密钥目录（C:\Users\username.ssh），将文件“id_ed25519.pub”中的内容添加到以下位置即可。

![密钥添加位置](/assets/images/thumbnail-post/jekyll/20200731/github-ssh-key-settings.jpg)

4.测试您的链接。

运行命令 <code>ssh -T git@github.com</code>，如果出现以下提示就说明设置成功了。 如果没有出现，请结合官方文档复查步骤有无遗漏或错误。

![设置成功的提示](/assets/images/thumbnail-post/jekyll/20200731/jekyll-set-up-ssh-successfully.png)

5.如果收到警告提示：

```ruby
The authenticity of host 'github.com (192.30.252.131)' can't be established. 
RSA key fingerprint is 16:27:ac:a5:76:28:1d:52:13:1a:21:2d:bz:1d:66:a8.
Are you sure you want to continue connecting (yes/no)?
```

那么您可以这样做：
```ruby
# 按 ctrl+c 退出选择，

#然后运行以下命令：
# 参考文档：https://stackoverflow.com/questions/18710120/the-authenticity-of-host-github-com-192-30-252-128-cant-be-established
# 参考文档2：https://security.stackexchange.com/questions/221610/does-ssh-keyscan-verify-the-legitimacy-of-the-hosts-it-scans/221614#221614
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

现在再运行（步骤4 中的）测试命令就可以了。




