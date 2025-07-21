const { expect } = require('@playwright/test');

class KnowledgePage {
  constructor(page) {
    this.page = page;
    this.knowledgeButton = page.locator("//a[contains(@href, 'knowledge') and contains(@class, 'o_app')]");
    this.knowledgeHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToKnowledgePage() {
    await this.knowledgeButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.knowledgeHeader).toBeVisible();
  }
}

module.exports = { KnowledgePage };
