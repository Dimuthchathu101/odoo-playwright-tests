import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SalesPage } from '../pages/salesPage';
require('dotenv').config();

test.describe('Sales Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let salesPage: SalesPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    salesPage = new SalesPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Sales page
    await salesPage.moveToSalesPage();

    // Wait for the Sales page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Sales page header is visible', async () => {
    await salesPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
