/// <reference types="Cypress" />

import LoginPage from "../pages/LoginPage";

describe("Auth test cases", () => {
  it("should be able to login with use name and password", () => {
    // Comment
    new LoginPage()
      .load()
      .login("hatem@example.com", "123456")
      .welcomeMessageShouldBeVisible();
  });
});
