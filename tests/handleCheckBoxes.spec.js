import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.cvs.com/");
  await page
    .locator("#HP00001")
    .getByRole("link", { name: "Vitamins" })
    .click();
  await page.getByRole("link", { name: "Multivitamins Multivitamins" }).click();
  await page.getByLabel("Find a Brand").click();

  const checkbox1Visible = await page
    .getByLabel("CVS Health 55 items, Brand")
    .isVisible();
  expect(checkbox1Visible).toBeTruthy();

  const checkbox2Visible = await page
    .getByLabel("Nature Made 19 items, Brand")
    .isVisible();
  expect(checkbox2Visible).toBeTruthy();

  await page.getByLabel("Find a Brand").fill("health");
  await page.waitForTimeout(2000);
  await page.getByLabel("Find a Brand").press("Enter");
  await page.getByLabel("CVS Health 55 items, Brand").click();
  await page.getByLabel("Nature Made 19 items, Brand").click();
});
