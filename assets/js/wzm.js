$(function (){
    console.log('人对了，世界就对了。这一句话个人认为有两种解释：第一种是“改变自己，认识世界”，第二种是“认识自己，改变世界”。愿人人都能通过第二种获得幸福生活。');
    let p=0,t=0;
    $(window).scroll(
        function(){
            p = $(this).scrollTop();
            if (t<=p) {
                // 向下滚动
                $('.site-aside-wrap').css({'bottom':'-40px'});
            }
            else {
                // 向上滚动
                $('.site-aside-wrap').css({'bottom':'0'});
            }
        }
    );
})