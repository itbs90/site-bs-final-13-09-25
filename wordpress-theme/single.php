<?php
/**
 * Template para posts individuais
 */

get_header(); ?>

<main class="site-main">
    <div class="container">
        <div class="content-area">
            <section class="primary-content">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post single-post'); ?>>
                        <header class="post-header">
                            <h1 class="post-title"><?php the_title(); ?></h1>
                            <div class="post-meta">
                                <span class="posted-on">
                                    <time datetime="<?php echo get_the_date('c'); ?>">
                                        <?php echo get_the_date(); ?>
                                    </time>
                                </span>
                                <span class="byline">
                                    por <span class="author">
                                        <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>">
                                            <?php the_author(); ?>
                                        </a>
                                    </span>
                                </span>
                                <span class="cat-links">
                                    em <?php the_category(', '); ?>
                                </span>
                                <?php if (comments_open() || get_comments_number()) : ?>
                                    <span class="comments-link">
                                        <a href="<?php comments_link(); ?>">
                                            <?php comments_number('Sem comentários', '1 Comentário', '% Comentários'); ?>
                                        </a>
                                    </span>
                                <?php endif; ?>
                            </div>
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

                        <?php if (has_tag()) : ?>
                            <footer class="post-footer">
                                <div class="tag-links">
                                    <strong>Tags:</strong> <?php the_tags('', ', ', ''); ?>
                                </div>
                            </footer>
                        <?php endif; ?>
                    </article>

                    <!-- Navegação entre posts -->
                    <nav class="post-navigation">
                        <div class="nav-links">
                            <div class="nav-previous">
                                <?php previous_post_link('%link', '&laquo; %title'); ?>
                            </div>
                            <div class="nav-next">
                                <?php next_post_link('%link', '%title &raquo;'); ?>
                            </div>
                        </div>
                    </nav>

                    <!-- Área do autor -->
                    <div class="author-info">
                        <div class="author-avatar">
                            <?php echo get_avatar(get_the_author_meta('ID'), 80); ?>
                        </div>
                        <div class="author-details">
                            <h4>Sobre <?php the_author(); ?></h4>
                            <p><?php the_author_meta('description'); ?></p>
                            <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" class="author-link">
                                Ver todos os posts de <?php the_author(); ?>
                            </a>
                        </div>
                    </div>

                    <!-- Posts relacionados -->
                    <?php
                    $related = get_posts(array(
                        'category__in' => wp_get_post_categories($post->ID),
                        'numberposts'  => 3,
                        'post__not_in' => array($post->ID)
                    ));
                    if ($related) :
                    ?>
                        <section class="related-posts">
                            <h3>Posts Relacionados</h3>
                            <div class="related-posts-grid">
                                <?php foreach ($related as $post) : setup_postdata($post); ?>
                                    <article class="related-post">
                                        <?php if (has_post_thumbnail()) : ?>
                                            <a href="<?php the_permalink(); ?>">
                                                <?php the_post_thumbnail('medium'); ?>
                                            </a>
                                        <?php endif; ?>
                                        <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                        <p><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                                    </article>
                                <?php endforeach; wp_reset_postdata(); ?>
                            </div>
                        </section>
                    <?php endif; ?>

                    <?php
                    // Comentários
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