describe("renders a comment", () => {
  it("Should render a comment", () => {
    cy.visit("/");
    cy.get("header").should("exist");
    cy.get("img.profile-photo").should("exist");
    cy.get(".comment-body").then((elem) => {
      expect(elem.text().length).to.be.greaterThan(0);
    });
    cy.get("footer").should("exist");
  });
});
