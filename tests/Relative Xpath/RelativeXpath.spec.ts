import{test,expect}from '@playwright/test'
test("The testcase for Relative Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[@attribute='attributevalue']
    await UN.fill("playwright");
    const UN = page.locator("//input[@name='txtUserName']"); //tagName[@attribute='attributevalue']
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='txtPassword']").fill("playwright");    //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    // //tagName[@attribute='attributevalue']
    await page.waitForTimeout(3000);
await page.locator("//input[@value='Login']").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})