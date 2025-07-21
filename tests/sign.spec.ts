import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SignPage } from '../pages/signPage';
require('dotenv').config();

test.describe('Sign Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let signPage: SignPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    signPage = new SignPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Sign page
    await signPage.moveToSignPage();

    // Wait for the Sign page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Sign page header is visible', async () => {
    await signPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
