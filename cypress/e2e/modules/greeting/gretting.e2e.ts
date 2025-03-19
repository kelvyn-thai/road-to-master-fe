import { envConfigs } from "cypress/configs/env.config";

describe("Greeting", () => {
  it("Should render Greeting correctly", () => {
    cy.visit(envConfigs.NEXT_PUBLIC_DOMAIN_URL);

    cy.get("[data-testid=greeting-section]").should("exist");
    cy.get("[data-testid=name]").should("exist").as("name");
    cy.get("[data-testid=avatar]").should("exist");
    cy.get("[data-testid=bio]").should("exist");

    cy.get("@name").contains("Hello, I am");
  });
});
