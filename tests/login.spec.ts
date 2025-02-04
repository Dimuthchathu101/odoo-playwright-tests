import { test, expect, chromium } from '@playwright/test';

test('get started link', async () => {
  const browser = await chromium.launch({ headless: false}); // 1000ms delay
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://dimuthcbandara97.odoo.com/web/login?redirect=%2Fodoo%3F');
  // Additional test steps...
  await browser.close();
});
