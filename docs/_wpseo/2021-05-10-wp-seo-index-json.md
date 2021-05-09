---
title: WPSEO 优化之静态化
date: 2021-05-10 07:02 +0800
abstract: 创建函数，可以将首页用到的信息保存为 json格式 的静态文件，然后 ajax 进行调用。
---

该文章是记录 WPSEO 优化过程中的第一步：将信息导出为json格式的静态文件。

当前函数需要在 <b>index.php</b> 添加 `<?php wzm_index_json(); ?>` ，然后刷新页面才能看到结果。

以下为函数逻辑：
1. 将所有的信息导出为 json 格式。
    1. 获取所有文章分类下的最后4篇文章的信息，导出为 json;
    2. 获取所有页面的页面信息，导出为 json；
    3. 为方便调用，以上两者先创建为对象（｛栏目别名:栏目的值｝），然后再导出为 json。
2. 创建相应的函数，已生成对应的 json 数据。
   1. 创建一个函数，可以输出一篇文章的信息，输出格式为对象；
   2. 创建一个函数，可以输出多篇文章的信息，输出格式为数组；
   3. 创建一个函数，可以将步骤2中的信息和其所属的类别结合起来，输出格式为对象；
      1. 创建一个函数，可以输出所有栏目的id，输出格式为数组；
      2. 创建一个函数，遍历步骤1输出的数组，将其与步骤2结合起来，输出格式为对象。
      3. 至此，目标1.1完成。
3. 根据步骤2，创建属于页面的函数，生成对应的 json 数据。
   1. 由于页面和文章的信息是在同一个 json 数据中的，因此步骤3提前到步骤2.3之前完成，
      使得步骤2.3时可以同时输出页面和文章的数据，从而得到两者都在同一个 json 中的结果。
   2. 由于存在“页面的别名和文章分类的别名相同”的情况，因此要把两者区别开来。
      这里的解决办法是：在输出页面对象时，在页面的别名前面添加前缀“page-”。  

