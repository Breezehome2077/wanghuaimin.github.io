$(function (){
    console.log(
        '20210211新的认识：一屋不扫，何以扫天下',
        '人对了，世界就对了。这一句话个人认为有两种解释：第一种是“改变自己，认识世界”，第二种是“认识自己，改变世界”。愿人人都能通过第二种获得幸福生活。'
    );
    let screen_w=window.innerWidth;
    if (screen_w < 768) {
        let t=0,p=0;
        $(window).scroll(function(){
            p = $(this).scrollTop();//滚动条到顶部的垂直高度
            if(p>=t){ //p>0，表示页面在向下滚动
                $('.site-aside-wrap').css({'position':'fixed','bottom':'-40px','display':'none'});
                t = p;
            }else{
                $('.site-aside-wrap').css({'position':'fixed','bottom':'0px','display':'black'});
            }
        })
    }
})