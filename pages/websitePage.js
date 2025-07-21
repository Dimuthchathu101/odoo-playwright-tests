const { expect } = require('@playwright/test');

class WebsitePage {
  constructor(page) {
    this.page = page;
    this.websiteButton = page.locator("//a[contains(@href, 'website') and contains(@class, 'o_app')]");
    this.websiteHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToWebsitePage() {
    await this.websiteButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.websiteHeader).toBeVisible();
  }
}

module.exports = { WebsitePage };
