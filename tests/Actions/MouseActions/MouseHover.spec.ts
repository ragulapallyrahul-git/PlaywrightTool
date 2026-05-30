import{test,expect}from '@playwright/test';
test("Test case on Double click -Mouse Action", async({page})=>
{
    await page.goto('http://127.0.0.1/orangehrm-2.5.0.2/login.php');
    await page.waitForTimeout(3000);
    const U = page.locator("//input[@type = 'text']");
    await U.fill("playwright");
    await page.waitForTimeout(1000);
    const P = page.locator("//input[@type = 'password']");
    await P.fill("playwright");
    await page.waitForTimeout(1000);
    const L = page.locator("//input[@type = 'Submit']");
    await L.click();
    await page.waitForTimeout(3000);

    const H = page.locator("//li[@id='time']");
    await H.hover();
    await page.waitForTimeout(3000);
    const B = page.locator("//li[@id='benefits']");
    await B.hover();
    await page.waitForTimeout(3000);
    
})