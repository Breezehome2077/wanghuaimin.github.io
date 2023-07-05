---
title: "教程：为主题或插件添加一个管理员选项设置页面"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.webp"
excerpt: "添加过程记录。"
date: 2021-05-27 5:40:00 +0800
modified-date: 2021-05-27 5:40:00 +0800
tag: wordpress
category: wordpress
---

参考文档：[《创建WordPress后台选项界面》](https://www.solagirl.net/creating-an-admin-interface.html)

```php
/**
 *  1. 注册选项
 *      1.1. 在数据表 wp-options 中注册相应的属性名，用于保存数据。
 *
 *  2. 注册选项设置页面
 *      2.1. 注册选项设置页面（这就是你需要的页面，你可以在后台找到它）
 *      2.2. 启用帮助选项卡（后台管理页面右上角的帮助按钮，点击可启用一个下拉菜单）
 *      2.3. 构建选项设置页面（在这里你可以看到如何设置能让你的表单将数据保存到数据库）
 */

//  1.1. 在数据表 wp-options 中注册相应的属性名，用于保存数据。
//       这里是创建一个属性，该属性用于为定时任务 abc 提供更新时间。
add_option('wzm_cron_abc_time','21:30:00');  

//  2.1. 注册选项设置页面（这就是你需要的页面，你可以在后台找到它）
add_action( 'admin_menu', 'wzm_cron_abc_menu' );
function wzm_cron_abc_menu() {
    //  2.1.1 函数 add_options_page() 的意思在菜单“设置”栏目之下新建页面，
    //        与之类似的函数还有：
    //            add_menu_page() 添加到后台主菜单，和菜单“设置”栏目并列。
    //            add_submenu_page() 添加到后台主菜单中的某个栏目之下，也包括菜单“设置”栏目。
    $wzm_cron_abc_options_page = add_options_page(
        '自定义定时器设置',                //  新建页面的标题
        '自定义定时器设置',                //  新建页面在菜单中的标题
        'manage_options',               //  哪些用户有权限可以查看新建页面
        'wzm-cron',                     //  新建页面的slug名，同时也是新建页面的url
        'wzm_cron_abc_options_html'     //  此函数用于输出新建页面的内容
    );
    //  2.1.2. 加载设置页面的同时加载帮助选项卡
    add_action( 'load-'.$wzm_cron_abc_options_page, 'wzm_cron_abc_help_html' );
}
//  2.2. 创建帮助选项卡（后台管理页面右上角的帮助按钮，点击可启用一个下拉菜单）
function wzm_cron_abc_help_html(){
    $wzm_help_content = '<p>你好，这里是帮助选项卡。</p>';
    get_current_screen()->add_help_tab( array(
        'id' => 'overview',                 //  帮助选项卡的ID
        'title' => __( 'Overview' ),        //  帮助选项卡的标题
        'content' => $wzm_help_content      //  帮助选项卡的内容
    ));
}
//  2.3. 构建选项设置页面（在这里你可以看到如何设置能让你的表单将数据保存到数据库）
//       关于具体样式，可以参考系统自带文件：wp-admin/options-general.php
//       如果想了解更多，可以搜索关键词“设置API（Settings API）”。
function wzm_cron_abc_options_html(){
    ?>
    <div class="wrap">
        <h1>自定义定时器设置</h1>
        <form method="post" action="options.php">
            <?php
                //  settings_fields($options_group) 配合 register_setting($options_group,$options_name) 
                //  可以完成数据的自动保存。注意：这里两者的组名 $options_group 虽然可以自定义，但两者要保持相同。
                settings_fields('wzm_cron_abc_group'); 
            ?>
            <table class="form-table" role="presentation">
                <tbody>
                <tr>
                    <th><label for="wzm_cron_abc_time">每日更新时间</label></th>
                    <?php
                    /**
                     *  input 中的 step 属性：用于指定<input>元素中合法编号之间的间隔。
                     *
                     *  示例：在“type=number”中如果“step=1”，则点击input输入框右侧的步进箭头（即上下箭头，又叫数字微调器），
                     *  每次增加或减少的值为1，如果手动填写则数字为整数。
                     *  如果“step=3”，则点击步进箭头时，每次增加或减少的值为3；如果手动填写则数字为整数的同时还要是3的倍数，如果不是则报错。
                     *  如果“step=0.1”，则点击步进箭头时，每次增加或减少的值为0.1；如果手动填写则数字为浮点数（xx.x）如果不是则报错。
                     *  
                     *  在这里，“type=time”中，“step=1”则表示点击步进箭头时，每次增加或减少1秒钟；如果设置为60，则是1分钟。
                     *
                     *  以上，如果输入的值不符合 step 的要求，则会在用户点击提交按钮时弹出对话框提醒用户：
                     *  请输入符合要求的值，并给出距离用户输入的值差距最小的两个值以辅助用户输入。
                     *
                     *  https://www.w3schools.com/tags/att_input_step.asp
                     *  https://www.cnblogs.com/bluealine/p/7992305.html
                     */
                    ?>
                    <td><input name="wzm_cron_abc_time" type="time" step="1" min="00:00:00" max="23:59:59" id="wzm_cron_abc_time" value="<?php form_option( 'wzm_cron_abc_time' ); ?>" class="text"></td>
                </tr>
                </tbody>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}
function wzm_cron_abc_register() {
    register_setting('wzm_cron_abc_group','wzm_cron_abc_time');
}
add_action('admin_init','wzm_cron_abc_register');
```

```php
// 1. 删除设置页面
//     直接移除上面的代码即可。
//  2. 删除选项
delete_option('wzm_posts_per_page');
```