import{test,expect}from '@playwright/test';
test("Test case on CheckList1-KeybordActions", async({page})=>
{
    await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Country Name.Htm');
    await page.waitForTimeout(3000);
    const L = page.locator("//Select/option");
    const countycount = await L.count();
    console.log("The Number of Countries in the given checkList is :"+ countycount);
  
})