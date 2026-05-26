import{test,expect}from '@playwright/test'
test("The testcase for Absolute Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    const UN = page.locator("xpath=/html/body/form/table/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[2]/input")
    await UN.fill("playwright");
    //or-await page.locator("xpath=/html/body/form/table/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[2]").fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("xpath=/html/body/form/table/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/input").fill("playwright");
    await page.waitForTimeout(3000);
await page.locator("xpath=/html/body/form/table/tbody/tr/td/table/tbody/tr/td[2]/table/tbody/tr[4]/td[1]/input").click();
await page.waitForTimeout(7000);
console.log("My code is running successfully");
})