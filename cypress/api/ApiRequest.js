export default class ApiRequest {
  static login = () => {
    cy.request({
      url: "/api/v1/users/login",
      method: "POST",
      body: {
        email: "hatem@example.com",
        password: "123456",
      },
    });
  };
}
