---
title: "问题：WordPress 插件开发中发现的问题"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.webp"
excerpt: "问题整理。"
date: 2021-05-29 5:40:00 +0800
modified-date: 2021-05-29 5:40:00 +0800
tag: wordpress
category: wordpress
---

## undefined function get_home_path()

问题表现：从插件库下载插件，点击“启用”后直接报错 “Call to undefined function get_home_path()”。

解决办法：用变量 ABSPATH（来自 wp-config.php） 代替 get_home_path()。

参考文档：[《Uncaught Error: Call to undefined function get_home_path() after update to 3.5.1》](https://wordpress.org/support/topic/uncaught-error-call-to-undefined-function-get_home_path-after-update-to-3-5-1/)