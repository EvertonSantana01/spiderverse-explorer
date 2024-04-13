<h1>Documentação do Projeto</h1>
<h2>Descrição</h2>
<p>
  Este projeto consiste em uma página web interativa que apresenta sete versões do Homem-Aranha de diferentes filmes. Os usuários podem explorar os heróis,   cada um com um efeito de zoom ao passar o cursor sobre eles. Ao clicar em um dos heróis, os usuários são direcionados a uma outra página contendo um        carrossel dinâmico, onde podem encontrar mais informações detalhadas sobre o herói selecionado.
<p/>

<h2>Funcionalidades Principais</h2>
<table>
  <tr>
      <ul>
        <li>
          Exibição de sete versões do Homem-Aranha, cada uma com efeito de zoom ao passar o cursor.
        </li>
        <li>Navegação entre os heróis clicando sobre eles.</li>
        <li>Carrossel dinâmico na página de detalhes de cada herói.</li>
        <li>Informações detalhadas sobre o herói selecionado, como altura, peso, nome e local de nascimento.</li>
        <li>Atualização instantânea das informações ao selecionar um novo herói no carrossel.</li>
      </ul>
  </tr>
</table>
<h2>Tecnologias Utilizadas</h2>
<table>
  <tr>
    <ul>
      <li>TypeScript</li>
      <li>Next.js</li>
      <li>Sass</li>
      <li>ReactJS</li>
      <li>Framer Motion</li>
      <li>MockAPI para simulação de dados dos heróis</li>
      <li>ESLint</li>
    </ul>
  </tr>
</table>
<h2>Estrutura do Projeto</h2>
<p>projeto/</p>
<p>│</p>
<p>├── public/</p>
<p>│   ├── aranhas/</p>
<p>│   │   ├── spiderman1.jpg</p>
<p>│   │   ├── spiderman2.jpg</p>
<p>│   │   └── ...</p>
<p>│   ├── cancoes/</p>
<p>│   │   ├── song1.mp3</p>
<p>│   │   ├── song2.mp3</p>
<p>│   │   └── ...</p>
<p>│   ├── icones/</p>
<p>│   │   ├── icon1.png</p>
<p>│   │   ├── icon2.png</p>
<p>│   │   └── ...</p>
<p>│   └── index.html</p>
<p>│</p>
<p>├── src/</p>
<p>│   ├── app/</p>
<p>│   │   ├── api/</p>
<p>│   │   │   └── route.ts</p>
<p>│   │   ├── components/</p>
<p>│   │   │   ├── carousel/</p>
<p>│   │   │   │   └── ...</p>
<p>│   │   │   ├── HeroDetails/</p>
<p>│   │   │   │   └── ...</p>
<p>│   │   │   ├── HeroesList/</p>
<p>│   │   │   │   └── ...</p>
<p>│   │   │   └── heroesPictures/</p>
<p>│   │   │       └── ...</p>
<p>│   │   ├── fonts/</p>
<p>│   │   │   └── ...</p>
<p>│   │   └── interfaces/</p>
<p>│   │       └── ...</p>
<p>│   ├── pages/</p>
<p>│   │   ├── index.tsx</p>
<p>│   │   └── hero/</p>
<p>│   │       └── [id].tsx</p>
<p>│   └── ...</p>
<p>│</p>
<p>├── .gitignore</p>
<p>├── package.json</p>
<p>├── README.md</p>
<p>└── ...</p>



