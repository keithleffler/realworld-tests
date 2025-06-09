import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://demo.realworld.io/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
  reporter: 'html',
});
