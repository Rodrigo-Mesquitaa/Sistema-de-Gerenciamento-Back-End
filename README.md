# Gerenciamento de Usuários
Este é um sistema de Gerenciamento de Usuários desenvolvido com .NET 8.0 no backend e React no frontend, usando o padrão de arquitetura Clean Architecture. O backend utiliza um banco de dados em memória (InMemory) e fornece uma API para operações CRUD (criar, ler, atualizar, deletar) de usuários, enquanto o frontend permite que os usuários interajam com a API para gerenciar informações de usuários.

# Pré-requisitos 
 Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- .NET SDK 8.0 (para o backend)
-  Node.js e npm (para o frontend)
-  React.js
-  Visual Studio 2022 ou Visual Studio Code (para editar o código).

# Tecnologias Utilizadas

## Backend
- .NET 8.0: Framework para construir a API.
- Arquitetura Clean Architecture: Padrão de arquitetura para manter o código organizado e modular.
- Banco de Dados InMemory: Para persistência temporária dos dados de usuários durante o desenvolvimento.
- Swagger: Para documentação e testes dos endpoints da API.

## Frontend
- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Axios: Biblioteca para fazer requisições HTTP à API.
- CSS: Para estilos e layout.


# Configuração do Backend (API com .NET 8.0)

1. Estrutura do Backend
O backend está organizado conforme a Clean Architecture, com os seguintes projetos:

- GerenciamentoUsuarioAPI: Projeto de interface, expondo os endpoints da API.
- GerenciamentoUsuarioApplication: Lida com as regras de negócios e serviços.
- GerenciamentoUsuarioDomain: Define as entidades principais e interfaces.
- GerenciamentoUsuarioInfrastructure: Implementa a persistência dos dados com um banco de dados em memória.

2. Configuração do Projeto
2.  Abra a solução GerenciamentoUsuario.sln no Visual Studio.
2.  No projeto GerenciamentoUsuarioAPI, certifique-se de que o CORS está configurado 
corretamente no arquivo Program.cs para permitir acesso ao frontend:

``builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// No app.UseCors:
app.UseCors("AllowAll");´´

3. Verifique que o Swagger está ativado para facilitar o teste dos endpoints no ambiente de desenvolvimento:

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

#  Executar o Backend

- Defina o projeto GerenciamentoUsuarioAPI como o projeto de inicialização no Visual Studio.
- Pressione F5 ou Ctrl+F5 para iniciar o backend.
- A API estará disponível em http://localhost:5000, e o Swagger estará 
  acessível em http://localhost:5000/swagger.

# Configuração do Frontend (React)

1. ## Estrutura do Frontend

O frontend é uma aplicação React que consome os endpoints do backend para realizar operações de CRUD de usuários. A estrutura do frontend está organizada da seguinte forma:

- gerenciamento-usuario-frontend/
- ├── src/
- │   ├── components/         # Componentes reutilizáveis, como UserForm e UserList
- │   ├── hooks/              # Hook personalizado para manipular o estado dos usuários
- │   ├── pages/              # Página principal do sistema de gerenciamento
- │   ├── services/           # Funções para fazer chamadas à API
- │   ├── styles/             # Arquivo de estilos globais
- │   ├── App.js              # Componente raiz da aplicação
- │   └── index.js            # Ponto de entrada principal do React
- └── .env                    # Arquivo de configuração para a URL da API

2. ## Configuração do Ambiente
Configurar o arquivo .env: Crie um arquivo .env na raiz do projeto frontend (gerenciamento-usuario-frontend) com a URL da API:

REACT_APP_API_URL=http://localhost:5000/api

## Instalar Dependências: 
No terminal, navegue até a pasta gerenciamento-usuario-frontend e execute:
`` npm install´´

3. ## Executar o Frontend
No terminal, ainda dentro da pasta gerenciamento-usuario-frontend, execute:

``npm start´´

O frontend será iniciado em http://localhost:3000, onde você poderá interagir com o sistema de gerenciamento de usuários.

# Funcionalidades
Com o backend e o frontend em execução, você pode acessar o sistema em http://localhost:3000 e utilizar as seguintes funcionalidades:

### Adicionar Usuário: 
- Preencha o formulário com nome, e-mail e telefone e clique em "Salvar" para adicionar um novo usuário.

### Editar Usuário: 
- Clique no botão "Editar" ao lado de um usuário na lista, faça as alterações e clique em "Salvar".

### Excluir Usuário: 
- Clique no botão "Excluir" para remover um usuário da lista.

### Listar Usuários: 
- A página carrega automaticamente a lista de usuários ao iniciar.

# Considerações Finais
Este projeto segue a arquitetura Clean Architecture, garantindo um código modular e de fácil manutenção. No ambiente de desenvolvimento, a configuração de CORS está aberta para facilitar a integração com o frontend. Em um ambiente de produção, recomenda-se restringir o CORS para aceitar apenas o domínio do frontend em produção.

Esse sistema é ideal para aprendizado e pode ser expandido com novas funcionalidades, como autenticação, paginação e uso de um banco de dados persistente em vez de InMemory.

# Melhorias 

- Autenticação e Autorização: Adicionar autenticação para limitar o acesso às funcionalidades de CRUD.
- Persistência com Banco de Dados Real: Migrar de um banco de dados em memória para um banco como SQL Server, MySQL ou PostgreSQL.
- Deploy: Considerar hospedar o backend em um serviço de nuvem como Azure ou AWS e o frontend em serviços como Vercel ou Netlify.