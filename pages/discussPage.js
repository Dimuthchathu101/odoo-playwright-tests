const { expect } = require('@playwright/test');

class DiscussPage {
  constructor(page) {
    this.page = page;
    this.discussButton = page.locator("//a[contains(@href, 'discuss') and contains(@class, 'o_app')]");
    this.discussHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToDiscussPage() {
    await this.discussButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.discussHeader).toBeVisible();
  }
}

module.exports = { DiscussPage };
