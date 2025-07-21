import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { CrmPage } from '../pages/crmPage';
require('dotenv').config();

test.describe('CRM Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let crmPage: CrmPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    crmPage = new CrmPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the CRM page
    await crmPage.moveToCrmPage();

    // Wait for the CRM page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify CRM page header is visible', async () => {
    await crmPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
