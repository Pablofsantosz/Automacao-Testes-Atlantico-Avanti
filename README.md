# Automação de Testes - Bootcamp Atlântico Avanti

![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg?logo=cypress)

Este repositório contém o projeto de automação de testes desenvolvido para o Bootcamp Atlântico Avanti de Quality Assurance.

O objetivo foi aplicar os conceitos de automação de testes E2E (End-to-End) utilizando Cypress para validar os principais fluxos de um e-commerce de demonstração.

## Equipe 7 - Caçadores do Bug Perdido

* Anezia Beatriz Antas Pereira de Lima
* José Ben Hur Nascimento de Oliveira
* Pablo Felipe dos Santos

## Aplicação Alvo

* **JPetStore Demo (Plano B)**
* **URL:** `https://petstore.octoperf.com/actions/Catalog.action`

A aplicação inicial para os testes manuais (`nopCommerce`) foi substituída no escopo de automação, pois ela possuía mecanismos de bloqueio (como CAPTCHA) que impediam a execução dos scripts. O JPetStore foi selecionado por ter fluxos de e-commerce similares e permitir a automação.

## Tecnologias e Boas Práticas

* **Framework:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript (com Node.js)
* **Geração de Dados:** [Faker.js](https://fakerjs.dev/) para criar dados dinâmicos (usuários, senhas, e-mails) a cada execução de teste.
* **Page Objects:** O projeto utiliza **Comandos Customizados** do Cypress (armazenados em `cypress/pages`) para abstrair as ações e seletores, seguindo os princípios do Page Object Model (POM) para facilitar a manutenção.

## Escopo dos Testes Automatizados

Foram automatizados 2 cenários de teste principais, cobrindo os fluxos de cadastro e de compra.

### 1. Cenário: Cadastro de Usuário (`spec.cy.js`)

* **CTT01: Cadastrar com e-mail inválido**
    * Valida se o sistema identifica um formato de e-mail incorreto.
* **CTT02: Cadastrar com "first name" inválido**
    * Valida a restrição de caracteres especiais no nome.
* **CTT03: Cadastrar com todos os campos válidos**
    * Testa o "caminho feliz" do cadastro, realizando o login em seguida para confirmar a criação da conta.

### 2. Cenário: Fluxo do Carrinho (`carrinhoAdd.cy.js`)

* **CT003: Remover produtos do carrinho**
    * Adiciona um item, navega até o carrinho, remove o item e valida se o carrinho fica vazio.
* **CT004: Verificar o carrinho após o login**
    * Cria um usuário, adiciona um item ao carrinho como "convidado", faz o login com o usuário criado e valida se o item permanece no carrinho (persistência de sessão).
* **CT005: Fazer check-out**
    * Cria um usuário, adiciona um item, navega até o carrinho e inicia o processo de checkout, validando o redirecionamento para a página de pagamento.

## Como Executar o Projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
* [Git](https://git-scm.com/downloads)

### Passos para Execução

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/Pablofsantosz/Automacao-Testes-Atlantico-Avanti.git](https://github.com/Pablofsantosz/Automacao-Testes-Atlantico-Avanti.git)
    ```

2.  **Acessar a pasta do projeto:**
    ```bash
    cd Automacao-Testes-Atlantico-Avanti
    ```

3.  **Instalar as dependências do Node.js (incluindo o Cypress):**
    ```bash
    npm install
    ```

4.  **Executar os testes (Modo Interativo - UI):**
    * Este comando abre a interface gráfica do Cypress para você ver e selecionar os testes.
    ```bash
    npx cypress open
    ```

5.  **Executar os testes (Modo Headless - Terminal):**
    * Este comando roda todos os testes diretamente no terminal (ótimo para integração contínua).
    ```bash
    npx cypress run
    ```
