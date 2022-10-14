# rivi-frontend-js

## Instalação

Instalando o NVM:

```sh
# instala de nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Instalando o node 16:

```sh
# instala node 16
nvm install 16
```

Instalando o yarn:

```sh
#instala o yarn
npm i -g yarn
```

Instalando dependências de projeto:

```sh
yarn
```

Iniciando o servidor de desenvolvimento:

```sh
yarn dev
# ou
npm run dev
```

Entre em [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

Links úteis:

- [Aprenda Next.js](https://nextjs.org/learn/foundations/about-nextjs) - Tutorial interativo
- [Next.js Documentação](https://nextjs.org/docs) - Next.js features e API
- [Exemplos](https://github.com/vercel/next.js/tree/deprecated-main/examples) - Exemplos de projetos e dependências

<br/>

## O Primeiro Commit

Iniciando o projeto, é importante notar que foram aplicadas regras de

- Prettier
- Eslint
- Typescript
- Commit

e não será possível realizar um commit bem sucedido caso o código adicionado fuja dos padrões especificados nas regras.

### **1. Prettier**

O Prettier é uma ferramenta de formatação de código que padroniza coisas como identação, espaçamento, etc.
As configurações do Prettier já estão definidas no projeto, porém é preciso adicioná-lo em seu editor de prefêrencia.

Caso esteja usando o VSCode, basta abrir o painel de _Extenções_ (`Ctrl + Shift + X`), pesquisar por "Prettier" e instalar.

Códigos que fojem dos padrões de formatação do Prettier serão rejeitados automaticamente.

### **2. Eslint**

O Eslint é uma ferramenta de padronização de código, e abre a possíbilidade de padronizar coisas como definições de variáveis, declarações de funções, etc. As configurações do Eslint já estão definidas no projeto, porém é preciso adicioná-lo em seu editor de prefêrencia.

Caso esteja usando o VSCode, basta abrir o painel de _Extenções_ (`Ctrl + Shift + X`), pesquisar por "Eslint" e instalar.

Códigos que fojem dos padrões de formatação do Eslint serão rejeitados automaticamente.

### **3. Typescript**

O Typescript é um superset para a linguagem Javascript, que trouxe como principal inovação a possíbilidade de tipar funções e variáveis. Hoje o Typescript é amplamente utilizado na industria, pelo seu poder de padronização, escalabilidade e prevenção de erros em buildtime.

### **4. Conventional Commits**

O Conventional Commits é um padrão de commit vastamente utilizado na industria, inicialmente concebido pelo Google Angular, [veja mais sobre aqui!](https://www.conventionalcommits.org/en/v1.0.0/)

Nesse projeto, existem ferramentas para facilitar os commits de acordo com as regras estipuladas, basta escrever:

```sh
yarn commit
```

e um menu irá guiar o usuário para realizar o commit da maneira adequada.

É importante notar que o processo de commit também pode ser feito normalmente da maneira tradicional.

Commits que forem dos padrões de commit do Conventional Commits serão rejeitados automaticamente.

## DEPLOY NA URL DE PRODUÇÃO

Para acontecer o deploy na url disponibilizada para o cliente, devemos fazer o seguinte:

- Clonar o projeto e dar um pull na main

- Adicionar um novo remote a configuração do git:

```
git remote add github https://github.com/ages-rivi/rivi-frontend-js.git
```

- Enviar as mudanças para o repositório do github:

```
git push github
```

- Vai ser requisitado o login, estão disponíveis no discord do grupo
