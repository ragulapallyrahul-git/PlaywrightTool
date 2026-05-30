import{test,expect}from '@playwright/test';
test("Test case on Right click -Mouse Action", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    const R= page.locator('//a');
    await R.click({button : "right"});
    await page.waitForTimeout(3000);
    
})