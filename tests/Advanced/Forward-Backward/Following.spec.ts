//case4-with any attributes without any "text"
//Username-<input name="txtUserName" type="text" class="loginText" tabindex="1">
//pwd-<input> to write pwd path using UN
//Sub-<input> to write Sub path using UN
import{test,expect}from '@playwright/test'
test("The testcase for Following Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[@attribute='attributeanyvalue']//following::tagName[1]or[2]

    const UN = page.locator("//input[@name='txtUserName']"); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='txtUserName']//following::input[1]").fill("playwright"); //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("//input[@name='txtUserName']//following::input[2]").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})