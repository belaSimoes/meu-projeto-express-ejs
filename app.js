const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {
    id: 1,
    productName: 'Pulp Fiction',
    imagePath: '/imagem_produto1.png',
    productDescription: 'Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.',
    productPrice: 'R$ 79,99',
  },
  {
    id: 2,
    productName: 'Inglourious Basterds',
    imagePath: '/imagem_produto2.png',
    productDescription: 'Durante a Segunda Guerra Mundial, na França, judeus americanos espalham o terror entre o terceiro Reich. Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, planeja vingança quando um evento em seu cinema reunirá os líderes do partido.',
    productPrice: 'R$ 99,99',
  },
  {
    id: 3,
    productName: 'Kill Bill',
    imagePath: '/imagem_produto3.png',
    productDescription: 'A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos de sua vida. Na jornada, a Noiva é submetida a dores físicas agonizantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.',
    productPrice: 'R$ 89,99',
  }
];



app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produto', (req, res) => {
  const produtoId = req.query.id;

  const produto = produtos.find(prod => prod.id === Number(produtoId));

  if (produto) {
    res.render('produto', { produto });
  } else {
    res.send('Produto não encontrado');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
