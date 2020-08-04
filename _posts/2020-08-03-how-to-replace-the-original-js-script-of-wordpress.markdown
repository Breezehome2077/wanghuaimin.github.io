---
layout: post
title:  "如何替换wordpress原有的js脚本"  
date:   2020-08-03 08:40 +0800
categories: wordpress
tags:   wordpress jquery
---

如题。

编辑网站根目录下的<mark>functions.php</mark>文件，在其中添加以下代码即可。

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

注：不推荐在函数中设置为“在底部显示”，原因是设置后 jquery.min.js 会显示在所有 js 文件的最底部。

或者还可以直接删除，然后重新加载 js 脚本。

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

注：重新引入时，注册的脚本名称要与默认的不相同。
