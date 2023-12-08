// Importa o Express e inicializa o aplicativo
const express = require('express');
const app = express();
const port = 3000;// Define a porta para o servidor

// Configura como EJS e define o diretório para arquivos estáticos
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Dados dos produtos
const produtos = [
  // Array de objetos representando produtos com detalhes
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
    productName: ' Bill',
    imagePath: '/imagem_produto3.png',
    productDescription: 'A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos de sua vida. Na jornada, a Noiva é submetida a dores físicas agonizantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.',
    productPrice: 'R$ 89,99',
  },
  {
    id: 4,
    productName: 'Scott Pilgrim vs. The World',
    imagePath: '/imagem_produto4.png',
    productDescription: 'Guitarrista de uma banda de rock do colégio, o jovem Scott Pilgrim nunca teve problemas para conseguir namorada. O problema sempre foi se livrar delas. Mas com Ramona Flowers é diferente, pois ele se apaixona perdidamente por ela e não será nada fácil conquistar seu amor. Ela tem o maior de todos os problemas: um exército de ex-namorados que não medem esforços para eliminar Scott da lista de interessados.',
    productPrice: 'R$ 69,99',
  },
  {
    id: 5,
    productName: 'The Godfather',
    imagePath: '/imagem_produto5.png',
    productDescription: 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.',
    productPrice: 'R$ 59,99',
  },
  {
    id: 6,
    productName: 'The Notebook',
    imagePath: '/imagem_produto6.png',
    productDescription: 'Na década de 1940, na Carolina do Sul, o operário Noah Calhoun e a rica Allie se apaixonam desesperadamente, mas os pais da jovem não aprovam o namoro. Noah é enviado para lutar na Segunda Guerra Mundial, e parece ser o fim do romance. Enquanto isso, Allie se envolve com outro homem. No entanto, a paixão deles ainda não acabou quando Noah retorna para a pequena cidade anos mais tarde, próximo ao casamento de Allie.',
    productPrice: 'R$ 79,99',
  },
];

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index', { produtos }); // Renderiza a página index.ejs com a lista de produtos
});

// exibe detalhes de um produto específico (ID)
app.get('/produto', (req, res) => {
  const id = req.query.id; // Pega o ID do parâmetro da URL
  const produtott = buscarProdutoPorId(id); // Busca pelo ID
  if (produto) {
    res.render('produto', { produtott }); // Renderiza a página do produto com os detalhes
  } else {
    res.status(404).send('não encontrado'); // Se o produto não for encontrado, retorna um erro 404
  }
});

// buscar o produto por ID
function buscarProdutoPorId(id) {
  return produtos.find(produto => produto.id == id);// Encontra o produto com base no ID fornecido
}

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`); // Exibe uma mensagem quando o servidor é iniciado
});
