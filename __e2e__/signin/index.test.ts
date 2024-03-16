import { test, expect } from "@playwright/test";

test("signin", async ({ page, baseURL }) => {
  expect(page.goto(`${baseURL}/login`));

  expect(page.getByText("Please log in to continue."));

  await page.getByLabel("Email").fill(process.env.E2E_EMAIL || "");

  await page.getByLabel("Password").fill(process.env.E2E_PASSWORD || "");

  await page.getByRole("button", { name: "Log in" }).click();

  await page.waitForURL(`${baseURL}/dashboard`);

  expect(page.getByText("Dashboard"));
});
