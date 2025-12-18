// @ts-check
import { defineConfig, devices } from '@playwright/test';
import path from 'path'; // <-- Added this import

/**
 * Read environment variables from file.
 * github.com
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see playwright.dev
 */

const authFile = path.join(__dirname, 'playwright/.auth/user.json'); // <-- Defined auth file path

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 50000,
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0, 
  retries: 0, // <-- Changed from 0 to 1 so 'on-first-retry' video works
  /* Opt out of parallel tests on CI. */
  workers:  1,
  /* Reporter to use. See playwright.dev */
  reporter: [['html'], ['allure-playwright', {outputFolder: 'my-allure-results'}]],
  /* Shared settings for all the projects below. See playwright.dev. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See playwright.dev */
    trace: 'on-first-retry',

    video: 'on-first-retry',  //To record the video
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    // --- AUTHENTICATION SETUP PROJECT (Runs Once) ---

    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
       },
      dependencies: ['setup'],
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});






















