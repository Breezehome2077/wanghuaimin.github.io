---
title: "代码块：设置链接在新窗口打开"
thumbnail: "/assets/images/thumbnail-post/jekyll/jekyll.webp"
excerpt: "如题。"
date:   2023-07-04 12:15:00 +0800
modified-date: 2023-07-04 12:15:00 +0800
tag: jekyll,link
category: jekyll
---

```text
# 添加到\<header>标签
\<base target = "_blank">
```

```jquery
# jquery
$(".post-body a[href]").attr({"target":"_black","rel":"noopener noreferrer"});
```

```jvascript
# 原生jvascript
# 文章内部超链接新页面打开
# https://jekyllcodex.org/without-plugin/new-window-fix/
# #SingleContent 是包裹文章的 Div。
for(let c = document.getElementById('SingleContent').getElementsByTagName("a"), a = 0; a < c.length; a++) {
            const b = c[a];
            if(b.getAttribute("href") && b.hostname !== location.hostname) {
                b.target = "_blank";
                b.rel = "noopener";
    }
}
external_new_window();

# 如果在其他页面也加载，js找不到Div会报错，可通过以下方式隐藏报错信息。
function external_new_window() {
    try {
        for(let c = document.getElementById('SingleContent').getElementsByTagName("a"), a = 0; a < c.length; a++) {
            const b = c[a];
            if(b.getAttribute("href") && b.hostname !== location.hostname) {
                b.target = "_blank";
                b.rel = "noopener";
            }
        }
    }
    catch(err) {}
}
external_new_window();
```

