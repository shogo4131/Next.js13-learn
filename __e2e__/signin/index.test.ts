import { test, expect } from "@playwright/test";
import { SignIn } from "./index";

test("signin", async ({ page, browser }) => {
  const signin = new SignIn(page);

  await signin.goto();

  expect(page.getByText("Please log in to continue."));

  await signin.login();
});
