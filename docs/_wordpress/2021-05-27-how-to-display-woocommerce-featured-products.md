---
title: "代码块：WooCommerce 精选产品"
thumbnail: "/assets/images/thumbnail-post/wordpress/wordpress.webp"
excerpt: "上传过程记录。"
date: 2021-05-27 5:40:00 +0800
modified-date: 2021-05-27 5:40:00 +0800
tag: wordpress,woocommerce,featured-products
category: wordpress,woocommerce
---

```html
<!-- html 部分 -->
wzm_product_featured();
```

```php
//  php 部分
function wzm_product_featured() {
    //  1. 通过是否有 WooCommerce 注册的专有分类法 product_visibility；
    //     从而判断是否启用 WooCommerce 插件。
    $has_woocommerce = taxonomy_exists('product_visibility');
    //  2. 若 WooCommerce 插件已启用
    if ( $has_woocommerce == true ) {
        $args = array(
            'tax_query' => array(
            'relation' => 'OR',
            array(
                'taxonomy' => 'product_visibility',
                'field'    => 'name',
                'terms'    => 'featured',
            ),
        ),
        'posts_per_page' => 9,          //  控制显示数量
        'post_status'    => 'publish',
        'post_type'      => 'product',
        'no_found_rows'  => 1,
        'order'          => "DESC",     //  控制显示顺序
        );
        $wp_query = new WP_Query($args);
        //  若精选产品已选中
        if($wp_query->have_posts()) {
            while ($wp_query->have_posts()) : $wp_query->the_post();
            echo '<ul class="woocommerce-product-featured-list">';
            ?>
                <li class="item">
                    <a href="<?php the_permalink(); ?>" >
                        <div class="item-img">
                            <?php the_post_thumbnail(); ?>
                        </div>
                        <div class="item-text">
                            <h3><?php the_title(); ?></h3>
                            <p class="submit"><?php the_date(); ?></p>
                            <p class="excerpt"><?php the_excerpt(); ?></p>
                        </div>
                    </a>
                </li>
            <?php
            echo '</ul>';
            endwhile;
        }
        else {
            echo "精选产品未选中";
        }
        wp_reset_postdata();
    }
    else {
        echo 'WooCommer 插件未启用';
    }
}
```