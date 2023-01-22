describe("App E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have form", () => {
    cy.get("input").should("have.value", "");
    cy.get("button").should("have.text", "Add todo");
  });

  it("should add a task", () => {
    cy.get('input[type="text"]')
      .type("Learn React")
      .should("have.value", "Learn React");

    cy.contains("Add todo").click();

    cy.get(".container > .todo-name").should("have.text", "Learn React");
    cy.get('input[type="text"]').should("have.value", "");

    cy.get('input[type="text"]')
      .type("Learn Ruby on rails")
      .should("have.value", "Learn Ruby on rails");

    cy.contains("Add todo").click();
    cy.get("div.container:nth-child(2) > .todo-name").should(
      "have.text",
      "Learn Ruby on rails"
    );
  });

  it("should delete tasks", () => {
    cy.get('input[type="text"]')
      .type("Learn React")
      .should("have.value", "Learn React");

    cy.contains("Add todo").click();

    cy.get(".container > .todo-name").should("have.text", "Learn React");
    cy.get('input[type="text"]').should("have.value", "");

    cy.get('input[type="text"]')
      .type("Learn Ruby on rails")
      .should("have.value", "Learn Ruby on rails");

    cy.contains("Add todo").click();
    cy.get("div.container:nth-child(2) > .todo-name").should(
      "have.text",
      "Learn Ruby on rails"
    );

    // --- //
    cy.get("div.container").should("have.length", 2);

    cy.get("div.container:nth-child(2) > .remove").click();

    cy.get("div.container").should("have.length", 1);
  });

  it("should toggle checkbox", () => {
    cy.get('input[type="text"]')
      .type("Learn React")
      .should("have.value", "Learn React");

    cy.contains("Add todo").click();

    cy.get("div.container > .checkbox")
      .should("not.have.checked")
      .click()
      .should("be.checked");
  });
});
