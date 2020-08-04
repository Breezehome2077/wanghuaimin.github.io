---
layout: post
title:  "如何替换wordpress原有的js脚本"  
date:   2020-08-03 08:40 +0800
categories: wordpress
tags:   wordpress jquery
---

如题。

打开网站根目录下的<mark>functions.php</mark>文件，添加以下代码即可。

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

注：如果将在函数中将其设置为在 `footer` 显示，即：

{% highlight php %}
wp_register_script('jquery-core', get_template_directory_uri() . '/js/jquery-3.5.1.min.js',array(),'',true);
{% endhighlight %}

则 jquery.min.js 会显示在所有 js 文件的最底部。

另外还可以直接移除，然后重新引入；但重新引入时，注册的脚本名称要与之前的不相同。

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
