/// <reference types="cypress" />

describe("Habit Dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should display modal when add btn is clicked", () => {
    cy.get("button.Habit-add-btn").contains(/add/i).click();
    cy.get(".modal.show")
      .find(".modal-title")
      .contains(/add a new habit/i)
      .should("be.visible");
  });

  it("should display new habit card when habit added", () => {
    cy.get("button.Habit-add-btn").contains(/add/i).click();
    cy.get('input[placeholder="Habit"]').type("learn e2e testing with cypress");
    cy.get("button.btn-primary")
      .contains(/save changes/i)
      .click();
    cy.contains(/learn e2e testing with cypress/i).should("be.visible");
  });

  it("should toggle icon when habit card is clicked", () => {
    cy.get("button.Habit-add-btn").contains(/add/i).click();
    cy.get('input[placeholder="Habit"]').type("learn e2e testing with cypress");
    cy.get("button.btn-primary")
      .contains(/save changes/i)
      .click();

    cy.get(
      "img.HabitCard__completion-icon[src='/static/media/close.fa7e5ead.svg']"
    ).should("be.visible");

    cy.contains(/learn e2e testing with cypress/i).click();

    cy.get(
      "img.HabitCard__completion-icon[src='/static/media/check.9e8832df.svg']"
    ).should("be.visible");
  });
});
