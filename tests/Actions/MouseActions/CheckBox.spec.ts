import{test,expect}from'@playwright/test'
test("testcase on CheckBox",async({page})=>
{
    await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Country Check box.html");
    await page.waitForTimeout(3000);
    const A = page.locator("//input[1]");
    await A.check();
    await page.waitForTimeout(2000);
    const B = page.locator("//input[2]");
    await B.check();
    await page.waitForTimeout(2000);
    const C = page.locator("//input[3]");
    await C.check();
    await page.waitForTimeout(2000);
    const D = page.locator("//input[4]");
    await D.check();
    await page.waitForTimeout(2000);
    const E = page.locator("//input[5]");
    await E.check();
    await page.waitForTimeout(2000);
})