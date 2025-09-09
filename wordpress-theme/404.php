<?php
/**
 * Template para página 404 - Não encontrado
 */

get_header(); ?>

<main class="site-main">
    <div class="container">
        <div class="content-area">
            <section class="primary-content">
                <article class="post error-404 not-found">
                    <header class="post-header">
                        <h1 class="post-title">Oops! Esta página não foi encontrada.</h1>
                    </header>

                    <div class="post-content">
                        <p>Parece que nada foi encontrado nesta localização. Que tal tentar uma das opções abaixo?</p>

                        <div class="error-404-content">
                            <div class="widget">
                                <h3>Pesquisar</h3>
                                <?php get_search_form(); ?>
                            </div>

                            <div class="widget">
                                <h3>Posts Mais Recentes</h3>
                                <ul>
                                    <?php
                                    $recent_posts = wp_get_recent_posts(array(
                                        'numberposts' => 5,
                                        'post_status' => 'publish'
                                    ));
                                    if ($recent_posts) :
                                        foreach ($recent_posts as $post_item) :
                                    ?>
                                        <li>
                                            <a href="<?php echo get_permalink($post_item['ID']); ?>">
                                                <?php echo $post_item['post_title']; ?>
                                            </a>
                                        </li>
                                    <?php 
                                        endforeach; 
                                        wp_reset_query(); 
                                    else :
                                    ?>
                                        <li>Nenhum post encontrado.</li>
                                    <?php endif; ?>
                                </ul>
                            </div>

                            <div class="widget">
                                <h3>Categorias Populares</h3>
                                <ul>
                                    <?php 
                                    wp_list_categories(array(
                                        'orderby'    => 'count',
                                        'order'      => 'DESC',
                                        'show_count' => 1,
                                        'title_li'   => '',
                                        'number'     => 5,
                                    )); 
                                    ?>
                                </ul>
                            </div>

                            <div class="widget">
                                <h3>Links Úteis</h3>
                                <ul>
                                    <li><a href="<?php echo home_url('/'); ?>">Página Inicial</a></li>
                                    <li><a href="<?php echo home_url('/sobre'); ?>">Sobre Nós</a></li>
                                    <li><a href="<?php echo home_url('/contato'); ?>">Contato</a></li>
                                    <li><a href="<?php echo home_url('/blog'); ?>">Blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div style="text-align: center; margin-top: 2rem;">
                            <a href="<?php echo home_url('/'); ?>" class="btn">
                                Voltar à Página Inicial
                            </a>
                        </div>
                    </div>
                </article>
            </section>

            <?php get_sidebar(); ?>
        </div>
    </div>
</main>

<style>
.error-404-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.error-404 .post-header {
    text-align: center;
    margin-bottom: 2rem;
}

.error-404 .post-title {
    color: #666;
    font-size: 2.5rem;
}

.error-404 .widget {
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
}

.error-404 .widget h3 {
    margin-bottom: 1rem;
    color: #000;
}

.error-404 .widget ul {
    list-style: none;
    padding: 0;
}

.error-404 .widget li {
    margin-bottom: 0.5rem;
}

.error-404 .widget a {
    color: #666;
    text-decoration: none;
}

.error-404 .widget a:hover {
    color: #000;
}
</style>

<?php get_footer(); ?>