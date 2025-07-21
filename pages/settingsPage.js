const { expect } = require('@playwright/test');

class SettingsPage {
  constructor(page) {
    this.page = page;
    this.settingsButton = page.locator("//a[contains(@href, 'settings') and contains(@class, 'o_app')]");
    this.settingsHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToSettingsPage() {
    await this.settingsButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.settingsHeader).toBeVisible();
  }
}

module.exports = { SettingsPage };
