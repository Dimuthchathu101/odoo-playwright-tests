import { test, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProjectsPage } from '../pages/projectsPage';
require('dotenv').config();

test.describe('Projects Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let projectsPage: ProjectsPage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    projectsPage = new ProjectsPage(page);

    // Go to login page
    await loginPage.goto();

    // Get credentials from environment variables
    const username = process.env.ODOO_USERNAME!;
    const password = process.env.ODOO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Navigate to the Projects page
    await projectsPage.moveToProjectsPage();

    // Wait for the Projects page to load
    await page.waitForTimeout(5000); // Adjust based on UI speed
  });

  test('Verify Projects page header is visible', async () => {
    await projectsPage.verifyHeaderVisibility();
  });

  test.afterAll(async () => {
    // await context.close(); // Closes the browser context after all tests
  });
});
