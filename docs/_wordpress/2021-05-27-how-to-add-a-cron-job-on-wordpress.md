---
title:          教程：在 WordPress 上创建一个定时任务
date:           2021-05-27 13:40 +0800
description:    你写了一些函数，但又不想手动触发的时候，就可以利用 WP-Cron 功能创建一个定时任务，让 WordPress 自动触发函数。
order:          102
---

<p class="post-body-mark">
    注：如果你在步骤 2.1 中实现了“绑定钩子 add_action('updated_option')”，请一定发邮件告诉我你是怎么做的，可以吗？
</p>

{% highlight php %}
/**
 *  定时器
 *
 *  1. 创建定时器
 *      1.1. 创建所需要的挂钩；
 *      1.2. 设置到时间后要运行的操作。
 *  
 *  2. 更新定时器
 *      2.1. 所谓更新就是删除旧的，添加新的。
 *    
 *  3. 删除定时器
 *      3.1. 参考步骤 2
 */


//  这里用函数包起来的原因是 步骤2 更新定时器需要用到它。
function wzm_cron_abc_event() {
    //  1.1. 创建所需要的挂钩；第一个参数是您正在创建的挂钩的名称，第二个参数是要调用的函数的名称。
    add_action( 'wzm_cron_abc_hook', 'wzm_cron_abc_exec' );
    //  用 wp_next_scheduled() 函数判断定时器是否存在重复，如果重复则不添加。
    if ( ! wp_next_scheduled( 'wzm_cron_abc_hook' ) ) {
        /**
         *  注意：这里需要使用时间戳，但这个时间戳是存在问题的，具体表现为：
         *      定时器的时间 = 设定的时间 + 时区的时间；
         *      因此在计算时间时，要先减去一个相当于时区时间的时间，这样定时器时间才是我们想要设定的时间。
         * 注：定时器的时间可以通过插件 WP Crontrol 来查看，定时器的任务名即我们创建的钩子名：wzm_cron_abc_hook.
         */        
        //  获取时区时间
        $local_time = current_datetime();
        $timezone_offset = $local_time -> getOffset();
        //  获取我们设定的时间
        $timestamp = get_option('wzm_cron_abc_time');
        $timestamp = strtotime($timestamp);
        //  提前减去一个相当于时区时间的时间
        $timestamp = $timestamp - $timezone_offset;
        //  创建一个重复事件，各参数说明：
        //      $timestamp 是时间戳，表示什么时候进行。
        //                 如果用 time() 代替的话，则定时器时间为当前时间，这个是正确的。
        //      daily 是频率（每日一次），类似值还有 hourly（每小时一次）、twicedaily（每日两次）。
        wp_schedule_event( $timestamp, 'daily', 'wzm_cron_abc_hook' );
    }
}
wzm_cron_abc_event();
//  1.2. 设置到时间后要运行的操作。
function wzm_cron_abc_exec() {
    //  echo '<script>console.log('abc')</script>';
}

//  2. 更新定时器
//  2.1. 检测是否存在提交表单的行为，如果存在则继续。
//       注：这里按逻辑应该使用钩子 add_action('updated_option')（选项更新后触发）来处理，
//       参考问题：wordpress.stackexchange.com/questions/177272/hook-if-somebody-saves-plugin-options
//       但这边用不出来，所以就将“更新”这个操作绑定到了 isset($_POST) 上了。 
if(isset($_POST)) {
    //  检测有无同名定时器，如果有则删除该定时器。
    if ( wp_next_scheduled( 'wzm_cron_abc_hook' ) ) {
        wp_clear_scheduled_hook( 'wzm_cron_abc_hook' );
    }
    //  创建新的定时器。
    wzm_cron_abc_event();
}
{% endhighlight %}