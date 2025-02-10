import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
require('dotenv').config();

test.describe('Login in to the application', () => {
  // test('Valid User Login', async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   await loginPage.goto();
  
  //   const username = process.env.ODOO_USERNAME;
  //   const password = process.env.ODOO_PASSWORD;
  
  //   await loginPage.login(username, password);
  //   // await loginPage.verifyLogin();
  // });

  // test('Invalid User Login', async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   await loginPage.goto();
  //   await loginPage.login('invalid_user', 'invalid_password');
  // });

});
