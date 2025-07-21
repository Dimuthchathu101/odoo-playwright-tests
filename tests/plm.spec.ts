import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { PlmPage } from '../pages/plmPage';
require('dotenv').config();

test.describe('PLM Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let plmPage: PlmPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    plmPage = new PlmPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the PLM page
    await plmPage.moveToPlmPage();

    // Wait for the PLM page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify PLM page header is visible', async () => {
    await plmPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
