import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
require('dotenv').config();

test.describe('Inventory Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Inventory page
    await inventoryPage.moveToInventoryPage();

    // Wait for the Inventory page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Inventory page header is visible', async () => {
    await inventoryPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
