const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryButton = page.locator("//a[contains(@href, 'inventory') and contains(@class, 'o_app')]");
    this.inventoryHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToInventoryPage() {
    await this.inventoryButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.inventoryHeader).toBeVisible();
  }
}

module.exports = { InventoryPage };
