  <h1>Cashback Extension</h1>
    <p>Este é um projeto de uma extensão de cashback desenvolvida com <strong>React</strong> que permite que usuários recebam cashback em compras realizadas em lojas parceiras. A extensão é inspirada em sistemas de cashback como o Méliuz, permitindo fácil integração com diversas lojas e fornecendo uma interface amigável ao usuário.</p>

  <h2>Como funciona</h2>
    <p>A extensão funciona como uma interface que exibe as lojas parceiras e o cashback disponível para o usuário. A lógica de cashback é calculada com base nas compras feitas nas lojas parceiras cadastradas, e o usuário pode ver as melhores opções diretamente através da interface.</p>

   <h2>Tecnologias e Ferramentas Utilizadas</h2>
    <ul>
        <li><strong>React:</strong> Biblioteca JavaScript para construção de interfaces.</li>
        <li><strong>JavaScript (ES6+):</strong> Linguagem de programação principal do projeto.</li>
        <li><strong>React Hooks:</strong> Utilização de hooks como <code>useEffect</code> e <code>useState</code> para controlar o ciclo de vida e o estado dos componentes.</li>
        <li><strong>HTML5 & CSS3:</strong> Marcação e estilização da interface.</li>
        <li><strong>ESLint:</strong> Ferramenta de linting para manter a qualidade e padrão do código.</li>
        <li><strong>Create React App:</strong> Estrutura inicial usada para criar o projeto.</li>
    </ul>

   <h2>Como rodar o projeto localmente</h2>
    <p>Siga os passos abaixo para rodar o projeto em sua máquina local:</p>

  <h3>1. Clonar o repositório</h3>
    <pre>
bash
git clone https://github.com/sucloudflare/extensao-cashback/tree/main
cd extensao-cashback
    </pre>

  <h3>2. Instalar as dependências</h3>
    <p>Para instalar as dependências do projeto, execute:</p>
    <pre>
bash
npm install
    </pre>
    <p>Isso instalará todas as dependências listadas no <code>package.json</code>, como <code>react</code>, <code>react-dom</code>, entre outras.</p>

   <h3>3. Executar o projeto em ambiente de desenvolvimento</h3>
    <p>Após instalar as dependências, você pode rodar o projeto localmente com o comando:</p>
    <pre>
bash
npm start
    </pre>
    <p>Isso iniciará o servidor de desenvolvimento e você poderá acessar a extensão no navegador através do endereço:</p>
    <pre>
http://localhost:3000
    </pre>

  <h3>4. Gerar a build para produção</h3>
    <p>Para gerar uma build otimizada para produção, utilize o comando:</p>
    <pre>
bash
npm run build
    </pre>
    <p>A build será gerada na pasta <code>build/</code>, pronta para ser implantada em servidores estáticos ou em lojas de extensões de navegador.</p>

   <h2>Estrutura de pastas</h2>
    <p>A estrutura principal do projeto é a seguinte:</p>
    <pre>
.
├── public/               # Arquivos estáticos
├── src/                  # Código fonte do projeto
│   ├── components/       # Componentes React
│   │   ├── Cashback.js   # Componente principal de cashback
│   ├── App.js            # Componente de entrada da aplicação
│   ├── index.js          # Ponto de entrada principal
│   └── ...               # Outros arquivos de suporte
├── package.json          # Dependências e scripts do projeto
├── README.md             # Documentação do projeto
└── build/                # Build gerada para produção
    </pre>
    <h2>Principais Dependências</h2>
    <p>Aqui estão as principais dependências utilizadas no projeto:</p>
    <ul>
        <li><strong>react:</strong> ^17.0.2</li>
        <li><strong>react-dom:</strong> ^17.0.2</li>
        <li><strong>eslint:</strong> Ferramenta para linting do código.</li>
        <li><strong>babel:</strong> Transpiler JavaScript para compatibilidade de código.</li>
        <li><strong>webpack:</strong> Empacotador de módulos para aplicações JavaScript.</li>
    </ul>
    <h3>Dependências de Desenvolvimento (DevDependencies)</h3>
    <ul>
        <li><strong>@babel/plugin-proposal-private-property-in-object:</strong> Plugin para suporte a propriedades privadas no Babel.</li>
        <li><strong>react-scripts:</strong> Scripts e configuração usada pelo Create React App para compilar, testar e gerar a build.</li>
    </ul>
    <h2>Como contribuir</h2>
    <ol>
        <li>Faça um fork do projeto.</li>
        <li>Crie uma branch para suas modificações (<code>git checkout -b minha-modificacao</code>).</li>
        <li>Faça commit das suas mudanças (<code>git commit -am 'Adiciona uma nova feature'</code>).</li>
        <li>Envie para a branch principal (<code>git push origin minha-modificacao</code>).</li>
        <li>Abra um Pull Request.</li>
    </ol>
</div>

</body>
