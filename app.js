const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/produto', (req, res) => {
  const produto = {
    productName: 'Pulp Fiction',
    imagePath: '/imagem_produto1.png',
    productDescription: 'Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.',
    productPrice: 'R$ 79,99',
  };

  res.render('produto', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
