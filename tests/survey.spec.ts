import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SurveysPage } from '../pages/surveysPage';
require('dotenv').config();

test.describe('Surveys Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let surveysPage: SurveysPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    surveysPage = new SurveysPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Surveys page
    await surveysPage.moveToSurveysPage();

    // Wait for the Surveys page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Surveys page header is visible', async () => {
    await surveysPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
