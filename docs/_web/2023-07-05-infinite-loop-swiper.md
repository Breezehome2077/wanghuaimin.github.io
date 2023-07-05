---
title: "代码块：无限循环滚动幻灯片"
thumbnail: "/assets/images/thumbnail-post/web/infinite-loop-swiper.webp"
excerpt: "如题。"
date: 2023-07-05 8:52:00 +0800
modified-date: 2023-07-05 8:52:00 +0800
tag: web,slider,infinite
category: web
---

## 效果描述

参见博客首页的合作版块，图标不停的向左流动。

## 代码块

```html
<!--官方文档：https://splidejs.com/-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" integrity="sha256-5uKiXEwbaQh9cgd2/5Vp6WmMnsUr3VZZw0a8rKnOKNU=" crossorigin="anonymous">
<!--<link href="/assets/css/splide-core.min.css" rel="stylesheet">-->
<link href="/assets/css/style.css" rel="stylesheet">


<section class="site-partners site-section">
    <header class="header">
        <h2 class="title">合作伙伴</h2>
    </header>
    <div class="body">
        <div class="splide" id="sitePartners" aria-label="site partners">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide"><img src="/assets/images/partners-1.webp" role="img" aria-label="Partners name 1" alt="" title="partner name 1"></li>
                    <li class="splide__slide"><img src="/assets/images/partners-1.webp" role="img" aria-label="Partners name 1" alt="" title="partner name 2"></li>
                    <li class="splide__slide"><img src="/assets/images/partners-1.webp" role="img" aria-label="Partners name 1" alt="" title="partner name 3"></li>
                    <li class="splide__slide"><img src="/assets/images/partners-1.webp" role="img" aria-label="Partners name 1" alt="" title="partner name 4"></li>
                    <li class="splide__slide"><img src="/assets/images/partners-1.webp" role="img" aria-label="Partners name 1" alt="" title="partner name 5"></li>
                    <li class="splide__slide"><img src="/assets/images/partners-1.webp" role="img" aria-label="Partners name 1" alt="" title="partner name 6"></li>
                    <li class="splide__slide"><img src="/assets/images/partners-1.webp" role="img" aria-label="Partners name 1" alt="" title="partner name 7"></li>
                </ul>
            </div>
        </div>
    </div>
</section>


<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js" integrity="sha256-FZsW7H2V5X9TGinSjjwYJ419Xka27I8XPDmWryGlWtw=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js" integrity="sha256-A+2opyqhvbBV8tbd9mIM8w9zvvMYHOawY03BQRtq7Kw=" crossorigin="anonymous"></script>
<!--<script src="/assets/js/splide.min.js"></script>-->
<!--<script src="/assets/js/splide-extension-auto-scroll.min.js"></script>-->
<script>
    document.addEventListener( 'DOMContentLoaded', function() {
        const splideRecommendations = new Splide( '#siteRecommendations', {
            type    : 'loop',
            speed   : '2000',
            perPage : '3',
            perMove : '3',
            gap     : '2rem',
            drag    : 'free',
            arrows  : true,
            pagination: false,
        });
        splideRecommendations.mount();

        const splidePartners = new Splide( '#sitePartners', {
            type   : 'loop',
            perPage: '4',
            drag   : 'free',
            autoScroll: {
                speed: 1,
            },
            arrows  : false,
            pagination: false,
        } );
        splidePartners.mount(window.splide.Extensions);
    } );
</script>
```

```css
.site-partners img {
    width: 100%;
    filter: brightness(.25);
}
```



附：[swiper.js实现该效果的代码](https://swiper-flow-ninja.webflow.io/infinite-loop-swiper)，就存在一个问题：鼠标点击图标后就自动停止了。

花了整整两天才试了好几个插件，才实现这个效果。本来打算不折腾了，但实在放不下，索性最后找到合适的了，效果完美。
