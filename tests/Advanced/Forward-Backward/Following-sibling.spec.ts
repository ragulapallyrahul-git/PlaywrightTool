//Taking path from Table with unique values
//Username-<input name="txtUserName" type="text" class="loginText" tabindex="1">
//pwd-<input> to write pwd path using UN
//Sub-<input> to write Sub path using UN
import{test,expect}from '@playwright/test'
test("The testcase for Following-sibling Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //table[@attribute='attributevalue']//following-sibling::input[1]or[2]

    const UN = page.locator("//table[@cellpadding='3']//following-sibling::input"); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//table[@cellpadding='3']//following-sibling::input//following::input[1]").fill("playwright"); //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("//table[@cellpadding='3']//following-sibling::input//following::input[2]").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})