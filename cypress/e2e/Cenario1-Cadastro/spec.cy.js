import { faker } from '@faker-js/faker';

describe('Cenário 2 - Cadastro', () => {

  it('CTT01: Cadastrar com e-mail inválido', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?newAccountForm=');
    var pws = faker.internet.password(8);
    var username = faker.internet.username();

    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(pws);
    cy.get('[name="repeatedPassword"]').type(pws);
    cy.get('[name="account.firstName"]').type(faker.person.firstName());
    cy.get('[name="account.lastName"]').type(faker.person.lastName());
    cy.get('[name="account.email"]').type('emailinvalido'); 
    cy.get('[name="account.phone"]').type(faker.phone.number('##########'));
    cy.get('[name="account.address1"]').type(faker.location.streetAddress());
    cy.get('[name="account.city"]').type(faker.location.city());
    cy.get('[name="account.state"]').type(faker.location.state());
    cy.get('[name="account.zip"]').type(faker.location.zipCode());
    cy.get('[name="account.country"]').type(faker.location.country());
    cy.get('[name="newAccount"]').click();
    cy.get('a[href$="signonForm="]').click();
    cy.get('[name="password"]').clear().type(pws);
    cy.get('input[name="signon"]').click();
    cy.get('a[href$="editAccountForm="]').click();

    
    
  });

  it('CTT02: Cadastrar com first name inválido', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?newAccountForm=');
    var pws = faker.internet.password(8);
    var username = faker.internet.username();

    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(pws);
    cy.get('[name="repeatedPassword"]').type(pws);
    cy.get('[name="account.firstName"]').type('@@@');
    cy.get('[name="account.lastName"]').type(faker.person.lastName());
    cy.get('[name="account.email"]').type(faker.internet.email());
    cy.get('[name="account.phone"]').type(faker.phone.number('##########'));
    cy.get('[name="account.address1"]').type(faker.location.streetAddress());
    cy.get('[name="account.city"]').type(faker.location.city());
    cy.get('[name="account.state"]').type(faker.location.state());
    cy.get('[name="account.zip"]').type(faker.location.zipCode());
    cy.get('[name="account.country"]').type(faker.location.country());
    cy.get('[name="newAccount"]').click();
    cy.get('a[href$="signonForm="]').click();
    cy.get('[name="password"]').clear().type(pws);
    cy.get('input[name="signon"]').click();
    cy.get('a[href$="editAccountForm="]').click();
    
  });

  it('CTT03: Cadastrar com todos os campos válidos', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?newAccountForm=');
    var country = faker.location.country().substring(0, 20); // é necessario ser  <= 20 caracteres se não da erro!
    var pws = faker.internet.password(8);
    var username = faker.internet.username();

    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(pws);
    cy.get('[name="repeatedPassword"]').type(pws);
    cy.get('[name="account.firstName"]').type(faker.person.firstName());
    cy.get('[name="account.lastName"]').type(faker.person.lastName());
    cy.get('[name="account.email"]').type(faker.internet.email());
    cy.get('[name="account.phone"]').type(faker.phone.number('##########'));
    cy.get('[name="account.address1"]').type(faker.location.streetAddress());
    cy.get('[name="account.city"]').type(faker.location.city());
    cy.get('[name="account.state"]').type(faker.location.state());
    cy.get('[name="account.zip"]').type(faker.location.zipCode());
    cy.get('[name="account.country"]').type(country);
    cy.get('[name="newAccount"]').click();
    cy.get('a[href$="signonForm="]').click();
    cy.get('[name="password"]').clear().type(pws);
    cy.get('input[name="signon"]').click();
    cy.get('a[href$="editAccountForm="]').click();
  });

});
