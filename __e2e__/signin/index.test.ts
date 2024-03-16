import { test, expect } from "@playwright/test";

test("signin", async ({ page }) => {
  await page.goto("/login");

  expect(page.getByText("Please log in to continue."));

  await page.getByLabel("Email").fill(process.env.E2E_EMAIL || "");

  await page.getByLabel("Password").fill(process.env.E2E_PASSWORD || "");

  await page.getByRole("button", { name: "Log in" }).click();

  await page.waitForURL("/dashboard");

  expect(page.getByText("Dashboard"));
});
