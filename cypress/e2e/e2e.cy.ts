/// <reference types="Cypress"/>

describe("e2e test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1440, 900);
  });

  it("should be able login", () => {
    cy.get('input[name="email"]').type("pierre@mail.com");
    cy.get('input[name="password"]').type("1234");
    cy.get('button[type="submit"]').click();
  });

  it("should be able insert values in input for calculate", () => {
    cy.visit("/home");
    cy.get("input[name=investedAmount]").type(1000);
    cy.get("input[name=time]").type(10);
    cy.wait(500);
    cy.get('button[type="submit"]').click();
    cy.wait(500);
  });

  it("should be able returned the calculate page and calculate other value", () => {
    cy.visit("/result");
    cy.get("#home").click();
    cy.get("input[name=investedAmount]").type(5000);
    cy.get("input[name=time]").type(12);
    cy.wait(500);
    cy.get('button[type="submit"]').click();
    cy.wait(500);
  });

  it("should be able exit", () => {
    cy.visit("/result");
    cy.get("#exit").click();
    cy.wait(500);
  });
});
