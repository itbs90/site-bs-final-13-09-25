<?php
/**
 * Template da sidebar
 */

if (!is_active_sidebar('sidebar-1')) {
    return;
}
?>

<aside class="sidebar" role="complementary">
    <?php if (is_active_sidebar('sidebar-1')) : ?>
        <?php dynamic_sidebar('sidebar-1'); ?>
    <?php else : ?>
        <!-- Widgets padrão caso não haja widgets configurados -->
        <section class="widget">
            <h3 class="widget-title">Pesquisar</h3>
            <?php get_search_form(); ?>
        </section>

        <section class="widget">
            <h3 class="widget-title">Posts Recentes</h3>
            <ul>
                <?php
                $recent_posts = wp_get_recent_posts(array(
                    'numberposts' => 5,
                    'post_status' => 'publish'
                ));
                foreach ($recent_posts as $post_item) :
                ?>
                    <li>
                        <a href="<?php echo get_permalink($post_item['ID']); ?>">
                            <?php echo $post_item['post_title']; ?>
                        </a>
                        <small><?php echo get_the_date('', $post_item['ID']); ?></small>
                    </li>
                <?php endforeach; wp_reset_query(); ?>
            </ul>
        </section>

        <section class="widget">
            <h3 class="widget-title">Categorias</h3>
            <ul>
                <?php wp_list_categories(array(
                    'orderby'    => 'count',
                    'order'      => 'DESC',
                    'show_count' => 1,
                    'title_li'   => '',
                    'number'     => 10,
                )); ?>
            </ul>
        </section>

        <section class="widget">
            <h3 class="widget-title">Arquivos</h3>
            <ul>
                <?php wp_get_archives(array(
                    'type'  => 'monthly',
                    'limit' => 12,
                )); ?>
            </ul>
        </section>

        <section class="widget">
            <h3 class="widget-title">Tags</h3>
            <div class="tagcloud">
                <?php wp_tag_cloud(array(
                    'smallest' => 0.8,
                    'largest'  => 1.2,
                    'unit'     => 'rem',
                    'number'   => 20,
                )); ?>
            </div>
        </section>
    <?php endif; ?>
</aside>