import { faker } from '@faker-js/faker';

describe('Cenário 2 - Cadastro', () => {
 
  

  it.only('Deve exibir erro ao tentar cadastrar com e-mail inválido', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action'); 
    //cy.get('#gender\\male').click();
  
  });

  it('Deve exibir erro ao tentar cadastrar com first name inválido', () => {
    // código do teste 2
  });

  it('Deve cadastrar com todos os campos válidos', () => {
    // código do teste 3
  });

});