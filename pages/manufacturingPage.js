const { expect } = require('@playwright/test');

class ManufacturingPage {
  constructor(page) {
    this.page = page;
    this.manufacturingButton = page.locator("//a[contains(@href, 'mrp') and contains(@class, 'o_app')]");
    this.manufacturingHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToManufacturingPage() {
    await this.manufacturingButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.manufacturingHeader).toBeVisible();
  }
}

module.exports = { ManufacturingPage };
