---
title: "技巧：替换 WordPress 原有的 JQuery 版本"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.webp"
excerpt: "wordpress 5.6及其之后的版本，自带的jquery脚本已升级到最新，再也不需要手动进行替换了。"
date: 2020-08-23 5:40:00 +0800
modified-date: 2020-08-23 5:40:00 +0800
tag: wordpress
category: wordpress
---


## 原文

由于 WordPress 自带的 jquery 脚本还是老版本，那么想要升级为新版本的话可以这样做：编辑网站根目录下的 functions.php 文件，在其中添加以下代码。

```php
// 不推荐在函数中设置为“在底部显示”，原因是设置后 jquery.min.js 有时会显示在其他 js 文件的最底下。
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
```

或者还可以直接删除，然后重新引入。

```php
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
```