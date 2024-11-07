# Lista de Compras

Projeto de uma aplicação de lista de compras, desenvolvida para gerenciar itens a serem comprados, incluindo autenticação de usuários e armazenamento de dados. Este aplicativo usa tecnologias modernas como Angular, json-server e Auth0 para fornecer uma experiência de usuário segura e eficiente.

## Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração e Execução](#configuração-e-execução)
- [Uso](#uso)
- [Licença](#licença)

## Descrição

A aplicação é uma lista de compras onde os usuários podem adicionar, editar, marcar como comprados e excluir itens da lista. Cada usuário possui seu próprio conjunto de itens, gerenciados com autenticação via Auth0, garantindo que apenas o usuário autenticado possa ver e modificar suas compras.

## Funcionalidades

- **Autenticação de Usuário**: Autenticação segura com Auth0.
- **Adicionar Itens**: Os usuários podem adicionar produtos à sua lista de compras com nome, quantidade e status.
- **Editar Itens**: Permite editar os detalhes dos produtos já cadastrados.
- **Excluir Itens**: Remover produtos da lista.
- **Marcar como Comprado**: Indicar quando um item foi comprado, alterando o status visual.

## Tecnologias Utilizadas

- **Angular**: Framework front-end para construção de SPAs.
- **Auth0**: Serviço de autenticação para login seguro dos usuários.
- **json-server**: API REST simulada para armazenamento e recuperação de dados dos produtos.
- **Font Awesome**: Biblioteca de ícones para melhorar a interface.

## Configuração e Execução

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/JhoncSilva/ListaDeCompras.git
   cd ListaDeCompras

2. **Instale as Dependências**
   ```bash
   npm install

3. **Configuração do json-server**
   
   Inicie o json-server com o seguinte comando:
   ```bash
   npx json-server --watch db.json

4. **Inicie o Servidor Angular**
   
   Após configurar o json-server, inicie o servidor de desenvolvimento do Angular:
   ```bash
   ng serve

5. **Configuração do Auth0**
- Cadastre-se no Auth0.
- Crie uma aplicação, obtenha suas credenciais e configure-as no projeto.
- Insira o domínio e o Client ID do Auth0 no código Angular para ativar a autenticação.

## Uso

1. **Autenticação**: Faça login com seu usuário do Auth0.
2. **Gerenciamento de Itens**: Use a interface para adicionar, editar, marcar como comprado ou remover itens da lista.
3. **Filtro Pessoal**: Cada usuário verá apenas os itens associados ao seu próprio ID.

## Estrutura do Projeto

- **/src/app/models**: Modelos de dados, como `Produto`.
- **/src/app/services**: Serviços que se comunicam com a API e gerenciam o CRUD dos itens.
- **/src/app/components**: Componentes como `ListComponent`, `AddItemComponent` e `ListItemComponent`, que formam a interface principal.

## Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).
