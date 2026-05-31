import{test,expect}from '@playwright/test';
test("Test case on CheckList3-KeybordActions", async({page})=>
{
    test.setTimeout(100000);
    await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Country Name.Htm');
    await page.waitForTimeout(3000);
    const L = page.locator("//option"); //Storing Locator path in Variable-L
    const CountryCount = await L.count();
    await page.keyboard.down('Control');
    for(let i = 0; i<CountryCount; i++)
    {
        await L.nth(i).click();
        await page.waitForTimeout(100);
    }   

})
 