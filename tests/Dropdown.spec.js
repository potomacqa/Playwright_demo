// import {test, expect} from '@playwright/test'

// test('test @122',async({page})=>{
//     // await page.goto('https://the-internet.herokuapp.com/download')
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     await page.getByPlaceholder('Username').type('Admin')

//     await page.getByPlaceholder('Password').type('admin123')

//     await page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//     // await page.getByRole('link', { name: 'Recruitment' }).click();

//     await page.getByText('Recruitment').click()
//     await page.getByText('-- Select --').nth(0).click()
//     // await page.getByText('-- Select --').nth(1).click()
//     // await page.getByText('-- Select --').nth(2).click()
//     // await page.getByText('-- Select --').nth(4).click()
//     await page.getByText('Chief Executive Officer').click()

//     await page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()

//     await page.getByText('mb.pdf').first().click()

//     // await page.locator('<a href="download/mb.pdf">mb.pdf</a>').click();

//     await expect(page).toHaveURL('https://the-internet.herokuapp.com/download')

// })

