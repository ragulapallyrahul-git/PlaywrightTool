import{test,expect}from '@playwright/test'
test("Testcase on Confirm Dialogbox",async({page})=>
{
    await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/AlertsOkCancel.html");
    page.on("dialog",async(k)=>
    {
     console.log(k.type());
     expect(k.type()).toContain("confirm");
     console.log(k.message()); //get the text from the alert
     await page.waitForTimeout(2000);
     await k.accept();
      await page.waitForTimeout(3000);
    });

  await page.waitForTimeout(3000);
    const L = page.locator("//button");
    await L.click();
    await page.waitForTimeout(3000);

})