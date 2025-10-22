import { faker } from '@faker-js/faker';

describe('Cenário 2 - Cadastro', () => {
 
  

  it.only('Deve exibir erro ao tentar cadastrar com e-mail inválido', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?newAccountForm='),{}; 
    cy.get('[name="username"]').type(faker.internet.userName());

  
  });

  it('Deve exibir erro ao tentar cadastrar com first name inválido', () => {
    // código do teste 2
  });

  it('Deve cadastrar com todos os campos válidos', () => {
    // código do teste 3
  });

});