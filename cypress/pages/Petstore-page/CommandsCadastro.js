// cypress/pages/Petstore-page/CommandsCadastro.js

Cypress.Commands.add('typePetstoreUsername', (username) => {
  cy.get('[name="username"]').type(username);
});

Cypress.Commands.add('typePetstorePassword', (password) => {
  cy.get('[name="password"]').type(password);
});

Cypress.Commands.add('typePetstoreRepeatedPassword', (password) => {
  cy.get('[name="repeatedPassword"]').type(password);
});

Cypress.Commands.add('typePetstoreFirstName', (firstName) => {
  cy.get('[name="account.firstName"]').type(firstName);
});

Cypress.Commands.add('typePetstoreLastName', (lastName) => {
  cy.get('[name="account.lastName"]').type(lastName);
});

Cypress.Commands.add('typePetstoreEmail', (email) => {
  cy.get('[name="account.email"]').type(email);
});

Cypress.Commands.add('typePetstorePhone', (phone) => {
  cy.get('[name="account.phone"]').type(phone);
});

Cypress.Commands.add('typePetstoreAddress1', (address) => {
  cy.get('[name="account.address1"]').type(address);
});

Cypress.Commands.add('typePetstoreCity', (city) => {
  cy.get('[name="account.city"]').type(city);
});

Cypress.Commands.add('typePetstoreState', (state) => {
  cy.get('[name="account.state"]').type(state);
});

Cypress.Commands.add('typePetstoreZip', (zip) => {
  cy.get('[name="account.zip"]').type(zip);
});

Cypress.Commands.add('typePetstoreCountry', (country) => {
  cy.get('[name="account.country"]').type(country);
});

Cypress.Commands.add('clickPetstoreSaveAccount', () => {
  cy.get('[name="newAccount"]').click();
});

// Comandos para o fluxo Pós-Cadastro (Login e Verificação)
Cypress.Commands.add('clickPetstoreSignInLink', () => {
  cy.get('a[href$="signonForm="]').click();
});

Cypress.Commands.add('typePetstoreLoginPassword', (password) => {
  cy.get('[name="password"]').clear().type(password);
});

Cypress.Commands.add('clickPetstoreSignOnButton', () => {
  cy.get('input[name="signon"]').click();
});

Cypress.Commands.add('clickPetstoreEditAccountLink', () => {
  cy.get('a[href$="editAccountForm="]').click();
});