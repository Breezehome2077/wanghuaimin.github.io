$(document).ready(function(){
    // fixed抖动的原因：手机浏览器自带回弹效果（过度滚动）
    // 向下滚动时，隐藏该DIV
    // 附相关介绍一篇：https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/
    let screen_w=window.innerWidth;
    if (screen_w <= 768) {
        let p=0,t=0;
        $(window).scroll(function(){
            p = $(this).scrollTop();
            if(t<=p){//向下滚
                $('.site-aside-wrap').css({'visibility':'hidden','opacity':'0'});
            }else{//向上滚
                $('.site-aside-wrap').css({'visibility':'visible','opacity':'1'});
            }
            setTimeout(function(){t = p;},0);
        });
    }
});