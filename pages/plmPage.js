const { expect } = require('@playwright/test');

class PlmPage {
  constructor(page) {
    this.page = page;
    this.plmButton = page.locator("//a[contains(@href, 'plm') and contains(@class, 'o_app')]");
    this.plmHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToPlmPage() {
    await this.plmButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.plmHeader).toBeVisible();
  }
}

module.exports = { PlmPage };
