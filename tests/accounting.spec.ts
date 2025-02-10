import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AccountingPage } from '../pages/accountingPage';
require('dotenv').config();

test.describe('Accounting Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let accountingPage: AccountingPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    accountingPage = new AccountingPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the accounting page
    await accountingPage.moveToAccountingPage();

    // Wait for the accounting page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify accounting page', async () => {
    accountingPage.verifyHeaderVisibility()
  });

  test('Create new Invoice', async () => {
    accountingPage.clickonNewCustomerInvoice();
    accountingPage.enterCustomerInvoiceName("Hello World !");

    await page.waitForTimeout(5000);
  });

  test.afterAll(async () => {
    await context.close(); // Closes the browser context after all tests
  });
});
