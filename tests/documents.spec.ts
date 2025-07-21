import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DocumentsPage } from '../pages/documentsPage';
require('dotenv').config();

test.describe('Documents Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let documentsPage: DocumentsPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    documentsPage = new DocumentsPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Documents page
    await documentsPage.moveToDocumentsPage();

    // Wait for the Documents page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Documents page header is visible', async () => {
    await documentsPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
