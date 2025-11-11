const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Mapeamento de tipos MIME
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Remove query string
  let pathname = req.url.split('?')[0];
  
  // Decodifica URL
  pathname = decodeURIComponent(pathname);
  
  // Se é a raiz, serve index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  // Caminho completo do arquivo
  let filePath = path.join(__dirname, pathname);
  
  // Verifica se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Arquivo não existe - redireciona para index.html (reescrita de URL)
      console.log(`Arquivo não encontrado: ${filePath}, servindo index.html`);
      filePath = path.join(__dirname, 'index.html');
    }
    
    // Lê e serve o arquivo
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500);
        res.end(`Erro ao ler arquivo: ${error.code}`);
        return;
      }
      
      // Determina o tipo MIME
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Suporte a URLs amigáveis habilitado!');
  console.log('Teste: http://localhost:${PORT}/desentupidora-centro-curitiba');
});
