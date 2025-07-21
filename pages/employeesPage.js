const { expect } = require('@playwright/test');

class EmployeesPage {
  constructor(page) {
    this.page = page;
    this.employeesButton = page.locator("//a[contains(@href, 'employees') and contains(@class, 'o_app')]");
    this.employeesHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToEmployeesPage() {
    await this.employeesButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.employeesHeader).toBeVisible();
  }
}

module.exports = { EmployeesPage };
