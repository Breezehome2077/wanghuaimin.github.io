---
title: "问题：WordPress 后台登录界面显示空白"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.webp"
excerpt: "问题整理。"
date: 2023-07-05 7:30:00 +0800
modified-date: 2023-07-05 7:30:00 +0800
tag: wordpress
category: wordpress
---

1. 检查服务器是否还在运行，各项空间和负载是否正常。
2. 对网站进行备份。
3. 重新安装 WordPress。
   1. 下载最新版本 [WordPress](https://cn.wordpress.org/download/);
   2. 删除除“wp-content文件夹”和“wp-config.php”以外的所有文件，包括根目录下的隐藏文件“.htaccess”；
   3. 将最新版本的文件解压然后上传，以替换刚才被的文件。
4. 一般到这步登录界面就出来了。
   1. 如果还不行的话，就尝试在卸载插件和当前使用的主题；
   2. 卸载方式为重命名。
   3. 想要网站切换到默认主题需要存在默认主题，如果之前删了，别忘了重新上传一下。
   4. 到这就没问题了，要不还不行就再搜索一下吧。

<div class="post-mark">
注：
<ol>
   <li>本次后台登录界面在经过123步后仍没显示的原因是：所绑定的域名解析到了两个服务器上，删除不用的解析后登录界面就出来了。</li>
   <li>接着在后台更新提示遇到知名错误，打开错误提示后网站提示：chmod()未定义；登录阿里云主机控制台找到“高级环境设置->php-ini设置”后，启用“chmod()”函数即可。</li>
</ol>
</div>