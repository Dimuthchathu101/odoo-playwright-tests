const { expect } = require('@playwright/test');

class SurveysPage {
  constructor(page) {
    this.page = page;
    this.surveysButton = page.locator("//a[contains(@href, 'survey') and contains(@class, 'o_app')]");
    this.surveysHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToSurveysPage() {
    await this.surveysButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.surveysHeader).toBeVisible();
  }
}

module.exports = { SurveysPage };
