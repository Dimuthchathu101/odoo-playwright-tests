
import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
let context: BrowserContext;
let page: Page;
let loginPage: LoginPage;
require('dotenv').config();

const username = process.env.ODOO_USERNAME!;
const password = process.env.ODOO_PASSWORD!;

test('test', async ({ page }) => {
    
  await page.goto('https://dimuthcbandara97.odoo.com/web/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(username);
  await page.getByRole('textbox', { name: 'Password Reset Password' }).click();
  await page.getByRole('textbox', { name: 'Password Reset Password' }).fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://dimuthcbandara97.odoo.com/odoo');
  await page.getByRole('option', { name: 'Appointments' }).click();
  await page.locator("//button[normalize-space()='New']").click();
  await page.getByRole('cell', { name: 'Monday' }).first().click();
  await page.getByRole('tab', { name: 'Options' }).click();
  await page.getByRole('tab', { name: 'Questions' }).click();
  await page.getByRole('button', { name: 'Add a line' }).click();
  await page.locator("//textarea[@id='name_0']").fill('Agile Project Meeting new testing');
  await page.getByRole('checkbox', { name: 'Mandatory Answer' }).check();
  await page.getByRole('textbox', { name: 'Placeholder' }).click();
  await page.locator("//input[@id='name_0']").fill("New mweeting here")
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.getByRole('button', { name: 'Share' }).click();
  await page.locator("//a[normalize-space()='Copy Link & Close']").click();
  await page.getByRole('button', { name: ' 1 Shared Links' }).click();
  await page.getByRole('cell', { name: 'Dimuth C Bandara' }).locator('div').first().click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
});