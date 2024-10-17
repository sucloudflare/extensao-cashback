 <h1>Extensão de Cashback - React</h1>
    <p>
        Este projeto de extensão de cashback em React tem como objetivo oferecer uma experiência simples e segura para os usuários,
        incluindo funcionalidades como captura de IP e cookies, além de autenticação via Google. Abaixo estão os passos e verificações 
        necessárias para garantir que a extensão esteja pronta para ser postada em lojas de extensões como a Chrome Web Store e o 
        Firefox Add-ons.
    </p>

  <h2>Funcionalidade Completa</h2>
    <ul>
        <li><strong>Captura de IP e cookies:</strong> Certifique-se de que a extensão está corretamente coletando as informações de IP e cookies conforme planejado.</li>
        <li><strong>Autenticação com Google:</strong> Verifique se o login via Google está funcionando sem problemas e que a segurança da autenticação está garantida.</li>
    </ul>

   <h2>Interface do Usuário (UI)</h2>
    <ul>
        <li>O design da extensão deve ser simples e intuitivo para que os usuários possam navegar facilmente.</li>
        <li>Garanta que todos os elementos da interface estão devidamente ajustados, com responsividade e feedbacks visuais adequados.</li>
    </ul>

   <h2>Permissões</h2>
    <ul>
        <li>Defina claramente as permissões necessárias no arquivo <code>manifest.json</code>.</li>
        <li>As permissões precisam ser detalhadas e apenas as necessárias devem ser solicitadas, como cookies e acesso à internet.</li>
    </ul>
    <h2>Manifesto da Extensão</h2>
    <ul>
        <li>Complete o arquivo <code>manifest.json</code> com as seguintes informações:</li>
        <ul>
            <li>Nome</li>
            <li>Versão</li>
            <li>Descrição</li>
            <li>Ícones para a loja de extensões</li>
        </ul>
        <li>Verifique se o Manifest está utilizando a versão mais atualizada (Manifest v3, se aplicável).</li>
    </ul>

   <h2>Testes e Validações</h2>
    <ul>
        <li>Testar a extensão em diferentes navegadores, resoluções de tela e com diferentes usuários.</li>
        <li>Verifique a compatibilidade e certifique-se de que não existem bugs ou problemas de compatibilidade em qualquer ambiente de uso.</li>
    </ul>
    <h2>Política de Privacidade</h2>
    <ul>
        <li>Prepare uma política de privacidade clara explicando o uso de dados coletados, como cookies e IPs, conforme os requisitos das lojas de extensão.</li>
    </ul>

   <h2>Documentação</h2>
    <ul>
        <li>Prepare uma documentação mínima para os usuários da extensão. A documentação deve explicar:</li>
        <ul>
            <li>Como a extensão funciona.</li>
            <li>Como utilizar a autenticação via Google.</li>
            <li>Outros recursos oferecidos pela extensão.</li>
        </ul>
    </ul>

   <h2>Publicação</h2>
    <h3>Chrome Web Store</h3>
    <ul>
        <li>Crie uma conta de desenvolvedor na Chrome Web Store.</li>
        <li>Pague a taxa única de US$5.</li>
        <li>Submeta a extensão seguindo o processo de envio da loja.</li>
    </ul>

  <h3>Firefox Add-ons (se aplicável)</h3>
    <ul>
        <li>Siga o processo de envio para a loja da Mozilla (Firefox Add-ons).</li>
        <li>Durante o envio, você precisará fornecer:</li>
        <ul>
            <li>Capturas de tela da extensão.</li>
            <li>Descrições detalhadas.</li>
            <li>Ícones para a listagem na loja.</li>
        </ul>
    </ul>

   <h2>Verificação e Aprovações</h2>
    <ul>
        <li>Após o envio, aguarde a verificação das lojas de extensões. Elas revisarão:</li>
        <ul>
            <li>Segurança.</li>
            <li>Conformidade com as políticas de privacidade e uso de dados.</li>
        </ul>
        <li>Se todas essas etapas estiverem concluídas, a extensão estará pronta para ser postada na loja de extensões.</li>
    </ul>
