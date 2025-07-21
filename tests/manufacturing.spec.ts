import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ManufacturingPage } from '../pages/manufacturingPage';
require('dotenv').config();

test.describe('Manufacturing Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let manufacturingPage: ManufacturingPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    manufacturingPage = new ManufacturingPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Manufacturing page
    await manufacturingPage.moveToManufacturingPage();

    // Wait for the Manufacturing page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Manufacturing page header is visible', async () => {
    await manufacturingPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
