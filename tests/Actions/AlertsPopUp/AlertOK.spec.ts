import{test,expect}from '@playwright/test'
test("Testcase on Alert message",async({page})=>
{
    await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Alert Message.html");
    

    page.on("dialog",async(k)=>
    {
     console.log(k.type());
     console.log(k.message());
     await page.waitForTimeout(2000);
     await k.accept();
      await page.waitForTimeout(3000);
    });

  await page.waitForTimeout(3000);
    const L = page.locator("//button");
    await L.click();
    await page.waitForTimeout(3000);

})