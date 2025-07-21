const { expect } = require('@playwright/test');

class ProjectsPage {
  constructor(page) {
    this.page = page;
    this.projectsButton = page.locator("//a[contains(@href, 'project') and contains(@class, 'o_app')]");
    this.projectsHeader = page.locator("//span[contains(@class, 'o_menu_brand')]");
  }

  async moveToProjectsPage() {
    await this.projectsButton.click();
  }

  async verifyHeaderVisibility() {
    await expect(this.projectsHeader).toBeVisible();
  }
}

module.exports = { ProjectsPage };
