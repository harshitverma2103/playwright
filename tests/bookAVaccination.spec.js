const { test, expect } = require("@playwright/test");

test("Vaccination Booking", async ({ page }) => {
  await page.goto("https://www.cvs.com/");
  await page.locator("#Health-menu").click();
  await page.waitForTimeout(2000);
  await page.click('text="Schedule a CVS Pharmacy Vaccine"');
  await page.waitForLoadState("domcontentloaded");

  const link = await page.waitForSelector('a[data-analytics-name="Schedule your vaccinations"]');
  await link.click();
  await page.waitForEvent("domcontentloaded");
  await page.waitForLoadState("domcontentloaded");

//   const groupLabel = await page.$('label:has-text("Group (COVID-19 only)")', { timeout: 5000 });
//   if (groupLabel) {
//     await groupLabel.click();
//   } else {
//     throw new Error("Group label not found");
//   }

  const individualLabel = await page.$('label:has-text("Individual (all vaccines)")');
  if (individualLabel) {
    await individualLabel.click();
  } else {
    throw new Error("Individual label not found");
  }
});
