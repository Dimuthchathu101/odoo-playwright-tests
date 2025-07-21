const { expect } = require('@playwright/test');

class SalesPage {
  constructor(page) {
    this.page = page;
    this.salesButton = page.locator("//a[contains(@href, 'sale') and contains(@class, 'o_app')]");
    this.salesHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToSalesPage() {
    await this.salesButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.salesHeader).toBeVisible();
  }
}

module.exports = { SalesPage };
