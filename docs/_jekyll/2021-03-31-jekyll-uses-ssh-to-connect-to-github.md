---
title: Jekyll 通过 SSH 链接到 GitHub
date: 2021-03-31 12:53 +0800
abstract: 使用 SSH 密钥连接到 GitHub 后就不用每次推送都要输入账号和密码了。
---

## 第一步：创建 SSH密钥
1. 打开 Git Bash；
2. 运行命令 `ssh-keygen -t ed25519 -C "your_email@example.com"` 生成密钥；
3. 选择秘钥的保存位置，直接回车，使用默认位置（C:\Users\username\.ssh）即可；
4. 按提示输入密码短语，而不是直接按回车键；如果直接回车的话，就会卡在密码登录环节，无法下一步。

### 如果密钥已存在
运行以下命令更新一下密码短语就行，无需重新生成。

{% highlight ruby %}
ssh-keygen -p -f ~/.ssh/id_ed25519
{% endhighlight %}

### 将密钥添加SSH代理

1.&nbsp;启动 SSH 代理

&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;手动启动 SSH 代理

{% highlight ruby %}
eval "ssh-agent -s"
{% endhighlight %}

&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;自动启动 SSH 代理（不用每次推送都要输密码）

{% highlight ruby %}
#在您的用户文件夹（C:/User/username）中创建文件 “.profile”。
#文件内容如下：
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
{% endhighlight %}

{% highlight ruby %}
#添加完文件后执行下面的命令，然后重启 Git Bash。
ssh-agent ~/.profile
{% endhighlight %}

<p class="post-body-mark">
注：关闭 Git Bash 窗口，可以用快捷键 <kbd>Ctrl+D</kbd>。
</p>

2.&nbsp;将密钥添加到SSH代理

{% highlight ruby %}
ssh-add ~/.ssh/id_ed25519
{% endhighlight %}

3.&nbsp;将密钥添加 GitHub

打开密钥目录（C:\Users\username\.ssh），将文件 “id_ed25519.pub” 中的内容添加到以下位置即可。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2021-03-31-jekyll-uses-ssh-to-connect-to-github /github-ssh-key-settings.jpg">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2021-03-31-jekyll-uses-ssh-to-connect-to-github /github-ssh-key-settings.jpg" alt="GitHub SSH密钥设置">
            </a>
        </div>
    </div>
</figure>

4.&nbsp;测试您的链接。

运行命令 `ssh -T git@github.com`，如果出现以下提示就说明设置成功了。
如果没有出现，请结合[官方文档](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)复查步骤有无遗漏或错误。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2021-03-31-jekyll-uses-ssh-to-connect-to-github /jekyll-set-up-ssh-successfully.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2021-03-31-jekyll-uses-ssh-to-connect-to-github /jekyll-set-up-ssh-successfully.png" alt="jekyll 设置SSH密钥成功">
            </a>
        </div>
    </div>
</figure>