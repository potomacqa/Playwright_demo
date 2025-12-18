// import {test, expect} from '@playwright/test'

// test ('Assertion ',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     await page.getByPlaceholder('Username').type('Admin')

//     await page.getByPlaceholder('Password').type('admin123')

//     await page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


// })

// //Upload a file
// test ("Upload an Image",async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
//     await page.getByPlaceholder('Username').type('Admin')

//     await page.getByPlaceholder('Password').type('admin123')

//     await page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

//     await page.getByText('My Info').click()

//     await page.locator('[class="employee-image"]').click()

//     await page.locator('[class="oxd-icon bi-plus"]').click()

//     // await page.setInputFiles('C:\Users\adchandel\Downloads\QASource Virtual Backgrounds')

//     // await page.setInputFiles('input.oxd-icon bi-plus','C:\Users\adchandel\Downloads\QASource Virtual Backgrounds\Virtual-Background-5.jpg')

//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhotograph/empNumber/7')

// })


// // Handle Keyboard actions
// test ("Handle Keyboard actions",async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     await page.getByPlaceholder('Username').type('Admin')

//     await page.getByPlaceholder('Password').type('admin123')

//     //await page.keyboard.press('Backspace')
 
//     await page.keyboard.press('Enter')
// })    

// test ("Handle iframes",async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     await page.getByPlaceholder('Username').type('Admin')

//     await page.getByPlaceholder('Password').type('admin123')

//     //await page.keyboard.press('Backspace')

//     await page.keyboard.press('Enter')

//     await page.locator('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]',{hasText:'Dashboard'}).click()

//     const iframe = await page.locator('[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-dashboard-widget"]').nth(0)

//     await iframe.locator('[class="oxd-icon bi-stopwatch"]').nth(0).click()


// })  

