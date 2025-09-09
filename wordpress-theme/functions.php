<?php
/**
 * Funções do tema
 */

// Configurações básicas do tema
function meu_tema_setup() {
    // Adicionar suporte para título dinâmico
    add_theme_support('title-tag');
    
    // Adicionar suporte para imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Adicionar suporte para HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Adicionar suporte para logotipo personalizado
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer'  => 'Menu do Rodapé',
    ));
}
add_action('after_setup_theme', 'meu_tema_setup');

// Enfileirar estilos e scripts
function meu_tema_scripts() {
    wp_enqueue_style('meu-tema-style', get_stylesheet_uri());
    
    // jQuery (já incluído no WordPress)
    wp_enqueue_script('jquery');
    
    // Script customizado
    wp_enqueue_script('meu-tema-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Adicionar suporte para comentários threaded
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'meu_tema_scripts');

// Registrar áreas de widgets
function meu_tema_widgets_init() {
    register_sidebar(array(
        'name'          => 'Sidebar Principal',
        'id'            => 'sidebar-1',
        'description'   => 'Adicione widgets aqui.',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => 'Widgets do Rodapé',
        'id'            => 'footer-widgets',
        'description'   => 'Widgets para o rodapé.',
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'meu_tema_widgets_init');

// Personalizar o comprimento do excerpt
function meu_tema_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'meu_tema_excerpt_length', 999);

// Personalizar o "more" do excerpt
function meu_tema_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'meu_tema_excerpt_more');

// Adicionar classes CSS personalizadas para posts
function meu_tema_post_classes($classes) {
    if (!is_admin() && is_singular()) {
        $classes[] = 'single-post-content';
    }
    return $classes;
}
add_filter('post_class', 'meu_tema_post_classes');

// Função para exibir breadcrumbs
function meu_tema_breadcrumbs() {
    if (is_home() || is_front_page()) return;
    
    echo '<nav class="breadcrumbs">';
    echo '<a href="' . home_url() . '">Home</a>';
    
    if (is_category() || is_single()) {
        echo ' &raquo; ';
        the_category(' &raquo; ');
        if (is_single()) {
            echo ' &raquo; ';
            the_title();
        }
    } elseif (is_page()) {
        echo ' &raquo; ';
        the_title();
    } elseif (is_search()) {
        echo ' &raquo; Resultados da pesquisa para "' . get_search_query() . '"';
    } elseif (is_404()) {
        echo ' &raquo; Página não encontrada';
    }
    
    echo '</nav>';
}

// Limitar revisões de posts
if (!defined('WP_POST_REVISIONS')) {
    define('WP_POST_REVISIONS', 3);
}

// Remover version do WordPress do head por segurança
function remove_wp_version() {
    return '';
}
add_filter('the_generator', 'remove_wp_version');

// Adicionar suporte para editor de blocos (Gutenberg)
function meu_tema_gutenberg_support() {
    // Adicionar suporte para cores personalizadas
    add_theme_support('editor-color-palette', array(
        array(
            'name'  => 'Amarelo',
            'slug'  => 'amarelo',
            'color' => '#FBFC15',
        ),
        array(
            'name'  => 'Preto',
            'slug'  => 'preto',
            'color' => '#000000',
        ),
        array(
            'name'  => 'Cinza',
            'slug'  => 'cinza',
            'color' => '#666666',
        ),
    ));
    
    // Adicionar suporte para larguras personalizadas
    add_theme_support('align-wide');
}
add_action('after_setup_theme', 'meu_tema_gutenberg_support');

// Função de segurança - remover informações desnecessárias
function meu_tema_security() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
}
add_action('init', 'meu_tema_security');

// Customizar área de admin (opcional)
function meu_tema_admin_style() {
    echo '<style>
        #wpadminbar { background: #000 !important; }
        #adminmenu .wp-submenu-head { background: #FBFC15 !important; color: #000 !important; }
    </style>';
}
add_action('admin_head', 'meu_tema_admin_style');

// Função para otimização de imagens
function meu_tema_image_sizes() {
    // Adicionar tamanhos de imagem personalizados
    add_image_size('post-thumbnail-large', 800, 400, true);
    add_image_size('post-thumbnail-small', 300, 200, true);
}
add_action('after_setup_theme', 'meu_tema_image_sizes');
?>