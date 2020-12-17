describe("My First Test", function() {
  it("Visits the Kitchen Sink", function() {
    cy.visit("http://localhost:4200");
    cy.pause();
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
