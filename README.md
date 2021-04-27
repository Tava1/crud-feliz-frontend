# Um CRUD Muito feliz :atom_symbol:
## Acesse e confira o repositório [back-end](https://github.com/Tava1/crud-feliz-backend)
[https://github.com/Tava1/crud-feliz-backend](https://github.com/Tava1/crud-feliz-backend)

## Visite o site :link: (EM BREVE)

A aplicação pode ser visitada a qualquer momento pelo link: [https://crud-feliz-frontend.vercel.app/](https://crud-feliz-frontend.vercel.app/)

Publicação realizada pelo [Vercel](https://vercel.com/).

## Sobre o projeto
Este projeto trata-se de um front-end ```React``` gerado a partir de um boilerplate ```Next.js``` contruído em ```TypeScript```.

Para elaborar os estilos utilizei ```Styled-components```. No componente ```Button``` utilizei uma das funcionalidades mais legais do Styled-components que é a criação de variáveis que permite criar variações de um mesmo componente.

Para obter melhor performance nos formulários utilizei ```react-hook-form``` e o ```Yup``` para realizar as validações e retornar o feedback em tela para o usuário, caso ele preencha algum campo de forma inesperada.

O papel mais importante de se concetar com a API e providenciar as requisições fica com o ```axios```.

### Tecnologias utilizadas
- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- React hook form
- React icons
- Yup
- Axios

### Protótipos (Mockups)
Visite o [projeto no Figma](https://www.figma.com/file/CXqPSdVHdIUefjw7cnRafn/Um-pequeno-CRUD?node-id=0%3A1) para conferir o protótipo.

## Vamos começar? :smiley:
### Instalação do projeto

Após clonar o projeto do [repositório Github](https://github.com/Tava1/crud-feliz-frontend), navegue até a raiz e execute o seguinte comando no terminal:

Este comando irá instalar todas as dependências necessárias do projeto.
```BASH
yarn
```

Após a instalação das depências, podemos utilizar alguns comando disponíveis.

### :construction: Ambiente de desenvolvimento
Executar o projeto em ambiente local de desenvolvimento.
```BASH
yarn dev
```

### :wrench: Build do projeto
Para realizar o build do projeto.
```BASH
yarn build
```

## Estrutura de diretórios do projeto

### src
Este diretório armazena todo o código desenvolvido ou seja, lógica da aplicação, componentes, páginas, rotas, serviços e etc.

### components/elements
Contém apenas componentes estáticos, poder ser utilizado pelos ```components/mudules``` ou até mesmo por ```/pages```.

### components/modules
Contém componentes mais robustos, aqueles que podem conter lógica e/ou receber ```props```.

### pages
Armazena as páginas/rotas da apalicação.

### services
Armazena a conexão com a API.

### styles
Arquivos de estilos globais e também estilos das páginas são armazenados aqui.
