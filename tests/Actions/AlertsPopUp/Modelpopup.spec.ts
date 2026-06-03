import{test,expect}from '@playwright/test'
test("Testcase on Confirm Dialogbox",async({page})=>
{
    await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Model Popup.html");
    await page.waitForTimeout(3000);
    const L = page.locator("//button");
    await L.click();
    await page.waitForTimeout(3000);
    const C = page.locator("span.close");
    await C.click();
    await page.waitForTimeout(3000);
})