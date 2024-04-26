const { test, expect } = require("@playwright/test");

test("Verify user can change CVS store by zipcode", async ({ page }) => {
  await page.goto("https://www.cvs.com/");

  await page.click("#sec4-link5");

  await page.waitForEvent("domcontentloaded");

  await page.click("#inperson");

  await page.fill("input#location.input", "07305");

  await page.click("a#find-care-btn.find-button");
  await page.waitForEvent("domcontentloaded");

  await page.fill("#patientInfoDobNew_month", "02");
  await page.fill("#patientInfoDobNew_day", "04");
  await page.fill("#patientInfoDobNew_year", "2004");

  await page.click(".ps-button.ps-button-solid");

  const actualText = await page.textContent("#search-locator-results-header");
  console.log(actualText);

  const expectedText = " 25 location(s) found near 07305 ";

  expect(actualText).toEqual(expectedText);
});
