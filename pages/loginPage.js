// pages/loginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("//input[@id='login']");
    this.passwordField = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//button[normalize-space()='Log in']");
  }

  async goto() {
    await this.page.goto('https://dimuthcbandara97.odoo.com/web/login');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async verifyLogin() {
    await expect(this.page.locator('text=Home')).toBeVisible();
  }
}

module.exports = { LoginPage };
