import{test,expect}from '@playwright/test';
test("Test case on Drag and Drop - Mouse Action", async({page})=>
{
    await page.goto("file:/// C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Drag and Drop.html");
    await page.waitForTimeout(6000);
    // const Source = page.locator("//img");
    // const Target = page.locator("//div");
    // await page.dragAndDrop("Source","Target");
    await page.dragAndDrop("//img","//div");
    await page.waitForTimeout(3000);
    
})