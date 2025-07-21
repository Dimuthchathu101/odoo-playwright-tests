const { expect } = require('@playwright/test');

class DashboardsPage {
  constructor(page) {
    this.page = page;
    this.dashboardButton = page.locator("//a[contains(@href, 'dashboard') and contains(@class, 'o_app')]");
    this.dashboardHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToDashboardPage() {
    await this.dashboardButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.dashboardHeader).toBeVisible();
  }
}

module.exports = { DashboardsPage };
