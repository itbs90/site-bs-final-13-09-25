<?php
/**
 * Template do formulário de pesquisa
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo home_url('/'); ?>">
    <label>
        <span class="screen-reader-text">Pesquisar por:</span>
        <input type="search" class="search-field" placeholder="Digite sua pesquisa..." value="<?php echo get_search_query(); ?>" name="s" />
    </label>
    <input type="submit" class="search-submit" value="Pesquisar" />
</form>

<style>
.search-form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.search-field {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.search-submit {
    padding: 0.5rem 1rem;
    background-color: #FBFC15;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
}

.search-submit:hover {
    background-color: #000;
    color: #FBFC15;
}

.screen-reader-text {
    position: absolute;
    left: -9999px;
}
</style>