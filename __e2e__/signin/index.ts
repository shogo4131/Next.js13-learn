import type { Locator, Page } from "@playwright/test";

export class SignIn {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator("label", { hasText: "email" });
    this.password = page.locator("label", { hasText: "password" });
    this.loginButton = page.locator("button", { hasText: "Log in" });
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email?: string, password?: string) {
    await this.email.fill(email ?? (process.env.E2E_EMAIL || ""));
    await this.password.fill(password ?? (process.env.E2E_PASSWORD || ""));
    await this.loginButton.click();
    await this.page.waitForURL("/dashboard");
  }
}
