# Meu Tema WordPress Personalizado

Um tema WordPress moderno, responsivo e totalmente funcional.

## 📋 Arquivos Incluídos

- `style.css` - Folha de estilos principal com informações do tema
- `index.php` - Template principal
- `header.php` - Cabeçalho do site
- `footer.php` - Rodapé do site
- `functions.php` - Funções e configurações do tema
- `sidebar.php` - Barra lateral
- `single.php` - Template para posts individuais
- `page.php` - Template para páginas estáticas
- `comments.php` - Sistema de comentários
- `searchform.php` - Formulário de pesquisa
- `404.php` - Página de erro 404

## 🚀 Instalação

1. **Baixar os arquivos**: Copie todos os arquivos para uma pasta
2. **Criar o tema**: Crie uma pasta com o nome do seu tema em `/wp-content/themes/`
3. **Upload**: Faça upload de todos os arquivos para a pasta do tema
4. **Ativar**: No admin do WordPress, vá em Aparência > Temas e ative seu tema

### Estrutura de pastas recomendada:
```
wp-content/themes/meu-tema/
├── style.css
├── index.php
├── header.php
├── footer.php
├── functions.php
├── sidebar.php
├── single.php
├── page.php
├── comments.php
├── searchform.php
├── 404.php
└── screenshot.png (opcional - 1200x900px)
```

## ⚙️ Configuração

### 1. Menus
- Vá em **Aparência > Menus**
- Crie dois menus:
  - Menu Principal (assign para "Menu Principal")
  - Menu do Rodapé (assign para "Menu do Rodapé")

### 2. Widgets
- **Aparência > Widgets**
- Configure widgets para:
  - Sidebar Principal
  - Widgets do Rodapé

### 3. Customização
- **Aparência > Personalizar**
- Configure logotipo, cores e outras opções

## 🎨 Características

### Design
- **Responsivo**: Funciona em todos os dispositivos
- **Moderno**: Design limpo e profissional
- **Cores**: Esquema preto/amarelo (#FBFC15) personalizável
- **Typography**: Helvetica Neue como fonte principal

### Funcionalidades
- ✅ Menu mobile responsivo
- ✅ Sistema de comentários completo
- ✅ Pesquisa integrada
- ✅ Breadcrumbs automático
- ✅ Posts relacionados
- ✅ Área do autor
- ✅ Navegação entre posts
- ✅ Suporte a imagens destacadas
- ✅ Widget areas (sidebar e footer)
- ✅ SEO otimizado

### Segurança
- ✅ Remoção de informações desnecessárias
- ✅ Sanitização de dados
- ✅ Escape de output

## 🛠️ Personalização

### Cores
Edite as variáveis no `style.css`:
```css
/* Principais */
--cor-primaria: #FBFC15;    /* Amarelo */
--cor-secundaria: #000000;   /* Preto */
--cor-texto: #333333;        /* Texto principal */
```

### Fontes
Altere no `style.css`:
```css
body {
    font-family: 'Sua Fonte', Arial, sans-serif;
}
```

### Largura do Container
Modifique no `style.css`:
```css
.container {
    max-width: 1200px; /* Altere conforme necessário */
}
```

## 📱 Responsividade

O tema é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: até 767px

## 🔧 Funções Úteis

### No functions.php você encontra:
- `meu_tema_breadcrumbs()` - Exibe breadcrumbs
- `meu_tema_excerpt_length()` - Controla tamanho do resumo
- Suporte para Gutenberg
- Otimizações de segurança
- Tamanhos de imagem personalizados

## 📖 Uso de Templates

### Hierarquia de Templates
1. `index.php` - Página principal/blog
2. `single.php` - Posts individuais
3. `page.php` - Páginas estáticas
4. `404.php` - Página não encontrada

### Hooks Disponíveis
```php
// No seu child theme ou plugin
add_action('wp_head', 'sua_funcao');
add_filter('excerpt_length', 'sua_funcao');
```

## 🎯 SEO

O tema inclui:
- Meta tags otimizadas
- Schema.org markup
- URLs amigáveis
- Titles dinâmicos
- Meta descriptions
- Open Graph (básico)

## 🐛 Troubleshooting

### Problemas Comuns:

**Menu não aparece?**
- Vá em Aparência > Menus e atribua ao local correto

**Sidebar vazia?**
- Adicione widgets em Aparência > Widgets

**Erro de CSS?**
- Verifique se todos os arquivos foram uploadados
- Limpe cache do navegador

**Comentários não funcionam?**
- Verifique se comentários estão habilitados no post/página

## 📄 Licença

Este tema é livre para uso pessoal e comercial. 

## 🆘 Suporte

Para dúvidas sobre WordPress:
- [Documentação Oficial](https://codex.wordpress.org/)
- [Fóruns WordPress](https://br.forums.wordpress.org/)

---

**Versão**: 1.0.0  
**Compatibilidade**: WordPress 5.0+  
**Testado até**: WordPress 6.4