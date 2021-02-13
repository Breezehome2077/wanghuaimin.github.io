$(document).ready(function(){
    // fixed 抖动的解决办法 - 禁用手机浏览器的滑动回弹效果
    document.addEventListener('touchmove',function(ev){
        ev.preventDefault();
    },{passive:false});
});