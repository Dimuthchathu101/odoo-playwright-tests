const { expect } = require('@playwright/test');

class DocumentsPage {
  constructor(page) {
    this.page = page;
    this.documentsButton = page.locator("//a[contains(@href, 'documents') and contains(@class, 'o_app')]");
    this.documentsHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToDocumentsPage() {
    await this.documentsButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.documentsHeader).toBeVisible();
  }
}

module.exports = { DocumentsPage };
