$(document).ready(function(){
    // fixed 抖动的解决办法
    let screen_w=window.innerWidth;
    if (screen_w <= 768) {
        let p=0,t=0;
        $(window).scroll(function(){
            p = $(this).scrollTop();
            if(t<=p){//向下滚
                $('.site-aside-wrap').addClass('wzm-fixed-top');
                if($('.site-aside-wrap').hasClass('wzm-fixed-bottom')){
                    $('.site-aside-wrap').removeClass('wzm-fixed-bottom');
                }
            }else{//向上滚
                $('.site-aside-wrap').addClass('wzm-fixed-bottom');
                if($('.site-aside-wrap').hasClass('wzm-fixed-top')){
                    $('.site-aside-wrap').removeClass('wzm-fixed-top');
                }
            }
            setTimeout(function(){t = p;},0);
        });
    }
});