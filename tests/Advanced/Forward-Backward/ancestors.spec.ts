//Syntax-//tagName[@attribute='attributevalue']//preceding::input[1]or[2]
//Username-<input> to write UN path using Sub
//pwd-<input> to write pwd path using Sub
//Sub-<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
import{test,expect}from '@playwright/test'
test("The testcase for Following-sibling Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[contains(@attribute,'attributeanyvalue')]

    const UN = page.locator("//input[@type='Submit']//preceding::input[2]"); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[@type='Submit']//preceding::input[1]").fill("playwright"); //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("//input[@type='Submit']").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})