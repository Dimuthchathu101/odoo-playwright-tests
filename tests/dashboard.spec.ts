import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardsPage } from '../pages/dashboardspage';
require('dotenv').config();

test.describe('Dashboard Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let dashboardsPage: DashboardsPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    dashboardsPage = new DashboardsPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Dashboard page
    await dashboardsPage.moveToDashboardPage();

    // Wait for the Dashboard page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Dashboard page header is visible', async () => {
    await dashboardsPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
