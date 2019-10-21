describe("主页", function() {

  it("登录页内容完整", function() {
    cy.visit("login");
    cy.get(".loginForm__title");
    cy.get("input[name=username]");
    cy.get("input[name=password]");
    cy.get("button");
  });

  it("登录", function() {
    cy.visit("login");

    // 输入信息
    cy.get("input[name=username]").type("test");
    cy.get("input[name=password]").type(`pwd`);

    // 登录
    cy.get("button").click();
    
    // 检查是否进入主页
    cy.get("h1").should("contain", "Header");
  });
});
