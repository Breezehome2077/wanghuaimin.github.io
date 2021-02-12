$(document).ready(function(){
    // fixed 抖动的解决办法
    let screen_w=window.innerWidth;
    if (screen_w <= 768) {
        let p=0,t=0;
        $(window).scroll(function(){
            p = $(this).scrollTop();
            if(t<=p){//向下滚
                $('.site-aside').css({'transform':'translateY(-40px)','display':'none'});
            }else{//向上滚
                $('.site-aside').css({'transform':'translateY(0px)','display':'block'});
            }
            setTimeout(function(){t = p;},0);
        });
    }
});