const { expect } = require('@playwright/test');

class PlanningPage {
  constructor(page) {
    this.page = page;
    this.planningButton = page.locator("//a[contains(@href, 'planning') and contains(@class, 'o_app')]");
    this.planningHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToPlanningPage() {
    await this.planningButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.planningHeader).toBeVisible();
  }
}

module.exports = { PlanningPage };
