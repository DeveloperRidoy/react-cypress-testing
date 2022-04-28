/// <reference types="cypress" />

describe("Accomplishment Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should show error if information is missing", () => {
    cy.get("input.Accomplishment-input").type("lean cypress");
    cy.get("textarea.Accomplishment-textarea").type("lean cypress");

    cy.get("button.Accomplishment-btn").click();
    cy.get(".Accomplishment-error-container")
      .contains(/Complete the items above to continue/i)
      .should("be.visible");
  });

  it('should display welcome message on successful submission', () => {
    cy.get("input.Accomplishment-input").type("lean cypress");
    cy.get("textarea.Accomplishment-textarea").type("lean cypress");
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.get("button.Accomplishment-btn").click();
    cy.contains(/This Accomplisment was Successfully Submitted/i).should('be.visible');
  })

  it('should reset input elements when clicked on go back', () => {
    cy.get("input.Accomplishment-input").type("lean cypress");
    cy.get("textarea.Accomplishment-textarea").type("lean cypress");
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.get("button.Accomplishment-btn").click();
    cy.contains(/This Accomplisment was Successfully Submitted/i).should(
      "be.visible"
    );
    cy.contains('button', /go back/i).click(); 
    cy.get("input.Accomplishment-input").should('have.value', '');
    cy.get("textarea.Accomplishment-textarea").should("have.value", "");
    cy.get("[data-cy='accomplishment-checkbox']").should('not.be.checked');
  })
});
