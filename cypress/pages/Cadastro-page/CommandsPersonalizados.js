
Cypress.Commands.add('typeUsername', (username) => {
  cy.get('[name="username"]').type(username);
});

Cypress.Commands.add('typePassword', (password) => {
  cy.get('[name="password"]').type(password);
});

Cypress.Commands.add('typeRepeatedPassword', (password) => {
  cy.get('[name="repeatedPassword"]').type(password);
});

Cypress.Commands.add('typeFirstName', (firstName) => {
  cy.get('[name="account.firstName"]').type(firstName);
});

Cypress.Commands.add('typeLastName', (lastName) => {
  cy.get('[name="account.lastName"]').type(lastName);
});

Cypress.Commands.add('typeEmail', (email) => {
  cy.get('[name="account.email"]').type(email);
});

Cypress.Commands.add('typePhone', (phone) => {
  cy.get('[name="account.phone"]').type(phone);
});

Cypress.Commands.add('typeAddress', (address) => {
  cy.get('[name="account.address1"]').type(address);
});

Cypress.Commands.add('typeCity', (city) => {
  cy.get('[name="account.city"]').type(city);
});

Cypress.Commands.add('typeState', (state) => {
  cy.get('[name="account.state"]').type(state);
});

Cypress.Commands.add('typeZip', (zip) => {
  cy.get('[name="account.zip"]').type(zip);
});

Cypress.Commands.add('typeCountry', (country) => {
  cy.get('[name="account.country"]').type(country);
});

Cypress.Commands.add('clickRegister', () => {
  cy.get('[name="newAccount"]').click();
});

Cypress.Commands.add('loginAccount', (password) => {
  cy.get('a[href$="signonForm="]').click();
  cy.get('[name="password"]').clear().type(password);
  cy.get('input[name="signon"]').click();
  cy.get('a[href$="editAccountForm="]').click();
});
