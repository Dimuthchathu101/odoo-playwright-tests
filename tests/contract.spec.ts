import { test, expect } from '@playwright/test';

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
  await page.getByRole('option', { name: 'Contacts' }).click();
  await page.getByRole('menuitem', { name: 'Contacts' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Contact Tags' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Industries' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Countries' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Fed. States' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Country Group' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Banks' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
  await page.getByRole('menuitem', { name: 'Bank Accounts' }).click();
});