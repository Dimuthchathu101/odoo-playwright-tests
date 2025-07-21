const { expect } = require('@playwright/test');

class EmailMarketingPage {
  constructor(page) {
    this.page = page;
    this.emailMarketingButton = page.locator("//a[contains(@href, 'email_marketing') and contains(@class, 'o_app')]");
    this.emailMarketingHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToEmailMarketingPage() {
    await this.emailMarketingButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.emailMarketingHeader).toBeVisible();
  }
}

module.exports = { EmailMarketingPage };
