
# Projeto UniversoDown

Projeto UniversonDown que inclui uma API em Node.js com MySQL para o backend e um frontend em Vue.js com Bootstrap.

## Instalação

### Pré-requisitos

- Node.js (v18.20.3 ou superior)
- MySQL
- Vue CLI

### Passos para Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/TechnoDark-ti/PROJETO-UNIVERSO_DOWN.git
   cd projeto-universo-down
   ```

2. **Instale as dependências do backend:**

   ```bash
   cd pac_backend
   npm install
   ```

3. **Configuração do Banco de Dados:**

   - Importe o banco de dados MySQL chamado `UniversoDown` no diretorio '/bd'.
   - Execute os scripts SQL fornecidos em `pac_backend/database-scripts` para criar as tabelas e dados iniciais.

4. **Configuração do Backend:**

   - Configure as variáveis de ambiente necessárias no arquivo `.env`, baseando-se no exemplo fornecido `.env.example`.
   - Inicie o servidor Node.js:

     ```bash
     npm start
     ```

5. **Instale as dependências do frontend:**

   ```bash
   cd pac_frontend
   npm install
   ```

6. **Configuração do Frontend:**

   - Configure as URLs da API no arquivo de configuração do Vue (`src/config/index.js`).
   - Inicie o servidor de desenvolvimento do Vue.js:

     ```bash
     npm run serve
     ```

## Estrutura do Projeto

### Backend (pac_backend)

- **`app.js`**: Arquivo principal do servidor Node.js.
- **`routes/`**: Contém os arquivos de rotas da API.
- **`models/`**: Define os modelos de dados usando Sequelize.
- **`controllers/`**: Controladores que lidam com as requisições da API.
- **`database-scripts/`**: Scripts SQL para criação do banco de dados e tabelas.

### Frontend (pac_frontend)

- **`src/`**: Contém todos os arquivos fonte do frontend.
  - **`assets/`**: Recursos estáticos como imagens e estilos.
  - **`components/`**: Componentes Vue.js reutilizáveis.
  - **`views/`**: Componentes de visualização principais da aplicação.
  - **`services/`**: Serviços para fazer requisições à API.
  - **`config/`**: Configurações do projeto, como URLs da API.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express.js, Sequelize ORM, MySQL.
- **Frontend**: Vue.js, Vue Router, Bootstrap, Axios.


## Autores: