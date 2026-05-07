// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    //['allure-playwright', { outputFolder: 'my-allure-results' }]
  ],

  use: {
    // 🔥 Base URL (use if your app has fixed URL)
    // baseURL: 'http://localhost:3000',

    // 🔥 Trace options
    trace: 'on-first-retry',
    // trace: 'on',
    // trace: 'retain-on-failure',

    
    // screenshot: 'off',
    // screenshot: 'only-on-failure',
    // screenshot: 'on-first-failure',
    // screenshot: 'on', // ✅ enable when needed


    // video: 'off',
    // video: 'retain-on-failure',
    // video: 'on-first-retry',
    // video: 'on', // ✅ enable when needed

    // 🔥 Headless mode
    // headless: true,
    // headless: false,

   
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // 🔥 Run local server before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

