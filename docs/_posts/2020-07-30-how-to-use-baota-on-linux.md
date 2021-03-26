---
title: 如何在 Linux 系统上使用宝塔面板  
date: 2020-07-30 11:25 +0800
abstract: 萌新第一次使用宝塔面板的记录贴。
---

## 下载宝塔

这里（系统环境：centos8）使用以下命令，宝塔面板会自动安装，安装完成后会显示：登录地址、登录账号、登录密码。

{% highlight plaintext %}
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh 
{% endhighlight %}

## 使用宝塔

浏览器打开后台，然后输入账号密码即可完成登录。

### 如果不知道账号密码

如果安装的镜像包含宝塔面板，可以通过<b>SSH</b>工具链接服务器，执行以下命令：

{% highlight plaintext %}
/etc/init.d/bt start    # 启动宝塔
bt  #运行宝塔工具箱，之后选择“选项14”即可。
{% endhighlight %}

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-30-how-to-use-baota-on-linux/bt.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-30-how-to-use-baota-on-linux/bt.png" alt="宝塔面板工具箱选项展示">
            </a>
        </div>
    </div>
</figure>

### 如果地址无法访问

如果你的服务器有<b>“安全组”</b>选项，那大概率无法访问8888端口，需要手动放行才可以。

在“服务器管理控制台”找到“安全组-入站规则”，填写以下信息即可。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-30-how-to-use-baota-on-linux/bt_port.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-30-how-to-use-baota-on-linux/bt_port.png" alt="腾讯云服务器-安全组-入站规则设置（无法访问后台）">
            </a>
        </div>
    </div>
</figure>

登录后台后会提示修改端口，端口修改后，网页会打不开，在“入站规则”中更新端口后，网页就能重新打开了。

### 如果提示用户名或密码错误

SSH连接服务器后，输入命令 `bt` 启动工具箱，修改用户名和密码就可以重新登录了。
（好像还有其他办法，不过我这边是这样解决的。）

### 给站点分配的FTP不能正常使用。

#### 报错提示：服务器发回了不可路由的地址，使用服务器地址代替。

解决办法：放行端口39000-40000。

<figure class="post-body-img-figure">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-12">
            <a class="d-block" href="{{ site.baseurl | relative_url }}/assets/post/2020-07-30-how-to-use-baota-on-linux/bt_ftp.png">
                <img class="w-100" src="{{ site.baseurl | relative_url }}/assets/post/2020-07-30-how-to-use-baota-on-linux/bt_ftp.png" alt="腾讯云服务器-安全组-入站规则设置（无法使用FTP）">
            </a>
        </div>
    </div>
</figure>