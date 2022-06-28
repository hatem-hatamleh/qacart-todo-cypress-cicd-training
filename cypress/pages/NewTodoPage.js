import TodoPage from "./TodoPage";

export default class NewTodoPage {
  // Locators
  get newTodoInput() {
    return cy.get('[data-testid="new-todo"]').first();
  }

  get submitNewTodo() {
    return cy.get('[data-testid="submit-newTask"]').first();
  }

  // Methods

  load = () => {
    cy.visit("/todo/new");
    return this;
  };

  addTodo = (item) => {
    this.newTodoInput.type(item);
    this.submitNewTodo.click();
    return new TodoPage();
  };
}
