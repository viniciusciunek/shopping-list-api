# API de Lista de Compras (Shopping List API)

## 👤 Identificação/Autor

- **Nome:** Vinicius G. Ciunek

## 📝 Descrição do Projeto

Esta é uma API RESTful para gerenciamento de listas de compras, desenvolvida como projeto final para a disciplina de Tópicos Especiais. A aplicação permite que usuários se cadastrem, façam login e gerenciem múltiplas listas de compras, adicionando, atualizando e removendo itens de cada uma.

A API foi construída utilizando o framework **NestJS** e integra um banco de dados relacional **PostgreSQL** através do ORM **Prisma**. A segurança é garantida por meio de autenticação baseada em tokens **JWT (JSON Web Tokens)** e autorização por papéis (Roles).

## 🚀 Link para a API em Produção

A API está disponível publicamente no seguinte endereço:

- **URL da API:** `https://shopping-list-api-ri2m.onrender.com/v1/`

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

## 📚 Documentação Swagger

A documentação completa e interativa dos endpoints da API, gerada com Swagger (OpenAPI), está disponível em:

- **Localmente:** Após iniciar a aplicação, acesse `http://localhost:3000/api`
- **Em Produção:** `https://shopping-list-api-ri2m.onrender.com/api`

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Projetar e desenvolver uma API funcional utilizando o framework NestJS.

- [x] **ID1:** O aluno configurou corretamente o ambiente de desenvolvimento e criou a API utilizando NestJS, com rotas e controladores que seguem a arquitetura modular.
  - _Status: Concluído. Já existem múltiplos módulos (`Auth`, `ShoppingLists`, `ListItems`), cada um com seus próprios controladores e rotas._
- [x] **ID2:** O aluno aplicou boas práticas de organização da lógica de negócios, garantindo que os services contenham a lógica de negócio e sejam chamados pelos controladores, separando responsabilidades corretamente.
  - _Status: Concluído. A lógica de negócio (acesso ao banco, validações de permissão) está isolada nos serviços, enquanto os controladores apenas gerenciam as requisições HTTP._
- [x] **ID3:** O aluno utilizou providers e configurou adequadamente a injeção de dependência no NestJS, garantindo uma arquitetura modular e escalável.
  - _Status: Concluído. Vários `providers` (serviços) foram criados e injetados corretamente nos construtores, seguindo o padrão do NestJS._
- [x] **ID4:** O aluno demonstrou a habilidade de criar e manipular rotas HTTP, manipulando parâmetros de rota, query e body, lidando corretamente com requisições e respostas.
  - _Status: Concluído. Foram utilizados os decorators `@Body()`, `@Param()` e `@Request()` para manipular diferentes partes da requisição HTTP._
- [x] **ID5:** O aluno aplicou boas práticas de tratamento de erros, utilizando filtros globais e personalizando as mensagens de erro para garantir respostas claras e consistentes.
  - _Status: Concluído. As exceções padrão do NestJS (`NotFoundException`, `ForbiddenException`, etc.) estão sendo usadas para retornar códigos de erro e mensagens apropriadas._
- [x] **ID6:** O aluno criou classes DTO (Data Transfer Objects) para garantir a validação e consistência dos dados em diferentes endpoints, utilizando pipes para validar entradas de dados.
  - _Status: Concluído. Os DTOs foram criados como `class` e estão prontos para serem usados com o `ValidationPipe`._
- [x] **ID7:** O aluno aplicou corretamente pipes de validação no NestJS, verificando entradas inválidas e assegurando a integridade dos dados transmitidos.
  - _Status: Concluído. O `ParseIntPipe` foi utilizado para parâmetros de rota e os DTOs foram preparados para o `ValidationPipe`._

### RA2 - Implementar persistência de dados com um banco de dados relacional utilizando Prisma ou TypeORM.

