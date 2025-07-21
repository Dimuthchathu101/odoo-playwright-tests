import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SettingsPage } from '../pages/settingsPage';
require('dotenv').config();

test.describe('Settings Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let settingsPage: SettingsPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    settingsPage = new SettingsPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Settings page
    await settingsPage.moveToSettingsPage();

    // Wait for the Settings page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Settings page header is visible', async () => {
    await settingsPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
