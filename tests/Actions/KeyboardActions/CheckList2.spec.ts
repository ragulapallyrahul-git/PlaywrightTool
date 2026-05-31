import{test,expect}from '@playwright/test';
test("Test case on CheckList2-KeybordActions", async({page})=>
{
    await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Country Name.Htm');
    await page.waitForTimeout(3000);
    const L = page.locator("//option");
    await page.keyboard.down('Control');
    await L.nth(1).click();
    await page.waitForTimeout(3000);
    await L.nth(4).click();
    await page.waitForTimeout(3000);
    await L.nth(6).click();
    await page.waitForTimeout(3000);
    await L.nth(8).click();
    await page.waitForTimeout(3000);
    await L.nth(10).click();
    await page.waitForTimeout(3000);
    await L.nth(13).click();
    await page.waitForTimeout(3000);

    
  
})