import{test,expect}from '@playwright/test';
test("Test case on Double click -Mouse Action", async({page})=>
{
    await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Doubleclick.html');
    await page.waitForTimeout(3000);
    const D = page.locator('//P[2]');
    await D.dblclick();
    await page.waitForTimeout(3000);
    
})