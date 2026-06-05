import{test,expect}from '@playwright/test'
test("Testcase on File Upload",async({page})=>
{
    await page.setDefaultTimeout(11000);
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    await page.screenshot({path : "./MyEvidences/HomePage.jpg"});
    const UN = page.locator("input[type='text']").fill("playwright");
     await page.waitForTimeout(1000);
    const PWD = page.locator("input[type='password']").fill("playwright");
     await page.waitForTimeout(1000);
     await page.screenshot({path : "./MyEvidences/BeforeLogin.jpg"});
     await page.locator("table[cellpadding='3']").screenshot({path : "./MyEvidences/Table.jpg"});
    const SUB = page.locator("input[type='Submit']").click();
     await page.waitForTimeout(2000);
     await page.screenshot({path : "./MyEvidences/AfterLogin.jpg"});
    await page.locator("li[id='pim']").hover();
    await page.waitForTimeout(1000);
    await page.locator("//span[text()='Add Employee']").click();
    await page.waitForTimeout(1000);
    await page.screenshot({path : "./MyEvidences/AfterAdd Employeepage.jpg"});
    const F = page.frameLocator("iframe[id='rightMenu']");
    await page.waitForTimeout(1000);
    await F.locator("input[id='txtEmployeeId']").fill("898924");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpLastName']").fill("Tiger1");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpFirstName']").fill("cheetha1");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpMiddleName']").fill("Forest1");
    await page.waitForTimeout(2000);
     await F.locator("input[id='txtEmpNickName']").fill("King1");
    await page.waitForTimeout(2000);
    
    await F.locator("input[id='photofile']").setInputFiles("./images/MyPic.jpg");
     await page.waitForTimeout(2000);
     await page.screenshot({path : "./MyEvidences/AfterFileLoad.jpg"});
    //  await F.locator("input.savebutton").click();
    //  await page.waitForTimeout(2000);
     await F.locator("input[name='photofile']").screenshot({path : "./MyEvidences/Upload.jpg"});

    //  await F.locator("input.backbutton").click();
     await page.waitForTimeout(2000);
    
})