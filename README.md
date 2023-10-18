# 🚀 Começando com Strapi

  Strapi vem com uma [Interface de Linha de Comando](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) que permite montar e gerenciar o projeto.

## `Tecnologias`

- Node v14.21
- JavaScript / Typescript
- Express
- [postgreSQL v10.23](https://www.postgresql.org/download/)

### `Clonar repositório`

  Abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  git clone https://github.com/aceleradora-TW/nossa-casa-cms.git
  ```
  ### `Instalar o Yarn`

  Caso não possua o yarn em sua maquína, abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  npm install -g yarn
  ```
  
 ### `Instalar as depêndencia`
 
 Para instalar as depêndencias, volte no terminal, e digite o seguinte comando:
 
  ```bash
  yarn install
  ```

##  Comandos do Strapi
### `develop`

Comece seu aplicativo Strapi com recarregamento automático ativado. [Saiba mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
yarn develop
```

### `start`

Comece seu aplicativo Strapi com recarregamento automático desativado. [Saiba mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
yarn start
```

### `build`

Crie o painel de admin. [Saiba mais](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
yarn build
```

## 🔧 Variáveis de Ambiente(.env)
```bash
  HOST=0.0.0.0
  PORT=1337
  APP_KEYS=#Defina uma Key
  API_TOKEN_SALT=#Defina um Token
  ADMIN_JWT_SECRET=#crie uma secret para admin
  TRANSFER_TOKEN_SALT=#Defina o token salt
  # Database
  DATABASE_CLIENT=# nome do banco de dados utilizado
  DATABASE_HOST=# endereço do host
  DATABASE_PORT=# porta do banco de dados, padrão do postgres: 5432
  DATABASE_NAME= nossa_casa
  DATABASE_USERNAME=# username do servidor
  DATABASE_PASSWORD=# senha do servidor
  DATABASE_SSL= false
  JWT_SECRET=# crie outra secret

```

# Strapi admin
Vá em `configurações > roles (user & permissions plugin) > public`.
Ative find e findOne para Event, Partner, Therapy, Workshop e para Gallery ative apenas find.


## 📚 Saiba Mais

- [Central de Recurso](https://strapi.io/resource-center) - central de recurso Strapi.
- [Strapi Documentação](https://docs.strapi.io) - Documentação Oficial Strapi.
- [Strapi Tutoriais](https://strapi.io/tutorials) - Lista de tutoriais montados pelo time principal e pela comunidade.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Encontre sobre atualizações do Strapi, novas funcionalidades e e melhorias gerais.


