$(document).ready(function(){
    // fixed抖动的原因：手机浏览器自带的回弹效果（过度滚动）
    let screen_w=window.innerWidth;
    if (screen_w <= 768) {
        let p=0,t=0;
        $(window).scroll(function(){
            p = $(this).scrollTop();
            if(t<=p){//向下滚
                $('.site-aside-wrap').addClass('wzm-fixed-down');
                if($('.site-aside-wrap').hasClass('wzm-fixed-up')){
                    $('.site-aside-wrap').removeClass('wzm-fixed-up');
                }
            }else{//向上滚
                $('.site-aside-wrap').addClass('wzm-fixed-up');
                if($('.site-aside-wrap').hasClass('wzm-fixed-down')){
                    $('.site-aside-wrap').removeClass('wzm-fixed-down');
                }
            }
            setTimeout(function(){t = p;},0);
        });
    }
});