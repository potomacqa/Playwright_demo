import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('Check PIM page', async ({ page }) => {
    await page.locator('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]', { hasText: 'Dashboard' }).click()

    const iframe = await page.locator('[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-dashboard-widget"]').nth(0)

    await iframe.locator('[class="oxd-icon bi-stopwatch"]').nth(0).click()
});

test('Upload', async ({ page }) => {
    await page.getByText('My Info').click()

    await page.locator('[class="employee-image"]').click()

    await page.locator('[class="oxd-icon bi-plus"]').click()

    // await page.setInputFiles('C:\Users\adchandel\Downloads\QASource Virtual Backgrounds')

    // await page.setInputFiles('input.oxd-icon bi-plus','C:\Users\adchandel\Downloads\QASource Virtual Backgrounds\Virtual-Background-5.jpg')

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhotograph/empNumber/7')
});