{% highlight php %}
if (!function_exists('wzm_index_json')){
function wzm_index_json() {
//        总函数：将所有子部分汇总，然后填入index.json文件中
//        1. 创建一个数组，用于记录所有栏目的信息，示例：记录栏目新闻中心、产品中心等信息。
//        1.1 20210508 发现和栏目对象冲突，可以直接构成对象，无需生成数组。
//        $wzm_cat_array = array();
//        2. 创建一个关于栏目的对象，用于记录栏目中内容的信息，示例：记录栏目新闻中心的信息。
//        class wzm_categories_object {
//            public $name = '';
//            public $value = '';
//        }
//        3. 创建一个关于栏目的数组，用于记录栏目中内容的信息，示例：记录栏目新闻中心中的n篇文章的信息。
//        $wzm_items_array = array();
//        4. 创建一个关于内容的对象，用于记录内容的各种属性，示例：记录栏目新闻中心中的一篇文章的标题、日期、所属分类、缩略图等信息。
//        class wzm_items_object {
//            public $id = '';
//            public $title = '';
//            public $link = '';
//            public $img = '';
//        }

//      根据2，创建函数用于获取分类栏目id（不包含woocommmerce）和页面id
//        function wzm_categories_id_array() {
//            // 函数目的：获取所有栏目的ID，然后输出（格式为数组形式）。
//            // 1. 创建输出所需要的数组
//            $categories_id_array = array();
//            // 2. 开始获取所有栏目的ID
//            $pages_array = get_categories();
//            foreach ( $pages_array as $value ) {
//                $category_id = $value->{"cat_ID"};
//                $categories_id_array[] = $category_id;
//            }
//            return $categories_id_array;
//        }
//        function wzm_pages_id_array() {
//            // 函数目的：获取所有页面的ID，然后输出（格式为数组形式）。
//            // 1. 创建输出所需要的数组
//            $pages_id_array = array();
//            // 2. 开始获取所有页面的ID
//            $pages_array = get_pages();
//            foreach ( $pages_array as $value ) {
//                $page_id = $value->{"ID"};
//                $pages_id_array[] = $page_id;
//            }
//            return $pages_id_array;
//        }
//      根据4，创建函数用于获取文章的各项属性
// 1. 创建带有1篇文章信息的函数，输出格式为对象。
class wzm_post_object {
   public $title;
   public $date;
   public $excerpt;
   public $link;
   public $img;
}
function wzm_post_object() {
   $wzm_post_object = new wzm_post_object;
   $wzm_post_object ->title = get_post()->{"post_title"};
   $wzm_post_object ->date = get_post()->{"post_date"};
   $wzm_post_object ->excerpt = get_post()->{"post_excerpt"};
   $wzm_post_object ->link = get_the_permalink();
   $wzm_post_object ->img = get_the_post_thumbnail();
   return $wzm_post_object;
}
// 2. 创建保存n篇文章信息的函数，输出格式为数组。
function wzm_posts_array( &$cat = 1,&$post_per_page = 4 ) {
   $wzm_posts_array = array();
   $wzm_args = array(
      'cat' => $cat,
      'posts_per_page' => $post_per_page,
      'no_found_rows' => 1
   );
   $wzm_wp_query = new WP_Query($wzm_args);
   if($wzm_wp_query->have_posts()) : while ($wzm_wp_query->have_posts()) : $wzm_wp_query->the_post();
   $wzm_posts_array[] = wzm_post_object();
   endwhile;
   endif; wp_reset_postdata();
   return $wzm_posts_array;
}
// 3. 整合以上两个函数，输出格式为对象。
//        class wzm_categories_object {
//        }
//        function wzm_category_object( &$cat = 1,&$post_per_page = 4 ) {
//            $wzm_cat_slug = get_category($cat)->slug;
//            $wzm_cat_value = wzm_posts_array();
//            $wzm_category_object = new wzm_categories_object;
//            // 下注：动态添加属性，请参考书籍《深入php面向对象、模式与实践第三版pdf》第18页
//            $wzm_category_object->$wzm_cat_slug = $wzm_cat_value;
//            return $wzm_category_object;
//        }

        // 5. 调用所有页面的id，并输出为数组
        // 注：将步骤7整合到步骤4后，提示wzm_pages_id_array未定义，因此将步骤5、6提到步骤4之前。
        function wzm_pages_id_array() {
            // 函数目的：获取所有页面的ID，然后输出（格式为数组形式）。
            // 1. 创建输出所需要的数组
            $wzm_pages_id_array = array();
            // 2. 开始获取所有页面的ID
            $wzm_pages_array = get_pages();
            foreach ( $wzm_pages_array as $value ) {
                $wzm_page_id = $value->{"ID"};
                $wzm_pages_id_array[] = $wzm_page_id;
            }
            return $wzm_pages_id_array;
        }
        // 6. 调用单页页面的页面信息，并输出为对象。
        // 注：为担心页面的别名和类别的别名互相冲突，所以在页面的别名前面加“page-”
        // 页面和文章页面相同，因此这里可以直接用之前创建的文章class。
        function wzm_page_object(&$page_id = 2) {
            $wzm_page_object = new wzm_post_object;
            $wzm_page_object ->title = get_post($page_id)->{"post_title"};
            $wzm_page_object ->date = get_post($page_id)->{"post_date"};
            $wzm_page_object ->excerpt = get_post($page_id)->{"post_excerpt"};
            $wzm_page_object ->link = get_the_permalink($page_id);
            $wzm_page_object ->img = get_the_post_thumbnail($page_id);
            return $wzm_page_object;
        }

        // 4. 循环所有分类id，创建能调出所有分类信息的函数，输出格式为对象
        // 注：将步骤3移动到步骤4中。
        function wzm_categories_id_array() {
            // 函数目的：获取所有栏目的ID，然后输出（格式为数组形式）。
            // 1. 创建输出所需要的数组
            $wzm_categories_id_array = array();
            // 2. 开始获取所有栏目的ID
            $wzm_categories_array = get_categories();
            foreach ( $wzm_categories_array as $value ) {
                $wzm_category_id = $value->{"cat_ID"};
                $wzm_categories_id_array[] = $wzm_category_id;
            }
            return $wzm_categories_id_array;
        }
        class wzm_categories_object {
        }
        function wzm_categories_object( &$post_per_page = 4 ) {
            $wzm_categories_object = new wzm_categories_object;
            $wzm_categories_id_array = wzm_categories_id_array();
            foreach ( $wzm_categories_id_array as $value ) {
                $wzm_category_id = $value;
                $wzm_category_slug = get_category($wzm_category_id)->slug;
                $wzm_category_value = wzm_posts_array($wzm_category_id,$post_per_page);
                // 下注：动态添加属性，请参考书籍《深入php面向对象、模式与实践第三版pdf》第18页
                $wzm_categories_object->$wzm_category_slug = $wzm_category_value;
            }
            $wzm_pages_id_array = wzm_pages_id_array();
            foreach ( $wzm_pages_id_array as $value ) {
                $wzm_page_id = $value;
                $wzm_page_slug = 'page-'.get_post($wzm_page_id)->{"post_name"};
                $wzm_page_value = wzm_page_object($wzm_page_id);
                $wzm_categories_object->$wzm_page_slug = $wzm_page_value;
            }
            return $wzm_categories_object;
        }
        $index_json = json_encode(wzm_categories_object(),320);
//        $index_json = json_decode($index_json);
//        print_r(wzm_categories_object());
//        以上，所有分类的前4篇文章的数据已调出；接下来则是将页面的添加进去。

        file_put_contents('index.json', $index_json);

        // 7. 调用所有创建的文章页面信息，并输出为对象
        // 因为要和文章组成同一个json，所这里这里要迁移到步骤4中。
//        function wzm_pages_object() {
//            $wzm_pages_id_array = wzm_pages_id_array();
//            $wzm_categories_object = new wzm_categories_object;
//            foreach ( $wzm_pages_id_array as $value ) {
//                $wzm_page_id = $value;
//                $wzm_page_slug = 'page-'.get_post($wzm_page_id)->{"post_name"};
//                $wzm_page_value = wzm_page_object($wzm_page_id);
//                $wzm_categories_object->$wzm_page_slug = $wzm_page_value;
//            }
//            return $wzm_categories_object;
//        }
//        print_r(wzm_pages_object());



//        function wzm_post_object() {
//            $wzm_solutions_array = array();
//            $wzm_solutions_args = array(
//                'cat'   =>  18,
//                'posts_per_page' => 4,
//                'no_found_rows'  => 1
//            );
//            $wzm_solutions_query = new WP_Query($wzm_solutions_args);
//            if($wzm_solutions_query->have_posts()) : while ($wzm_solutions_query->have_posts()) : $wzm_solutions_query->the_post();
//                $wzm_item_obj = new wzm_item_obj;
//                $wzm_item_obj ->id = get_the_ID();
//                $wzm_item_obj ->title = get_the_title();
//                $wzm_item_obj ->link = get_the_permalink();
//                $wzm_item_obj ->img_url = get_the_post_thumbnail_url();
//                $wzm_solutions_array[] = $wzm_item_obj;
//            endwhile;
//            endif; wp_reset_postdata();
//            $wzm_solutions_json_obj = new wzm_categories_object;
//            $wzm_solutions_json_obj ->name = 'solutions';
//            $wzm_solutions_json_obj ->value = $wzm_solutions_array;
//            return $wzm_solutions_json_obj;
//        }



//        function wzm_solutions_json() {
////            子部分：解决方案
//            $wzm_solutions_array = array();
//            $wzm_solutions_args = array(
//                'cat'   =>  18,
//                'posts_per_page' => 4,
//                'no_found_rows'  => 1
//            );
//            $wzm_solutions_query = new WP_Query($wzm_solutions_args);
//            if($wzm_solutions_query->have_posts()) : while ($wzm_solutions_query->have_posts()) : $wzm_solutions_query->the_post();
//                $wzm_item_obj = new wzm_item_obj;
//                $wzm_item_obj ->id = get_the_ID();
//                $wzm_item_obj ->title = get_the_title();
//                $wzm_item_obj ->link = get_the_permalink();
//                $wzm_item_obj ->img_url = get_the_post_thumbnail_url();
//                $wzm_solutions_array[] = $wzm_item_obj;
//            endwhile;
//            endif; wp_reset_postdata();
//            $wzm_solutions_json_obj = new wzm_categories_object;
//            $wzm_solutions_json_obj ->name = 'solutions';
//            $wzm_solutions_json_obj ->value = $wzm_solutions_array;
//            return $wzm_solutions_json_obj;
//        }
//        console_log(wzm_solutions_json());
//        $wzm_cat_array[] = wzm_solutions_json();
//            子部分：解决方案结束
//        $date = json_encode($wzm_cat_array,320);
//        file_put_contents('index.json', $date);
}
}
{% endhighlight %}