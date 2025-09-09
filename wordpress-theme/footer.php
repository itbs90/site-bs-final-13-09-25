</div><!-- #page -->

<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-widget">
                <h3>Sobre</h3>
                <p><?php bloginfo('description'); ?></p>
            </div>

            <div class="footer-widget">
                <h3>Links Úteis</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container'      => false,
                    'menu_class'     => 'footer-menu',
                    'fallback_cb'    => function() {
                        echo '<ul>';
                        echo '<li><a href="' . home_url() . '">Home</a></li>';
                        echo '<li><a href="' . home_url('/sobre') . '">Sobre</a></li>';
                        echo '<li><a href="' . home_url('/contato') . '">Contato</a></li>';
                        echo '</ul>';
                    }
                ));
                ?>
            </div>

            <div class="footer-widget">
                <h3>Contato</h3>
                <p>Email: contato@seusite.com</p>
                <p>Telefone: (11) 9999-9999</p>
            </div>

            <?php if (is_active_sidebar('footer-widgets')) : ?>
                <div class="footer-widget">
                    <?php dynamic_sidebar('footer-widgets'); ?>
                </div>
            <?php endif; ?>
        </div>

        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
// Menu mobile simples
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});
</script>

<style>
@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: block !important;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #000;
        flex-direction: column;
        padding: 1rem;
    }
    
    .nav-menu.active {
        display: flex;
    }
}
</style>

</body>
</html>