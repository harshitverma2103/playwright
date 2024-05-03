const { test, expect } = require("@playwright/test");

test("search for the product", async ({ page }) => {
  await page.goto("https://www.cvs.com/");

  await page.click('#sec6-link12');
  
  await page.waitForSelector('#cvs-search-input-default-search');
  
  await page.fill('#cvs-search-input-default-search' , 'dove');
  await page.click('#search-submit-default-search');

  await page.waitForLoadState('load')
  await page.scroll({ top: 500 });
});
