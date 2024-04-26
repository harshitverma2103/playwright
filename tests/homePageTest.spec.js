const { test, expect } = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://www.cvs.com/");
  
  await page.click('#sec1-link4');
  await page.waitForEvent('domcontentloaded');

  await page.click('.cta-deals-banner-text.pulse-text-black.pulse-link');
  await page.waitForEvent('domcontentloaded');
  expect(page.url()).toBe("https://www.cvs.com/shop/ecdeals/c/106121?icid=shop-home-spring-renewal-ebr");
});
