<?php
/**
 * Template do cabeçalho
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary">Pular para o conteúdo</a>

    <header class="site-header" role="banner">
        <div class="container">
            <nav class="main-navigation" role="navigation" aria-label="Menu principal">
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        if (is_front_page() && is_home()) :
                    ?>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                    <?php else : ?>
                        <p class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                <?php bloginfo('name'); ?>
                            </a>
                        </p>
                    <?php
                        endif;
                        
                        $description = get_bloginfo('description', 'display');
                        if ($description || is_customize_preview()) :
                    ?>
                        <p class="site-description"><?php echo $description; ?></p>
                    <?php endif; ?>
                    <?php } ?>
                </div>

                <button class="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false" style="display: none; background: none; border: none; color: #fff; font-size: 1.5rem;">
                    ☰
                </button>

                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'menu_class'     => 'nav-menu',
                    'container'      => false,
                    'fallback_cb'    => function() {
                        echo '<ul class="nav-menu">';
                        echo '<li><a href="' . home_url() . '">Home</a></li>';
                        wp_list_pages(array(
                            'title_li' => '',
                            'depth'    => 1
                        ));
                        echo '</ul>';
                    }
                ));
                ?>
            </nav>
        </div>
    </header>