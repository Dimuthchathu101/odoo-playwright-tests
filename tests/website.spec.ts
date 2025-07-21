import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { WebsitePage } from '../pages/websitePage';
require('dotenv').config();

test.describe('Website Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let websitePage: WebsitePage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    websitePage = new WebsitePage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Website page
    await websitePage.moveToWebsitePage();

    // Wait for the Website page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Website page header is visible', async () => {
    await websitePage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
