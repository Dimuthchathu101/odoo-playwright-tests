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
  await page.getByRole('option', { name: 'Calendar' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox', { name: 'Meeting Subject' }).click();
  await page.getByRole('textbox', { name: 'Meeting Subject' }).fill('New Subject Meeting');
  await page.locator('.o-paragraph').click();
  await page.locator('.note-editable').fill('Hello World');
  await page.getByRole('button', { name: 'Send message' }).click();
  await page.getByRole('textbox', { name: 'Send a message to followers…' }).fill('Hello Message');
  await page.getByRole('button', { name: 'Send', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Calendar' }).click();
  await page.getByRole('menuitem', { name: 'Appointments' }).click();
  await page.getByRole('button', { name: 'Reporting' }).click();
  await page.getByRole('menuitem', { name: 'All Appointments' }).click();
  await page.getByRole('button', { name: 'Configuration' }).click();
});