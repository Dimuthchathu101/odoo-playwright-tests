const { expect } = require('@playwright/test');

class ToDoPage {
  constructor(page) {
    this.page = page;
    this.todoButton = page.locator("//a[contains(@href, 'todo') and contains(@class, 'o_app')]");
    this.todoHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToToDoPage() {
    await this.todoButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.todoHeader).toBeVisible();
  }
}

module.exports = { ToDoPage };
