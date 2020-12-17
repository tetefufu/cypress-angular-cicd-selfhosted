describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/");
    cy.contains("Heroes");
    cy.contains("Welcome");
  });
});
