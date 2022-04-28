/// <reference types="cypress"/>

describe("locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locates elements with get command", () => {
    // get elements by tagName
    cy.get("button");

    // get elements by className
    cy.get(".btn-with-class");

    // get elements by specific class
    cy.get('[class="Elements-btn btn-with-class"]');

    // get element by id
    cy.get("#btn-with-id");

    // get elements by attribute
    cy.get('[type="submit"]');

    // get btns with specific class
    cy.get("button.Elements-btn");

    // get btn with class and id
    cy.get("button.Elements-btn#btn-with-id");

    // get btn with class and attribute
    cy.get('button.Elements-btn[type="submit"]');

    // get all elements by testId
    cy.get('[data-cy="btn-id-1"] ');

    // get element by support command
    cy.getByClass("Elements-btn");
    cy.getByTestId("btn-id-1");
  });

  it("Locates elements with contains", () => {
    cy.contains(/elements/i);
    cy.contains(/not unique text/i);

    // with attribute
    cy.contains("[type='submit']", /not unique text/i);

    // combine get with contains
    cy.get("[type='submit']").contains(/not unique text/i);
  });  


  it('locates elements with find method', () => {
    cy.get('#form-1').find('button.btn-1')
    cy.get('#form-1').find('button.btn-2')

  })
});
