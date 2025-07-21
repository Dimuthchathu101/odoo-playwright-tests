# odoo-playwright-tests

This repository contains Playwright end-to-end tests for various Odoo modules. Each module has its own page object and test file, following a consistent structure for easy maintenance and extension.

## Supported Modules
- Accounting
- Appointment
- Apps
- BarCode
- Calendar
- Contacts
- CRM
- Dashboard
- Discuss
- Documents
- Email Marketing
- Employees
- Inventory
- Knowledge
- Login
- Manufacturing
- Planning
- PLM
- Projects
- Sales
- Settings
- Shop Floor
- Sign
- Surveys
- ToDo
- Website

## Project Structure
- `pages/` - Page objects for each Odoo module
- `tests/` - Playwright test files for each module
- `playwright.config.ts` - Playwright configuration

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up environment variables:
   - Create a `.env` file in the root directory with your Odoo credentials:
     ```env
     ODOO_USERNAME=your_username
     ODOO_PASSWORD=your_password
     ```

## Running Tests
To run all tests:
```bash
npx playwright test
```

To run a specific module test (e.g., CRM):
```bash
npx playwright test tests/crm.spec.ts
```

## Adding New Module Tests
1. Create a page object in `pages/` (e.g., `myModulePage.js`).
2. Create a test file in `tests/` (e.g., `myModule.spec.ts`).
3. Follow the structure of existing files for consistency.

## Notes
- All tests require valid Odoo credentials in the `.env` file.
- Tests will open a browser and perform login before navigating to the respective module.
- Each test verifies that the module's main page header is visible after navigation.

---
Feel free to contribute or open issues for improvements!
