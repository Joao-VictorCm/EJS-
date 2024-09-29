import express from "express";

const app = express();
const port = 3001;


// Escreva seu código aqui:
// Etapa 1: renderize a página inicial "/" index.ejs
// Etapa 2: certifique-se de que os arquivos estáticos estejam vinculados e que o CSS apareça.
// Etapa 3: adicione as rotas para lidar com a renderização das páginas sobre e de contato.
//   Dica: verifique a barra de navegação no header.ejs para ver o botão hrefs
// Etapa 4: adicione parciais às páginas sobre e contato para mostrar o cabeçalho e o rodapé dessas páginas.

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    }
  }
}));

app.get("/", (req, res) =>{
  res.render("index.ejs")
})

app.get("/about", (req, res) =>{
  res.render("about.ejs")
})

app.get("/contact", (req, res) =>{
  res.render("contact.ejs")
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
