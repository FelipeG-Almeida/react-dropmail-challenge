<h1 align="center" id="title">DropMail.me Challenge</h1>

<p align="center"><img src="https://socialify.git.ci/FelipeG-Almeida/react-dropmail-challenge/image?font=Bitter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Plus&amp;theme=Light" alt="project-image"></p>

<p id="description">Sites e serviços online geralmente exigem um endereço de e-mail válido para registrar acessar ou receber conteúdo protegido etc. No entanto o problema é que alguns desses sites podem usar nossos endereços de e-mail para enviar mensagens indesejadas. As pessoas não querem se preocupar mais com spam propagandas no email hackers e ataques de robôs. Uma boa maneira de lidar com isso é usar um endereço de e-mail temporário se você não tiver certeza de que este site é absolutamente confiável e confiável. Dessa forma você pode manter seus e-mails longe de spam e proteger sua privacidade. Este projeto consistem em uma aplicação que consome uma API de email temporário para que os usuários possam utilizar serviços sem expor seu email real.</p>

<p align="center"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="shields"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" alt="shields"><img src="https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&amp;logo=bulma&amp;logoColor=white" alt="shields"></p>

<h2>🚀 Demo</h2>

[https://felipeg-almeida.github.io/react-dropmail-challenge/](https://felipeg-almeida.github.io/react-dropmail-challenge/)

<H2>Tela Desktop 🖥️</H2>

![tela 1](https://github.com/FelipeG-Almeida/react-dropmail-challenge/assets/73674044/a060eed6-2825-4c2a-a39f-fe4b7e85bd2d)

![tela 2](https://github.com/FelipeG-Almeida/react-dropmail-challenge/assets/73674044/420fb59a-3f41-4ef5-bae8-86c7ade79b9e)

<h2>Tela Mobile 📱</h2>

<p align="center">
  <kbd>
    <img width="50%" src="https://github.com/FelipeG-Almeida/react-dropmail-challenge/assets/73674044/a9a9cad7-2f0e-424a-ae4e-b56daefd0490" />
  </kbd>
</p>

  
<h2>🧐 Funcionalidades</h2>

Algumas funcionalidades do projeto são:

*   Gerar um endereço de email temporário;
*   Copiar o endereço de email gerado;
*   Visualizar a caixa de entrada deste email;
*   Para capturar a chegada de novos emails a caixa de mensagens é atualizada a cada 15 segundos;
*   Os dados de acesso ao email são salvos no localstorage para que a conta não seja perdida ao atualizar a página. Caso o email tenha expirado o registro é removido do storage.

<h2>🛠️ Passos de Instalação:</h2>

<p>1. Certifique-se de que você tenha o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em sua máquina. Você pode fazer o download e instalá-los em https://nodejs.org/.</p>

<p>2. Clone o repositório do GitHub</p>

```
git clone https://github.com/FelipeG-Almeida/react-dropmail-challenge.git
```

<p>3. Após clonar o repositório você deve entrar no diretório do projeto:</p>

```
cd react-dropmail-challenge
```

<p>4. Instale as dependências do projeto listadas no arquivo package.json usando o npm. Isso baixará e instalará todas as dependências necessárias:</p>

```
npm install
```

<p>5. Agora que todas as dependências estão instaladas você pode executar os scripts definidos no package.json. Por exemplo para iniciar o projeto em modo de desenvolvimento você pode usar o seguinte comando:</p>

```
npm run dev
```

  
  
<h2>💻 Tecnologias usadas</h2>

Tecnologias usadas no projeto:

*   API Dropmail: https://dropmail.me/api/
*   React
*   Framework CSS Bulma: https://bulma.io/

<h2>API</h2>

Para obter os dados, utilizei a API do DropMail. A comunicação é realizada utilizando [GraphQL](https://graphql.org/), enviando todas as requisições para o endereço https://dropmail.me/api/graphql/MY_TOKEN (HTTP) ou wss://dropmail.me/api/graphql/${AUTH_TOKEN}/websocket (WebSocket).

Conforme explicado na documentação, você pode usar qualquer string única de 8 caracteres ou mais como ${MY_TOKEN}.

> Nota: tive alguns problemas de cors durante o desenvolvimento utilizando a API, por isso fiz uso do proxy [CorsProxy IO](https://corsproxy.io/)

>  This is a challenge by [Coodesh](https://coodesh.com/)


---
