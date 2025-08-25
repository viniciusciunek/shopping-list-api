# API de Lista de Compras (Shopping List API)

## 👤 Identificação/Autor

- **Nome:** Vinicius G. Ciunek

## 📝 Descrição do Projeto

Esta é uma API RESTful para gerenciamento de listas de compras, desenvolvida como projeto final para a disciplina de Tópicos Especiais. A aplicação permite que usuários se cadastrem, façam login e gerenciem múltiplas listas de compras, adicionando, atualizando e removendo itens de cada uma.

A API foi construída utilizando o framework **NestJS** e integra um banco de dados relacional **PostgreSQL** através do ORM **Prisma**. A segurança é garantida por meio de autenticação baseada em tokens **JWT (JSON Web Tokens)** e autorização por papéis (Roles).

## 🚀 Link para a API em Produção

A API está disponível publicamente no seguinte endereço:

- **URL da API:** `work in progress...`

## 🛠️ Instruções de Execução

Siga os passos abaixo para configurar e executar a aplicação localmente.

### Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/products/docker-desktop/) e Docker Compose
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) (para melhor teste da API)

### Instalação

1.  Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/viniciusciunek/shopping-list-api
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd shopping-list-api
    ```
3.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Configuração do Banco de Dados

O banco de dados PostgreSQL é gerenciado via Docker Compose para facilitar a configuração do ambiente.

1.  Com o Docker em execução, inicie o container do banco de dados:
    ```bash
    docker-compose up -d --build
    ```
2.  Após iniciar o container, execute as migrações do Prisma para criar o banco de dados e as tabelas:
    ```bash
    npx prisma migrate dev
    ```

### Variáveis de Ambiente

Para que a aplicação funcione, você precisa configurar as variáveis de ambiente.

1.  Crie um arquivo chamado `.env` na raiz do projeto.
2.  Copie o conteúdo do arquivo `.env.example` e cole no novo arquivo `.env`.

**Conteúdo do `.env.example`:**

```env
# Configuração do Banco de Dados
# Garanta que o usuário, senha e nome do banco são os mesmos do seu docker-compose.yml
DATABASE_URL="postgresql://dev:dev@localhost:5432/shopping_list?schema=public"

# Segredo para a geração dos tokens JWT
JWT_SECRET="seu_segredo_super_secreto_aqui"
```

### Execução

Com o banco de dados rodando e as variáveis de ambiente configuradas, você pode iniciar a aplicação.

- **Para rodar em modo de desenvolvimento (com hot-reload):**
  ```bash
  npm run start:dev
  ```
- **Para rodar em modo de produção:**
  `bash
    npm run build
    npm run start
    `
  A API estará disponível em `http://localhost:3000`.

## 📈 Diagrama de Entidade-Relacionamento (ERD)

O diagrama abaixo representa a estrutura e os relacionamentos entre as entidades do banco de dados.

**( Pode haver alterações, última atualização 24/08/2025)**

[Diagrama ERD](https://dbdiagram.io/d/shopping-list-api-68aba7ff1e7a6119675fa9e2)

<iframe width="560" height="315" src='https://dbdiagram.io/e/68aba7ff1e7a6119675fa9e2/68aba82e1e7a6119675faceb'> </iframe>


## 📚 Documentação Swagger

A documentação completa e interativa dos endpoints da API, gerada com Swagger (OpenAPI), está disponível em:

- **URL da Documentação:** Após iniciar a aplicação, acesse `work in progress...`

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Projetar e desenvolver uma API funcional utilizando o framework NestJS.

- [ ] **ID1:** O aluno configurou corretamente o ambiente de desenvolvimento e criou a API utilizando NestJS, com rotas e controladores que seguem a arquitetura modular.
- [ ] **ID2:** O aluno aplicou boas práticas de organização da lógica de negócios, garantindo que os services contenham a lógica de negócio e sejam chamados pelos controladores, separando responsabilidades corretamente.
- [ ] **ID3:** O aluno utilizou providers e configurou adequadamente a injeção de dependência no NestJS, garantindo uma arquitetura modular e escalável.
- [ ] **ID4:** O aluno demonstrou a habilidade de criar e manipular rotas HTTP, manipulando parâmetros de rota, query e body, lidando corretamente com requisições e respostas.
- [ ] **ID5:** O aluno aplicou boas práticas de tratamento de erros, utilizando filtros globais e personalizando as mensagens de erro para garantir respostas claras e consistentes.
- [ ] **ID6:** O aluno criou classes DTO (Data Transfer Objects) para garantir a validação e consistência dos dados em diferentes endpoints, utilizando pipes para validar entradas de dados.
- [ ] **ID7:** O aluno aplicou corretamente pipes de validação no NestJS, verificando entradas inválidas e assegurando a integridade dos dados transmitidos.

### RA2 - Implementar persistência de dados com um banco de dados relacional utilizando Prisma ou TypeORM.

- [ ] **ID8:** O aluno modelou corretamente os dados da aplicação, definindo entidades, suas relações e campos necessários, refletidos em um Diagrama de Entidade-Relacionamento (ERD).
- [ ] **ID9:** O aluno configurou e conectou a API a um banco de dados relacional (PostgreSQL, MySQL, etc.) utilizando Prisma ou TypeORM.
- [ ] **ID10:** O aluno criou e aplicou migrações de banco de dados para garantir a consistência dos dados entre desenvolvimento e produção.
- [ ] **ID11:** O aluno implementou corretamente as operações CRUD (Create, Read, Update, Delete) para pelo menos uma entidade no projeto, utilizando NestJS.

### RA3 - Realizar testes automatizados para garantir a qualidade da API.

- [ ] **ID12:** O aluno implementou testes automatizados (unitários ou de integração) utilizando Jest, validando funcionalidades críticas da API.
- [ ] **ID13:** O aluno garantiu a cobertura de testes para, pelo menos, as principais rotas e serviços da API, incluindo operações CRUD.

### RA4 - Gerar a documentação da API e realizar o deploy em um ambiente de produção.

- [ ] **ID14:** O aluno integrou corretamente o Swagger à API, gerando a documentação completa e interativa dos endpoints, parâmetros e respostas da API, com exemplos de requisições e respostas.
- [ ] **ID15:** O aluno realizou o deploy da API em uma plataforma de hospedagem na nuvem (ex.: Render.com, Heroku, Vercel, etc.), garantindo que a API estivesse acessível publicamente.
- [ ] **ID16:** O aluno garantiu que a API funcionasse corretamente no ambiente de produção, incluindo a documentação Swagger e o banco de dados.
- [ ] **ID17:** O aluno realizou a configuração correta de variáveis de ambiente usando o ConfigModule do NestJS.
- [ ] **ID18:** O aluno implementou corretamente o versionamento de APIs REST no NestJS, assegurando que diferentes versões da API pudessem coexistir.

### RA5 - Implementar autenticação, autorização e segurança em APIs utilizando JWT, Guards, Middleware e Interceptadores.

- [ ] **ID19:** O aluno configurou a autenticação na API utilizando JWT (JSON Web Tokens).
- [ ] **ID20:** O aluno implementou controle de acesso baseado em roles e níveis de permissão, utilizando Guards para verificar permissões em rotas específicas.
- [ ] **ID21:** O aluno configurou e utilizou middleware para manipular requisições antes que elas chegassem aos controladores, realizando tarefas como autenticação, logging ou tratamento de CORS.
- [ ] **ID22:** O aluno implementou interceptadores para realizar logging ou modificar as respostas antes de enviá-las ao cliente.
