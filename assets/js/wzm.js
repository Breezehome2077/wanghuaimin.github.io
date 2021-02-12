$(document).ready(function(){
    // 当DIV使用fixed定位时，在手机上滑动页面，该DIV会不停抖动，
    // 所以这里使用jq将DIV在抖动方向上进行隐藏。
    let screen_w=window.innerWidth;
    if (screen_w <= 768) {
        let p=0,t=0;
        $(window).scroll(function(){
            p = $(this).scrollTop();
            if(t<=p){//向下滚
                $('.site-aside-wrap').css({'position':'fixed','bottom':'-40px','display':'none'});
            }else{//向上滚
                $('.site-aside-wrap').css({'position':'fixed','bottom':'0px','display':'black'});
            }
            setTimeout(function(){t = p;},0);
        });
    }
});