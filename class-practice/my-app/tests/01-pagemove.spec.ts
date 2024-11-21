import { test, expect } from "@playwright/test";

test("페이지 이동 시나리오", async ({ page }) => {
  await page.goto("http://localhost:3000/section35/35-06-playwright-e2e-test");

  await page.click("text=철수랑 놀러가기");

  await expect(page).toHaveURL(
    "http://localhost:3000/section35/35-06-playwright-e2e-test-moved"
  );

  await expect(page.locator("h1")).toContainText("철수야 놀자~~~");
});
