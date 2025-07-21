import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DiscussPage } from '../pages/discussPage';
require('dotenv').config();

test.describe('Discuss Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let discussPage: DiscussPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    discussPage = new DiscussPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Discuss page
    await discussPage.moveToDiscussPage();

    // Wait for the Discuss page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Discuss page header is visible', async () => {
    await discussPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