- [x] **ID8:** O aluno modelou corretamente os dados da aplicação, definindo entidades, suas relações e campos necessários, refletidos em um Diagrama de Entidade-Relacionamento (ERD).
  - _Status: Concluído. O `schema.prisma` está completo, com relações definidas, e o código DBML para o ERD foi gerado._
- [x] **ID9:** O aluno configurou e conectou la API a um banco de dados relacional (PostgreSQL, MySQL, etc.) utilizando Prisma ou TypeORM.
  - _Status: Concluído. A conexão com o PostgreSQL via Docker está funcional, gerenciada pelo `PrismaService` e configurada no `.env`._
- [x] **ID10:** O aluno criou e aplicou migrações de banco de dados para garantir a consistência dos dados entre desenvolvimento e produção.
  - _Status: Concluído. O comando `npx prisma migrate dev` foi utilizado para criar e atualizar o banco de dados de forma incremental._
- [x] **ID11:** O aluno implementou corretamente as operações CRUD (Create, Read, Update, Delete) para pelo menos uma entidade no projeto, utilizando NestJS.
  - _Status: Concluído. O CRUD completo foi implementado para `ShoppingList` e `ListItems`._

### RA4 - Gerar a documentação da API e realizar o deploy em um ambiente de produção.

- [x] **ID14:** O aluno integrou corretamente o Swagger à API, gerando a documentação completa e interativa dos endpoints, parâmetros e respostas da API, com exemplos de requisições e respostas.
  - _Status: Concluído. A documentação foi gerada com Swagger, está acessível via /api, e os DTOs e endpoints estão devidamente documentados._
- [x] **ID15:** O aluno realizou o deploy da API em uma plataforma de hospedagem na nuvem (ex.: Render.com, Heroku, Vercel, etc.), garantindo que a API estivesse acessível publicamente.
  - _Status: Concluído. A API foi publicada com sucesso na plataforma Render.com e está acessível publicamente._
- [x] **ID16:** O aluno garantiu que a API funcionasse corretamente no ambiente de produção, incluindo a documentação Swagger e o banco de dados.
  - _Status: Concluído. A API, o banco de dados e a documentação Swagger foram testados e estão funcionando corretamente no ambiente de produção._
- [x] **ID17:** O aluno realizou a configuração correta de variáveis de ambiente usando o ConfigModule do NestJS.
  - _Status: Concluído. O `ConfigModule` foi implementado para carregar as variáveis de ambiente de forma segura e padronizada._
- [x] **ID18:** O aluno implementou corretamente o versionamento de APIs REST no NestJS, assegurando que diferentes versões da API pudessem coexistir.
  - _Status: Concluído. A API foi configurada para usar versionamento via URI, com todas as rotas sob o prefixo `/v1`._

### RA5 - Implementar autenticação, autorização e segurança em APIs utilizando JWT, Guards, Middleware e Interceptadores.

- [x] **ID19:** O aluno configurou a autenticação na API utilizando JWT (JSON Web Tokens).
  - _Status: Concluído. O fluxo completo de login (`signin`) e proteção de rotas com `AuthGuard` está funcional._
- [x] **ID20:** O aluno implementou controle de acesso baseado em roles e níveis de permissão, utilizando Guards para verificar permissões em rotas específicas.
  - _Status: Concluído. O controle de permissão baseado em **posse** (usuário só acessa seus próprios dados) e por **nível de acesso** (rota exclusiva para `ADMIN` com `AdminGuard`) foi totalmente implementado._
- [x] **ID21:** O aluno configurou e utilizou middleware para manipular requisições antes que elas chegassem aos controladores, realizando tarefas como autenticação, logging ou tratamento de CORS.
  - _Status: Concluído. Um `LoggerMiddleware` global foi implementado para registrar todas as requisições recebidas pela API._
- [x] **ID22:** O aluno implementou interceptadores para realizar logging ou modificar as respostas antes de enviá-las ao cliente.
  - _Status: Concluído. Um `ResponseInterceptor` global foi implementado para padronizar o formato de todas as respostas de sucesso da API._
