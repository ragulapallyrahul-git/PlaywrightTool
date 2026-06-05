import{test,expect}from '@playwright/test'
test("Testcase on File Upload",async({page})=>
{
    await page.setDefaultTimeout(10000);
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    const UN = page.locator("input[type='text']").fill("playwright");
     await page.waitForTimeout(1000);
    const PWD = page.locator("input[type='password']").fill("playwright");
     await page.waitForTimeout(1000);
    const SUB = page.locator("input[type='Submit']").click();
     await page.waitForTimeout(2000);
    await page.locator("li[id='pim']").hover();
    await page.waitForTimeout(1000);
    await page.locator("//span[text()='Add Employee']").click();
    await page.waitForTimeout(1000);
    const F = page.frameLocator("iframe[id='rightMenu']");
    await page.waitForTimeout(1000);
    await F.locator("input[id='txtEmployeeId']").fill("898924");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpLastName']").fill("Tiger");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpFirstName']").fill("cheetha");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpMiddleName']").fill("Forest");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpNickName']").fill("King");
    await page.waitForTimeout(2000);
    await F.locator("input[id='photofile']").setInputFiles("./images/MyPic.jpg");
     await page.waitForTimeout(2000);
     await F.locator("input.savebutton").click();
    await page.waitForTimeout(2000);
     await F.locator("input.backbutton").click();
     await page.waitForTimeout(2000);
    
})