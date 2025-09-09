<?php
/**
 * Template para exibir comentários
 */

if (post_password_required()) {
    return;
}
?>

<div id="comments" class="comments-area">

    <?php if (have_comments()) : ?>
        <h2 class="comments-title">
            <?php
            $comment_count = get_comments_number();
            if ('1' === $comment_count) {
                printf('Um comentário em &ldquo;%1$s&rdquo;', get_the_title());
            } else {
                printf('%1$s comentários em &ldquo;%2$s&rdquo;', number_format_i18n($comment_count), get_the_title());
            }
            ?>
        </h2>

        <ol class="comment-list">
            <?php
            wp_list_comments(array(
                'style'      => 'ol',
                'short_ping' => true,
                'callback'   => 'meu_tema_comment_callback',
            ));
            ?>
        </ol>

        <?php
        // Navegação dos comentários
        if (get_comment_pages_count() > 1 && get_option('page_comments')) :
        ?>
            <nav class="comment-navigation">
                <div class="nav-previous"><?php previous_comments_link('Comentários Anteriores'); ?></div>
                <div class="nav-next"><?php next_comments_link('Próximos Comentários'); ?></div>
            </nav>
        <?php endif; ?>

    <?php endif; ?>

    <?php if (!comments_open() && get_comments_number() && post_type_supports(get_post_type(), 'comments')) : ?>
        <p class="no-comments">Os comentários estão fechados.</p>
    <?php endif; ?>

    <?php
    comment_form(array(
        'title_reply'          => 'Deixe seu comentário',
        'title_reply_to'       => 'Deixe uma resposta para %s',
        'cancel_reply_link'    => 'Cancelar resposta',
        'label_submit'         => 'Enviar Comentário',
        'comment_field'        => '<p class="comment-form-comment"><label for="comment">Comentário *</label><textarea id="comment" name="comment" cols="45" rows="8" required aria-required="true" placeholder="Digite seu comentário..."></textarea></p>',
        'fields'               => array(
            'author' => '<p class="comment-form-author"><label for="author">Nome *</label><input id="author" name="author" type="text" value="' . esc_attr($commenter['comment_author']) . '" size="30" required aria-required="true" placeholder="Seu nome" /></p>',
            'email'  => '<p class="comment-form-email"><label for="email">Email *</label><input id="email" name="email" type="email" value="' . esc_attr($commenter['comment_author_email']) . '" size="30" required aria-required="true" placeholder="seu@email.com" /></p>',
            'url'    => '<p class="comment-form-url"><label for="url">Website</label><input id="url" name="url" type="url" value="' . esc_attr($commenter['comment_author_url']) . '" size="30" placeholder="https://seusite.com" /></p>',
        ),
    ));
    ?>

</div>

<?php
// Função personalizada para exibir comentários
function meu_tema_comment_callback($comment, $args, $depth) {
    if ('div' === $args['style']) {
        $tag       = 'div';
        $add_below = 'comment';
    } else {
        $tag       = 'li';
        $add_below = 'div-comment';
    }
?>
    <<?php echo $tag ?> <?php comment_class(empty($args['has_children']) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
        <?php if ('div' != $args['style']) : ?>
            <div id="div-comment-<?php comment_ID() ?>" class="comment-body">
        <?php endif; ?>
        
        <div class="comment-author vcard">
            <?php if ($args['avatar_size'] != 0) echo get_avatar($comment, $args['avatar_size']); ?>
            <?php printf('<cite class="fn">%s</cite> <span class="says">diz:</span>', get_comment_author_link()); ?>
        </div>
        
        <?php if ($comment->comment_approved == '0') : ?>
            <em class="comment-awaiting-moderation">Seu comentário está aguardando moderação.</em>
            <br />
        <?php endif; ?>

        <div class="comment-meta commentmetadata">
            <a href="<?php echo htmlspecialchars(get_comment_link($comment->comment_ID)); ?>">
                <?php
                printf('%1$s às %2$s',
                    get_comment_date(),
                    get_comment_time());
                ?>
            </a>
            <?php edit_comment_link('(Editar)', '  ', ''); ?>
        </div>

        <div class="comment-content">
            <?php comment_text(); ?>
        </div>

        <div class="reply">
            <?php comment_reply_link(array_merge($args, array(
                'add_below' => $add_below,
                'depth'     => $depth,
                'max_depth' => $args['max_depth']
            ))); ?>
        </div>
        
        <?php if ('div' != $args['style']) : ?>
            </div>
        <?php endif; ?>
<?php
}
?>

<style>
.comments-area {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e0e0e0;
}

.comments-title {
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.comment-list {
    list-style: none;
    padding: 0;
}

.comment {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #FBFC15;
}

.comment .children {
    margin-left: 2rem;
    margin-top: 1rem;
}

.comment-author {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.comment-author img {
    border-radius: 50%;
    margin-right: 1rem;
}

.comment-author cite {
    font-weight: bold;
    font-style: normal;
}

.comment-meta {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
}

.comment-content {
    line-height: 1.6;
    margin-bottom: 1rem;
}

.reply a {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
}

.reply a:hover {
    color: #000;
}

.comment-form {
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;
}

.comment-form h3 {
    margin-bottom: 1.5rem;
}

.comment-form p {
    margin-bottom: 1rem;
}

.comment-form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.comment-form input[type="text"],
.comment-form input[type="email"],
.comment-form input[type="url"],
.comment-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
}

.comment-form input[type="submit"] {
    background-color: #FBFC15;
    color: #000;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.comment-form input[type="submit"]:hover {
    background-color: #000;
    color: #FBFC15;
}

.comment-awaiting-moderation {
    color: #d69e2e;
    font-style: italic;
}

.no-comments {
    text-align: center;
    color: #666;
    font-style: italic;
}

.comment-navigation {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
}

.comment-navigation a {
    color: #666;
    text-decoration: none;
}

.comment-navigation a:hover {
    color: #000;
}
</style>