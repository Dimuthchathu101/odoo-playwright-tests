const { expect } = require('@playwright/test');

class SignPage {
  constructor(page) {
    this.page = page;
    this.signButton = page.locator("//a[contains(@href, 'sign') and contains(@class, 'o_app')]");
    this.signHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToSignPage() {
    await this.signButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.signHeader).toBeVisible();
  }
}

module.exports = { SignPage };
