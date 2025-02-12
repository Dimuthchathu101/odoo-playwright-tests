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
  await page.getByRole('option', { name: 'Apps' }).click();
  await page.getByText('Official Apps').click();
  await page.getByText('Official Apps').click();
  await page.getByRole('listitem').filter({ hasText: 'Industries' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Construction' }).locator('span').click();
  await page.getByText('Health and Fitness').click();
  await page.getByText('Hospitality').click();
  await page.getByText('Retail').click();
  await page.getByText('Services').click();
  await page.getByText('Supply Chain').click();
  await page.getByRole('button', { name: 'List View' }).click();
  await page.getByRole('main').getByText('Construction').click();
  await page.getByRole('cell', { name: 'Construction', exact: true }).click();
});
