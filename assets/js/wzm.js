$(function (){
    console.log('人对了，世界就对了。这一句话个人认为有两种解释：第一种是“改变自己，认识世界”，第二种是“认识自己，改变世界”。愿人人都能通过第二种获得幸福生活。');
    let t = 0;//滚动条到顶部的初始高度
    $(window).scroll(function(){
        let p = $(this).scrollTop();//滚动条到顶部的垂直高度
        if(p>t){ //p>0，表示页面在向下滚动
            $('.site-aside-wrap').css({'position':'fixed','bottom':'-40px'});
            t = p;
        }else{
            $('.site-aside-wrap').css({'position':'fixed','bottom':'0px'});
        }
        setTimeout(function(){t = p;},20);
    });
})