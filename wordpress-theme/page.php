<?php
/**
 * Template para páginas estáticas
 */

get_header(); ?>

<main class="site-main">
    <div class="container">
        <div class="content-area">
            <section class="primary-content">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post page'); ?>>
                        <header class="post-header">
                            <h1 class="post-title"><?php the_title(); ?></h1>
                        </header>

                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <?php the_post_thumbnail('large', array('class' => 'img-responsive')); ?>
                            </div>
                        <?php endif; ?>

                        <div class="post-content">
                            <?php
                            the_content();

                            wp_link_pages(array(
                                'before' => '<div class="page-links">Páginas: ',
                                'after'  => '</div>',
                            ));
                            ?>
                        </div>
                    </article>

                    <?php
                    // Comentários (se habilitados para páginas)
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>

                <?php endwhile; ?>
            </section>

            <?php get_sidebar(); ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>