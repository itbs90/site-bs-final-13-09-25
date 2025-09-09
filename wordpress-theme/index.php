<?php
/**
 * Arquivo principal do template
 */

get_header(); ?>

<main class="site-main">
    <div class="container">
        <div class="content-area">
            <section class="primary-content">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('post'); ?>>
                            <header class="post-header">
                                <h2 class="post-title">
                                    <a href="<?php the_permalink(); ?>" rel="bookmark">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>
                                <div class="post-meta">
                                    <span class="posted-on">
                                        <?php echo get_the_date(); ?>
                                    </span>
                                    <span class="byline">
                                        por <?php the_author(); ?>
                                    </span>
                                    <span class="cat-links">
                                        em <?php the_category(', '); ?>
                                    </span>
                                </div>
                            </header>

                            <div class="post-content">
                                <?php
                                if (is_singular()) {
                                    the_content();
                                } else {
                                    the_excerpt();
                                    echo '<p><a href="' . get_permalink() . '" class="btn">Leia mais</a></p>';
                                }
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
                    <?php endwhile; ?>

                    <nav class="pagination">
                        <?php
                        echo paginate_links(array(
                            'prev_text' => '&laquo; Anterior',
                            'next_text' => 'Próximo &raquo;',
                        ));
                        ?>
                    </nav>

                <?php else : ?>
                    <article class="post">
                        <header class="post-header">
                            <h1 class="post-title">Nada encontrado</h1>
                        </header>
                        <div class="post-content">
                            <p>Desculpe, mas nada foi encontrado para sua pesquisa. Tente novamente com palavras-chave diferentes.</p>
                            <?php get_search_form(); ?>
                        </div>
                    </article>
                <?php endif; ?>
            </section>

            <?php get_sidebar(); ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>