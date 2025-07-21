const { expect } = require('@playwright/test');

class CrmPage {
  constructor(page) {
    this.page = page;
    this.crmButton = page.locator("//a[contains(@href, 'crm') and contains(@class, 'o_app')]");
    this.crmHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToCrmPage() {
    await this.crmButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.crmHeader).toBeVisible();
  }
}

module.exports = { CrmPage };
