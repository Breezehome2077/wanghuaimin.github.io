(function($){
    // 作用域：类别页
    $(document).ready(function(){

        // 根据类别从json中读取同类别的文章
        // 参考网址：https://blog.fooleap.org/jekyll-tags-page.html
        // 参考网址2：https://www.cnblogs.com/shengmo/p/8612475.html
        // 参考网址3：https://www.cnblogs.com/tylerdonet/p/3520862.html
        // 参考网址4：https://www.cnblogs.com/lpp-11-15/p/13043410.html
        // 打开页面时，请求数据,并处理数据。

        // 第一步A：从地址栏获取变量，如果变量不为空，则添加active，修改页面title，同时触发函数B。
        let page_categories_hash = window.location.hash;
        if ( page_categories_hash ) {
            let page_categories_hash_new = page_categories_hash.substring(1);
            document.title = "类别："+page_categories_hash_new+" | 望朝门";
            //传递过来后对应标签变色，表示选中。
            // 参考网址：https://www.tutorialrepublic.com/faq/how-to-find-an-element-based-on-a-data-attribute-value-in-jquery.php
            $('.page-tags-group li[data-category-name=' + page_categories_hash_new + ']').addClass("active");
            page_categories_list(page_categories_hash_new);
        }
        // 第一步B：接受从“类别链接”传递来变量，除了修改地址栏、页面title以外，还触发函数B。
        $(".page-tags-group-item").on('click',function(){
            // 效果：点击添加类，点击另一个移除类 ( 关键词：jq 移除 兄弟节点 class(类) )
            $(this).addClass("active").siblings('li').removeClass("active");

            // 正文：传递变量、修改地址栏、修改页面title、触发函数B
            let category_name = $(this).data("category-name");
            document.title = "类别："+category_name+" | 望朝门";
            document.window.location.hash = category_name;
            page_categories_list(category_name);
        });
        // 第二步：运行函数B。
        // 函数B，接受来自地址栏的变量和从“类别链接”传递来的变量；
        function page_categories_list(category_name_value) {
            if (category_name_value) {
                // 读取json传来的数据;
                $.ajax({
                    url:"/tool/posts.json",
                    dataType: "text",
                    success: function(data){
                        // 将字符串转化为json对象。
                        let categories_obj = eval('('+data+')');
                        // 将英文字母（之前为了好看，设置了首字母大写）转换为小写；
                        // 进行urldecode解码，解决类别中含有中文的问题。
                        let category_name_value_new = decodeURI(category_name_value.toLowerCase());

                        // 判断哪些对象的值含有传递来的变量;
                        // 遍历全部
                        let categories_true_group = new Array();
                        for( let i=0, l=categories_obj.length; i<l; i++ ){
                            // 判断“遍历的对象”中的“categories”数组是否含有指定值。
                            // inArray()判断，要注意大小写。
                            let categories_obj_group = categories_obj[i]["post_categories"];
                            let categories_true = $.inArray( category_name_value_new, categories_obj_group );
                            // 如果大于等于0，则说明该对象的categories数组包含指定值。
                            if ( categories_true >= 0 ) {
                                // 将符合要求的对象保存起来（比如说：另一个数组）；
                                categories_true_group.push(categories_obj[i]);
                            }
                        }
                        // 读取新数组，遍历拼装成HTML，然后插入到页面中。
                        // 遇到的问题：categories_true_group[i]["date"]输出undefined，将属性'date'更改为'publication_date'后问题解决。
                        // console.log(categories_true_group);
                        let page_categories_html = '';
                        for( let i=0, l=categories_true_group.length; i<l; i++ ){
                            page_categories_html += '<tr><th>'+categories_true_group[i]["publication_date"]+'</th>';
                            page_categories_html += '<td><a href="'+categories_true_group[i]["post_url"]+'">'+categories_true_group[i]["post_title"]+'</a></td></tr>';
                        }
                        $("#page-tags-table-tbody").html(page_categories_html);
                    },
                    error:function(){
                        $('#error').html('<p>加载失败，请点击右侧（或下方的）“发现错误”按钮，在收到信息后我会尽快前来修复。</p>');
                    }
                });
            }
        }
    });
})(jQuery);