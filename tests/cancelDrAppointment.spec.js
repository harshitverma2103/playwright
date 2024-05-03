const { test, expect } = require("@playwright/test");

async function fillConfirmationCode(page, code) {
    if (code.toUpperCase() !== code) {
        code = code.toUpperCase();
    }
    if (code.length !== 7) {
        throw new Error("Confirmation code must be 7 characters long.");
    }
    await page.fill("#confirmationCode", code);
}

const confirmationCode = "";

test("cancel appointment", async ({ page }) => {
    await page.goto("https://www.cvs.com/");
    await page.click("#sec3-link4");
    await page.waitForEvent("domcontentloaded");
    await page.click("#reschedule-cancel-link");
    await fillConfirmationCode(page, confirmationCode);
    await page.click("#optLastName");
    await page.fill("#lastName", "clear");
    const confirmationMessage = await page.locator(".content title");
  await expect(confirmationMessage).toHaveText(
    " Locate your visit information to reschedule or cancel"
  );
});
