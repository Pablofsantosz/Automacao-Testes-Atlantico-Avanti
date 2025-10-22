import { faker } from "@faker-js/faker";

describe("Cenário 4 - Carrinho", () => {
  it("CT004: Verificar o carrinho após o login", () => {
    const username = faker.internet.username();
    const password = faker.internet.password(8);

    cy.visit(
      "https://petstore.octoperf.com/actions/Account.action?newAccountForm="
    );
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('[name="repeatedPassword"]').type(password);
    cy.get('[name="account.firstName"]').type(faker.person.firstName());
    cy.get('[name="account.lastName"]').type(faker.person.lastName());
    cy.get('[name="account.email"]').type(faker.internet.email());
    cy.get('[name="account.phone"]').type(faker.phone.number("##########"));
    cy.get('[name="account.address1"]').type(faker.location.streetAddress());
    cy.get('[name="account.city"]').type(faker.location.city());
    cy.get('[name="account.state"]').type(faker.location.state());
    cy.get('[name="account.zip"]').type(faker.location.zipCode());
    cy.get('[name="account.country"]').type(
      faker.location.country().substring(0, 20)
    );
    cy.get('[name="newAccount"]').click();

    cy.get("body").then(($body) => {
      if ($body.text().includes("Sign Out")) {
        cy.contains("Sign Out").click();
      }
    });

    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    cy.get('a[href*="categoryId=DOGS"]').first().click();
    cy.get('a[href*="productId=K9-BD-01"]').first().click();
    cy.contains("Add to Cart").click();
    cy.get('input[name="EST-6"]').clear().type("2");
    cy.get('input[name="updateCartQuantities"]').click();

    cy.contains("Male Adult Bulldog").should("exist");

    cy.get("a").contains("Sign In").click();
    cy.get('[name="username"]').clear().type(username);
    cy.get('[name="password"]').clear().type(password);
    cy.get('input[name="signon"]').click();

    cy.get('a[href*="/actions/Cart.action?viewCart="]').click();
    cy.contains("Male Adult Bulldog").should("exist");
    cy.get('input[name="EST-6"]').should("have.value", "2");
  });


  it("CT003: Remover produtos do carrinho", () => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    cy.get('a[href*="categoryId=DOGS"]').first().click();
    cy.get('a[href*="productId=K9-BD-01"]').first().click();
    cy.contains("td", "Female Puppy Bulldog")
      .parent("tr")
      .within(() => {
        cy.contains("Add to Cart").click();
      });

    cy.get('a[href*="/actions/Cart.action?viewCart="]').click();
    cy.contains("Female Puppy Bulldog").should("exist");
    cy.get('input[name="EST-7"]').should("have.value", "1");
    cy.get(
      'a[href*="removeItemFromCart"][href*="workingItemId=EST-7"].Button'
    ).click();
    cy.get('input[name="updateCartQuantities"]').click();
    cy.contains("Female Adult Bulldog").should("not.exist");
    cy.contains("Your cart is empty").should("exist");
  });

  it("CT005: Fazer check-out", () => {
    const username = faker.internet.username();
    const password = faker.internet.password(8);

    cy.visit(
      "https://petstore.octoperf.com/actions/Account.action?newAccountForm="
    );
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('[name="repeatedPassword"]').type(password);
    cy.get('[name="account.firstName"]').type(faker.person.firstName());
    cy.get('[name="account.lastName"]').type(faker.person.lastName());
    cy.get('[name="account.email"]').type(faker.internet.email());
    cy.get('[name="account.phone"]').type(faker.phone.number("##########"));
    cy.get('[name="account.address1"]').type(faker.location.streetAddress());
    cy.get('[name="account.city"]').type(faker.location.city());
    cy.get('[name="account.state"]').type(faker.location.state());
    cy.get('[name="account.zip"]').type(faker.location.zipCode());
    cy.get('[name="account.country"]').type(
      faker.location.country().substring(0, 20)
    );
    cy.get('[name="newAccount"]').click();

    cy.get('a[href*="categoryId=DOGS"]').first().click();
    cy.get('a[href*="productId=K9-BD-01"]').first().click();
    cy.contains("td", "Female Puppy Bulldog")
      .parent("tr")
      .within(() => {
        cy.contains("Add to Cart").click();
      });
    cy.get('a[href*="/actions/Cart.action?viewCart="]').click();
    cy.contains("Female Puppy Bulldog").should("exist");
    cy.get('a[href*="/actions/Order.action?newOrderForm="]').click();
    cy.url().should("include", "Order.action?newOrderForm=");
    cy.contains("Payment Details").should("exist");
  });
});
