export {};

describe("App loading", () => {
  it("App is loading correctly", () => {
    cy.visit("/");
  });
});
