import NewTodoPage from "./NewTodoPage";

export default class TodoPage {
  // Locators
  get addButton() {
    return cy.get('[data-testid="add"]');
  }

  get firstTodoItem() {
    return cy.get('[data-testid="todo-item"]').first();
  }

  get welcomeMessage() {
    return cy.get('[data-testid="welcome"]');
  }

  get firstTodoCheckbox() {
    return cy.get('[data-testid="complete-task"]').first();
  }

  // Methods

  load = () => {
    cy.visit("/todo");
    return this;
  };

  welcomeMessageShouldBeVisible = () => {
    cy.get('[data-testid="welcome"]').should("be.visible");
  };

  clickOnPlusButton = () => {
    this.addButton.click();
    return new NewTodoPage();
  };

  firstTodoShouldHaveText = (text) => {
    this.firstTodoItem.should("have.text", text);
  };
}
