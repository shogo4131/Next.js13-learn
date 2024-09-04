import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./__e2e__",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry"
  },
  timeout: 100000,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], locale: "ja-JP" }
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], locale: "ja-JP" }
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], locale: "ja-JP" }
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI
  }
});
