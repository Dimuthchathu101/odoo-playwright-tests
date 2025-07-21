import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { EmailMarketingPage } from '../pages/emailMarketingPage';
require('dotenv').config();

test.describe('Email Marketing Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let emailMarketingPage: EmailMarketingPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    emailMarketingPage = new EmailMarketingPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Email Marketing page
    await emailMarketingPage.moveToEmailMarketingPage();

    // Wait for the Email Marketing page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Email Marketing page header is visible', async () => {
    await emailMarketingPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
