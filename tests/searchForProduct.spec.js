const { test, expect } = require("@playwright/test");

test("search for the product", async ({ page }) => {
  await page.goto("https://www.cvs.com/");

  await page.click('#sec6-link12');
  
  // Wait for the search input field to be visible
  await page.waitForSelector('#cvs-search-input-default-search');
  
  await page.fill('#cvs-search-input-default-search' , 'dove');
  await page.click('#search-submit-default-search');

  await page.waitForLoadState('load')
  // Scroll the page by 500 pixels
  await page.scroll({ top: 500 });
});
