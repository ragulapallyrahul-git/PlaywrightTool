import{test,expect}from '@playwright/test';
test("Test case on Tab - KeybordActions", async({page})=>
{
    await page.goto('http://127.0.0.1/orangehrm-2.5.0.2/login.php');
    await page.waitForTimeout(3000);
    const U = page.locator("//input[@type = 'text']");
    await U.fill("playwright");
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);
    const P = page.locator("//input[@type = 'password']");
    await P.fill("playwright");
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab'); // Tab Keyword
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter'); // Enter Keyword
    await page.waitForTimeout(3000);
    
})