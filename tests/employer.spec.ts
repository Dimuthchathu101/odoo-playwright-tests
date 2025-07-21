import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { EmployeesPage } from '../pages/employeesPage';
require('dotenv').config();

test.describe('Employees Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let employeesPage: EmployeesPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    employeesPage = new EmployeesPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Employees page
    await employeesPage.moveToEmployeesPage();

    // Wait for the Employees page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Employees page header is visible', async () => {
    await employeesPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
