import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to a page that requires login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('Check Dashboard widgets', async ({ page }) => {
  await page.getByText('Recruitment').click()
  await page.getByText('-- Select --').nth(0).click()
  // await page.getByText('-- Select --').nth(1).click()
  // await page.getByText('-- Select --').nth(2).click()
  // await page.getByText('-- Select --').nth(4).click()
  await page.getByText('Chief Executive Officer').click()

  await page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()

});
