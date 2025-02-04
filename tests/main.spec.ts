import { test, expect, chromium } from '@playwright/test';

test('get started link', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 }); // 1000ms delay
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://demo6.odoo.com/odoo');
  // Additional test steps...
  await browser.close();
});
