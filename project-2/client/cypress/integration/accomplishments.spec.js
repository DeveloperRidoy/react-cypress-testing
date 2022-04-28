/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    cy.visit("/Accomplishments");
  });

  it("should display inappropirate content error when text or accomplishment includes giraffe", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type("title giraffe");
    cy.get('[data-cy="accomplishment-input"]').type("bla bla giraffe");
    cy.get('[data-cy="accomplishment-checkbox"]').check();
    cy.get(".Accomplishment-btn").click();
    cy.contains(/Your content is not appropriate/i).should("be.visible");
  });

  it("should display inappropirate content error when text or accomplishment includes giraffe with mock", () => {
    cy.intercept("POST", "http://localhost:4000", (req) => {
      req.reply((res) => {
        res.send({ msg: "Your content is not appropriate" });
      });
    });

    cy.get('[data-cy="accomplishment-title-input"]').type("title giraffe");
    cy.get('[data-cy="accomplishment-input"]').type("bla bla giraffe");
    cy.get('[data-cy="accomplishment-checkbox"]').check();
    cy.get(".Accomplishment-btn").click();
    cy.contains(/Your content is not appropriate/i).should("be.visible");
  });
});
