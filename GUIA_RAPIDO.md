# 🚀 Guia Rápido de Instalação

## ⚡ Instalação em 3 Passos

### 1️⃣ Faça Upload dos Arquivos

**Via FTP (FileZilla, WinSCP, etc.):**
- Conecte-se ao seu servidor
- Navegue até a pasta `public_html` ou `www`
- Arraste todos os arquivos da pasta para o servidor
- **IMPORTANTE**: Certifique-se de que o arquivo `.htaccess` foi enviado (pode estar oculto)

**Via cPanel:**
- Acesse o Gerenciador de Arquivos
- Navegue até `public_html`
- Clique em "Upload" e envie todos os arquivos
- Ou use a opção "Extrair" se enviar o ZIP

### 2️⃣ Verifique o .htaccess

**No cPanel:**
- Vá em Gerenciador de Arquivos
- Clique em "Configurações" (canto superior direito)
- Marque "Mostrar arquivos ocultos"
- Confirme que o arquivo `.htaccess` está na raiz

**Via FTP:**
- Configure seu cliente FTP para mostrar arquivos ocultos
- No FileZilla: Servidor → Forçar exibição de arquivos ocultos

### 3️⃣ Teste o Site

Acesse as seguintes URLs para testar:

```
✅ https://seusite.com.br/
✅ https://seusite.com.br/desentupidora-centro-curitiba
✅ https://seusite.com.br/desentupidora-de-vaso-batel-curitiba
```

Se todas carregarem sem erro 404, está funcionando! 🎉

---

## 🔧 Resolução de Problemas

### ❌ Erro 404 nas URLs dinâmicas

**Causa**: mod_rewrite não está ativo ou .htaccess não foi enviado

**Solução**:
1. Confirme que o `.htaccess` está na raiz do site
2. Entre em contato com o suporte da hospedagem
3. Peça para verificar/ativar o mod_rewrite

### ❌ Título da página não muda

**Causa**: Cache do navegador

**Solução**:
- Pressione `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
- Ou limpe o cache manualmente

### ❌ .htaccess não aparece

**Causa**: Arquivos ocultos não estão visíveis

**Solução**:
- No cPanel: Configurações → Mostrar arquivos ocultos
- No FileZilla: Servidor → Forçar exibição de arquivos ocultos
- No Windows: Exibir → Itens ocultos

---

## 📋 Checklist de Instalação

- [ ] Todos os arquivos foram enviados
- [ ] Arquivo `.htaccess` está na raiz
- [ ] Página inicial carrega normalmente
- [ ] URL `/desentupidora-centro-curitiba` funciona
- [ ] Título muda conforme o bairro
- [ ] Botões de WhatsApp funcionam
- [ ] Botões de telefone funcionam

---

## 🎯 Próximos Passos

Depois de instalar:

1. **Google Search Console**
   - Envie o arquivo `sitemap.xml`
   - URL: `https://seusite.com.br/sitemap.xml`

2. **Teste de SEO**
   - Use o PageSpeed Insights do Google
   - Verifique se as meta tags estão corretas

3. **Monitoramento**
   - Configure Google Analytics
   - Acompanhe o tráfego por bairro

---

## 💬 Precisa de Ajuda?

1. Leia o arquivo `README.md` completo
2. Consulte `CORRECOES_REALIZADAS.md` para detalhes técnicos
3. Entre em contato com o suporte da sua hospedagem

---

**Boa sorte com seu site! 🚀**
