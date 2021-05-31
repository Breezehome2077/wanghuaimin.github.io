---
title:          技巧：替换 WordPress 原有的 JQuery 版本
date:           2020-08-03 08:40 +0800
description:    自 wordpress 5.6 发布后，jquery脚本已升级到最新，无需再进行手动替换。
order:          2101
---

## 2021.03.24

wordpress 5.6及其之后的版本，自带的jquery脚本已升级到最新，再也不需要手动进行替换了。

该过程的三个步骤如下：
1. WordPress 5.5：删除jQuery Migrate 1.x脚本。
2. WordPress 5.6：更新到最新的jQuery，jQuery UI和jQuery Migrate脚本。
3. WordPress 5.7：删除jQuery Migrate脚本。

如果发现插件不能正确使用，可安装插件 <a href="https://jquery.com/download/#jquery-migrate-plugin" target="_black">JQuery Migrate</a> 解决。

## 原文
由于WordPress自带的jquery脚本还是老版本，那么想要升级为新版本的话可以这样做：编辑网站根目录下的<b>functions.php</b>文件，在其中添加以下代码。

{% highlight php %}

function replace_core_jquery_version() {
    if( !is_admin()) {
        wp_deregister_script('jquery-core');
        wp_register_script('jquery-core',get_template_directory_uri().'/js/jquery-3.5.1.min.js');
        wp_enqueue_script('jquery-core');
        wp_deregister_script('jquery-migrate');
        wp_register_script('jquery-migrate',get_template_directory_uri().'/js/jquery-migrate-3.3.1.min.js');
        wp_enqueue_script('jquery-migrate');
    }
}
add_action( 'wp_enqueue_scripts', 'replace_core_jquery_version' );

{% endhighlight %}

<p class="post-body-mark">
注：不推荐在函数中设置为“在底部显示”，原因是设置后 jquery.min.js 有时会显示在其他 js 文件的最底下。
</p>

或者还可以直接删除，然后重新引入。

{% highlight php %}
function replace_core_jquery_version() {
    if( !is_admin()) {
        wp_deregister_script('jquery-core');
        wp_deregister_script('jquery-migrate');
    }
}
add_action( 'wp_enqueue_scripts', 'replace_core_jquery_version' );

function wzm_register_scripts() {
    wp_enqueue_script( 'jquery-core-new', get_template_directory_uri().'/js/jquery-3.5.1.min.js', '', '', true );
    wp_enqueue_script( 'jquery-migrate-new', get_template_directory_uri().'/js/jquery-migrate-3.3.1.min.js', '', '', true );
}
add_action( 'wp_enqueue_scripts', 'wzm_register_scripts' );

{% endhighlight %}

<p class="post-body-mark">
注：重新引入时，脚本的注册名称要与默认的不相同。
</p>