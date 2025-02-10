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

    await page.getByRole('combobox', { name: 'Customer' }).fill('Dimuth');
    await page.getByRole('option', { name: 'Dimuth C Bandara' }).click();
    await page.getByRole('textbox', { name: 'Invoice Date' }).click();
    await page.getByRole('button', { name: '10' }).click();
    await page.getByRole('textbox', { name: 'Due Date' }).click();
    await page.getByRole('button', { name: '13' }).click();
    await page.getByRole('combobox', { name: 'Payment Terms' }).click();
    await page.getByRole('option', { name: 'Immediate Payment' }).click();
    await page.getByRole('combobox', { name: 'Journal' }).click();
    await page.getByRole('option', { name: 'Customer Invoices' }).click();
    await page.getByRole('button', { name: 'Add a line' }).click();
    await page.getByRole('combobox', { name: 'Search a product' }).click();
    await page.getByRole('option', { name: 'Booking Fees' }).click();
    await page.getByRole('cell', { name: 'Product Sales' }).click();
    await page.getByRole('option', { name: 'Product Sales' }).click();
    await page.getByRole('cell', { name: '1.00' }).getByRole('textbox').click();
    await page.getByRole('cell', { name: '50.00', exact: true }).getByRole('textbox').click();
    await page.getByRole('cell', { name: '1.00' }).getByRole('textbox').dblclick();
    await page.getByRole('cell', { name: '1.00' }).getByRole('textbox').fill('2.00');
    await page.getByRole('button', { name: 'Add a line' }).click();
    await page.getByRole('combobox', { name: 'Search a product' }).click();
    await page.getByRole('option', { name: 'Search More...' }).click();
    await page.getByRole('tab', { name: 'Journal Items' }).click();
    await page.getByRole('tab', { name: 'Other Info' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'Send', exact: true }).click();
    await page.locator("//button[@name='action_send_and_print']//span[contains(text(),'Send')]").click()
    await page.waitForTimeout(5000);
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
