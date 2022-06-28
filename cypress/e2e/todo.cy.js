/// <reference types="Cypress" />

import ApiRequest from "../api/ApiRequest";
import TodoPage from "../pages/TodoPage";

describe("todo test cases", () => {
  it("should be able to add new todo", () => {
    ApiRequest.login();
    new TodoPage()
      .load()
      .clickOnPlusButton()
      .addTodo("Learn Cypress")
      .firstTodoShouldHaveText("Learn Cypress");
  });
});
