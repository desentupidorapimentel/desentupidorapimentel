# Site Dinâmico de Desentupidora - CORRIGIDO ✅

## O que foi corrigido?

O problema original era que o site gerava URLs amigáveis como `/desentupidora-centro-curitiba`, mas quando o usuário clicava nesses links, o navegador tentava acessar um arquivo que não existia, resultando em erro 404.

### Solução implementada:

1. **JavaScript atualizado** - O código agora detecta URLs amigáveis e extrai o bairro e serviço diretamente do caminho da URL
2. **Arquivo .htaccess** - Para servidores Apache, redireciona todas as URLs amigáveis para o index.html
3. **Configuração Nginx** - Alternativa para servidores Nginx

## Como instalar

### Opção 1: Servidor Apache (mais comum)

1. Faça upload de todos os arquivos para o servidor
2. Certifique-se de que o arquivo `.htaccess` está presente na raiz
3. Verifique se o módulo `mod_rewrite` está habilitado no Apache:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```
4. Pronto! O site já deve funcionar

### Opção 2: Servidor Nginx

1. Faça upload de todos os arquivos para o servidor
2. Edite o arquivo de configuração do Nginx (geralmente em `/etc/nginx/sites-available/`)
3. Adicione o conteúdo do arquivo `nginx.conf` dentro do bloco `server {}`
4. Teste a configuração:
   ```bash
   sudo nginx -t
   ```
5. Reinicie o Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

### Opção 3: Hospedagem compartilhada (cPanel, Hostinger, etc.)

1. Faça upload de todos os arquivos via FTP ou gerenciador de arquivos
2. O arquivo `.htaccess` será automaticamente reconhecido
3. Pronto!

## Como testar localmente

Para testar o site localmente antes de fazer upload:

### Usando Python (mais simples):

```bash
cd /caminho/para/pasta/do/site
python3 -m http.server 8000
```

Depois acesse: `http://localhost:8000`

**Importante:** URLs amigáveis não funcionarão no servidor Python simples. Você precisará testar diretamente no servidor de produção ou usar um servidor local com suporte a reescrita de URLs.

## Estrutura de URLs

O site agora suporta os seguintes formatos de URL:

- `https://seusite.com.br/` - Página inicial (bairro aleatório)
- `https://seusite.com.br/desentupidora-centro-curitiba` - Página específica do Centro
- `https://seusite.com.br/desentupidora-de-vaso-batel-curitiba` - Serviço específico no Batel
- `https://seusite.com.br/?bairro=centro` - Formato antigo (ainda funciona)

## Arquivos incluídos

- `index.html` - Arquivo principal corrigido
- `.htaccess` - Configuração para Apache
- `nginx.conf` - Configuração para Nginx (exemplo)
- `sitemap.html` - Gerador de sitemap
- `sitemap.xml` - Sitemap XML
- `favicon.ico`, `favicon.png` - Ícones do site
- `logo.png` - Logo
- `og-image.jpg` - Imagem para compartilhamento em redes sociais
- `README.md` - Este arquivo

## Suporte

Se ainda tiver problemas:

1. Verifique se o `.htaccess` está na raiz do site
2. Confirme que o módulo de reescrita está habilitado
3. Verifique os logs de erro do servidor
4. Teste acessando diretamente: `https://seusite.com.br/index.html`

## Melhorias implementadas

✅ Suporte a URLs amigáveis  
✅ Detecção automática de bairro e serviço na URL  
✅ Compatibilidade com formato antigo de query string  
✅ SEO otimizado com canonical URLs  
✅ Configuração para Apache e Nginx  
✅ Links internos atualizados (sem domínio absoluto)  

---

**Desenvolvido com ❤️ para melhorar o SEO local**
