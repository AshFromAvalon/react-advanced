export {};

describe("App loading", () => {
  it("App is loading correctly", () => {});
});

describe("Cart items number", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Cart number is showing when a product button is pressed", () => {
    cy.get(".product-card").first().find("button").click();
    cy.get("#cartNumber").should("have.text", "1");
  });

  it("Cart number is updated no matter each time the button is pressed", () => {
    let totalNumberOfClicks = 0;

    for (let cardIndex = 0; cardIndex < 3; cardIndex++) {
      const productCardNumber = Math.floor(Math.random() * (39 - 0 + 1)) + 0;
      const numberOfClicks = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

      for (let clickIndex = 0; clickIndex < numberOfClicks; clickIndex++) {
        cy.get(".grid.grid-cols-4.gap-4 > div").eq(productCardNumber).find("button").click();
        totalNumberOfClicks++;
      }
    }

    cy.get("#cartNumber").should("have.text", totalNumberOfClicks.toString());
  });
});

describe("Buy form", () => {
  beforeEach(function () {
    cy.visit("/buy");
  });

  it("Form is fonctionning correctly", () => {
    cy.get(":nth-child(1) > .mt-2").type("pata");
    cy.get(":nth-child(2) > .mt-2").type("turbo pouet");
    cy.get(":nth-child(3) > .mt-2").type("pouet@example.com");
    cy.get(":nth-child(4) > .mt-2").type("OMJESUS");
    cy.get(":nth-child(5) > .mt-2").type("OMJESUS");

    cy.get("nav").click();
    // cy.get("form").find(".text-red-500.text-sm").should("not.exist");
  });

  it("Email is not a valid email", () => {
    cy.get(":nth-child(1) > .mt-2").type("pata");
    cy.get(":nth-child(2) > .mt-2").type("pouet");
    cy.get(":nth-child(3) > .mt-2").type("pouet.example.com");
    cy.get(":nth-child(4) > .mt-2").type("OMJESUS");
    cy.get(":nth-child(5) > .mt-2").type("OMJESUS");

    cy.get("nav").click();
    cy.get("form").find(".text-red-500.text-sm");
  });

  it("Name is too short", () => {
    cy.get(":nth-child(1) > .mt-2").type("pata");
    cy.get(":nth-child(2) > .mt-2").type("pouet");
    cy.get(":nth-child(3) > .mt-2").type("pouet@example.com");
    cy.get(":nth-child(4) > .mt-2").type("OMJESUS");
    cy.get(":nth-child(5) > .mt-2").type("OMJESUS");

    cy.get("nav").click();
    cy.get("form").find(".text-red-500.text-sm");
  });

  it("password doesnt match", () => {
    cy.get(":nth-child(1) > .mt-2").type("pata");
    cy.get(":nth-child(2) > .mt-2").type("turbo pouet");
    cy.get(":nth-child(3) > .mt-2").type("pouet@example.com");
    cy.get(":nth-child(4) > .mt-2").type("OMJESUS");
    cy.get(":nth-child(5) > .mt-2").type("ALED ?");

    cy.get("nav").click();
    cy.get("form").find(".text-red-500.text-sm");
  });

  // click click outside the form to triggger the validation
});
