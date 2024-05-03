const { test, expect } = require("@playwright/test");

test("book appointment", async ({ page }) => {
  await page.goto("https://www.cvs.com/");

  await Promise.all([page.click("#sec4-link5"), page.waitForNavigation()]);

  await Promise.all([page.click("#inperson"), page.waitForNavigation()]);

  await page.fill("input#location.input", "07305");
  await Promise.all([
    page.click("a#find-care-btn.find-button"),
    // page.waitForNavigation(),
  ]);

  await page.fill("#patientInfoDobNew_month", "02");
  await page.fill("#patientInfoDobNew_day", "04");
  await page.fill("#patientInfoDobNew_year", "2004");

  await Promise.all([
    page.click('button:has-text("Next")'),
    page.waitForSelector(".neb-loading-spinner", { state: "hidden" }),
  ]);

  const selectDate = ".button-div:nth-child(2)";
  await page.waitForSelector(selectDate);
  await page.click(selectDate);

  const secondTimeSelector = '.available-times-container .button-div:nth-child(2)';
  await page.click(secondTimeSelector);

  const continueBtn = page.locator('button:has-text("Continue")');
  await Promise.all([
    continueBtn.click(),
    page.waitForNavigation({ timeout: 60000 }),
  ]);
  page.waitForLoadState("domcontentloaded")
  await page.fill("#patientInfoFirstName", "James");
  await page.fill("#patientInfoLastName", "Clear");
  await page.fill("#patientInfoAddressLine1", "1234 Main Street");
  await page.fill("#patientInfoCity", "Clifton");
  await page.selectOption("select#patientInfoState", { value: "NJ" });
  await page.fill("#patientInfoZipCode", "07305");
  await page.waitForSelector("#patientInfoLegalSex_1");
  await page.click("#patientInfoLegalSex_1");
  await page.fill("#patientInfoEmail", "harshitv8445@gmail.com");
  await page.fill("#patientInfoPhoneNumber", "4123451327");

  const continueBtns = page.locator('button:has-text("Continue")');
  console.log(continueBtns)
  await Promise.all([
    continueBtns.click(),
  ]);
  page.waitForNavigation(),

  await page.waitForURL(
    "https://www.cvs.com/health-services/scheduling/review?lob=mc&flow=core&rfvMappingId=172&rfvId=4&zipcode=07305"
  );

 await page.click("#reviewAddVaccineToVisit_1");
  const confirmVisitBtn = await page.locator(
    'button.ps-button.ps-button-solid:has-text("Confirm visit")'
  );
  await Promise.all([
    confirmVisitBtn.click(),
    page.waitForTimeout(5000),
  ]);

  const confirmationMessage = await page.locator("#confirmation-heading");
  await expect(confirmationMessage).toHaveText(
    " Your visit is scheduled "
  );
});
