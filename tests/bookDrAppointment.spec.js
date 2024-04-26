const { test, expect } = require("@playwright/test");

test("book appointment", async ({ page }) => {
  await page.goto("https://www.cvs.com/");

  await Promise.all([
    page.click("#sec4-link5"),
    page.waitForNavigation()
  ]);

  await Promise.all([
    page.click("#inperson"),
    page.waitForNavigation()
  ]);

  await page.fill("input#location.input", "07305");
  await Promise.all([
    page.click("a#find-care-btn.find-button"),
    page.waitForNavigation()
  ]);

  await page.fill("#patientInfoDobNew_month", "02");
  await page.fill("#patientInfoDobNew_day", "04");
  await page.fill("#patientInfoDobNew_year", "2004");

  await Promise.all([
    page.click('button:has-text("Next")'),
    page.waitForNavigation()
  ]);

  await Promise.all([
    page.click('//label[@for="date_4-25"]'),
    page.waitForSelector('//span[@class="short" and text()="12:50 PM"]')
  ]);

  await Promise.all([
    page.click('//label[@for="date_4-25"]'),
    page.waitForNavigation()
  ]);

  const continueBtn = page.locator('button:has-text("Continue")');
  await Promise.all([
    continueBtn.click(),
    page.waitForNavigation({ timeout: 60000 })
  ]);

  await page.fill("#patientInfoFirstName", "James"); // Corrected typo: "patientInfoFiyrstName" to "patientInfoFirstName"
  await page.fill("#patientInfoLastName", "Clear");
  await page.fill("#patientInfoAddressLine1", "1234 Main Street");
  await page.fill("#patientInfoCity", "Clifton");
  await page.selectOption("select#patientInfoState", { value: "NJ" });
  await page.fill("#patientInfoZipCode", "07305");
  await page.waitForSelector("#patientInfoLegalSex_1");
  await page.click("#patientInfoLegalSex_1");
  await page.fill("#patientInfoEmail", "harshitv8445@gmail.com");
  await page.fill("#patientInfoPhoneNumber", "4123451327");

  // Clicking "Continue" again and waiting for navigation to complete
  const continueBtns = page.locator('button:has-text("Continue")');
  await Promise.all([
    continueBtns.waitForElementState('visible'),
    continueBtns.click(),
    page.waitForNavigation()
  ]);

  await page.waitForURL(
    "https://www.cvs.com/health-services/scheduling/review?lob=mc&flow=core&rfvMappingId=172&rfvId=4&zipcode=07305"
  );

  const label = await page.locator('label.ps-label[for="ps-radio-688735"]');
  await label.click();
  const button = await page.locator(
    'button.ps-button.ps-button-solid:has-text("Confirm visit")'
  );
  await Promise.all([
    button.waitForElementState('visible'),
    button.click(),
    page.waitForTimeout(5000)
  ]);

  const confirmationMessage = await page.locator('.confirmation-message');
  await expect(confirmationMessage).toHaveText('Your appointment has been booked successfully.');
});
