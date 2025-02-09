
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
require('dotenv').config();

test.describe('Odoo Demo Login Tests', () => {
  test('Valid User Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  
    const username = process.env.ODOO_USERNAME;
    const password = process.env.ODOO_PASSWORD;
  
    await loginPage.login(username, password);
    // await loginPage.verifyLogin();
  });

  test('Invalid User Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user', 'invalid_password');
  });

});
