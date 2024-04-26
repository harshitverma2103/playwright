// const { test, expect } = require("@playwright/test");

// test("Verify number of products on CVS homepage", async ({ page }) => {

//   await page.goto("https://www.cvs.com/");

//   await page.click('.divlink');
//   await page.waitForEvent('domcontentloaded');

//   await page.click('.pulse-text-black.pulse-link.viz-nav-cta-text');
//   await page.waitForEvent('domcontentloaded');

//   const numberOfProductsText = await page.textContent('.css-901oao.r-1inkyih.r-vw2c0b');
//   const numberOfProducts = parseInt(numberOfProductsText.match(/\d+/)[0]);
  
//   const expectedNumberOfProducts = 700;

//   expect(numberOfProducts).toBeGreaterThanOrEqual(expectedNumberOfProducts,
//     `Expected at least ${expectedNumberOfProducts} products, but found only ${numberOfProducts}`);
// })

// const { test, expect } = require("@playwright/test");

// test("Verify number of products on CVS homepage", async ({ page }) => {
//   // Navigate to CVS homepage
//   await page.goto("https://www.cvs.com/");

//   await Promise.all([
//     page.waitForNavigation(), // wait for navigation to complete after click
//     page.click('.divlink'), // Assuming this is the correct selector to navigate
//   ]);

//   await Promise.all([
//     page.waitForNavigation(), // wait for navigation to complete after click
//     page.click('.pulse-text-black.pulse-link.viz-nav-cta-text'), // Assuming this is the correct selector to navigate
//   ]);

//   // Wait for products to load (assuming the page updates dynamically)
//   await page.waitForSelector('.css-901oao.r-1inkyih.r-vw2c0b');

//   // Get the number of products
//   const numberOfProductsText = await page.textContent('.css-901oao.r-1inkyih.r-vw2c0b');
//   const numberOfProducts = parseInt(numberOfProductsText.match(/\d+/)[0]);

//   const expectedNumberOfProducts = 700;

//   // Check if the number of products is as expected
//   expect(numberOfProducts).toBeGreaterThanOrEqual(expectedNumberOfProducts,
//     `Expected at least ${expectedNumberOfProducts} products, but found only ${numberOfProducts}`);
// });
