exports.LoginPage = class LoginPage {

    

    constructor(page) {

        this.page = page
        this.username = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.login = page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')

    }
    async gotoLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }
    async login(username, password) {
        await this.username.fill('Admin')
        await this.password.fill('admin123')
        await this.login.click()

    }
}