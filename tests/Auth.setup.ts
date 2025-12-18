import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authentication', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.getByPlaceholder('Username').type('Admin')

  await page.getByPlaceholder('Password').type('admin123')

  await page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

  await page.context().storageState({ path: authFile });

})