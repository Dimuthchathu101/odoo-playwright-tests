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
  await page.getByRole('option', { name: 'Barcode' }).click();
  await page.getByRole('button', { name: 'Operations' }).click();
  await page.getByRole('button', { name: 'Actions menu' }).click();
});