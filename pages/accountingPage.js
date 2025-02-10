// pages/loginPage.js
const { expect } = require('@playwright/test');

class AccountingPage {
  constructor(page) {
    this.page = page;
    this.accoutingButton = page.locator("//a[@id='result_app_9']//img[@class='o_app_icon rounded-3']")
    this.accountingHeader = page.locator("//span[@class='o_menu_brand d-flex ms-3 pe-0']");

  // customer Invoices
    this.newCustomerInvocie = page.locator("//button[@class='btn btn-primary oe_kanban_action'][normalize-space()='New']");
    this.customerInvoiceName = page.locator("//input[@id='name_0']");



  // Vendor Bills

  // Bank 

  // Miscelaneous Operations

  // Cash
  }

  async moveToAccountingPage() {
    await this.accoutingButton.click()
  }

  async verifyHeaderVisibility() {
    await expect(this.accountingHeader).toBeVisible();
  }

  async clickonNewCustomerInvoice(){
    await this.newCustomerInvocie.click()
  }

  async enterCustomerInvoiceName (invoiceName){
    await this.customerInvoiceName.fill(invoiceName)
  }




}

module.exports = { AccountingPage };
