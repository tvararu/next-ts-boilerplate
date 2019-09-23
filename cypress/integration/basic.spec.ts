describe("Basic test", () => {
  it("should show hello world", () => {
    cy.visit("/");

    cy.contains("Hello, world").should("exist");
  });
});
