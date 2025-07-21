import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { PlanningPage } from '../pages/planningPage';
require('dotenv').config();

test.describe('Planning Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let planningPage: PlanningPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    planningPage = new PlanningPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Planning page
    await planningPage.moveToPlanningPage();

    // Wait for the Planning page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Planning page header is visible', async () => {
    await planningPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
