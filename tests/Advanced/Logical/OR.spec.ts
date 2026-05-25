//Case-2:Attributes are duplicates
import{test,expect}from '@playwright/test'
test("The testcase on And",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[@attribute='attributevalue' or @attribute='attributevalue')]

    const UN = page.locator("//input[@class='Hai' or @tabindex='1']"); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='hello' or @tabindex = '2']").fill("playwright");    //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("//input[@type='S' or @tabindex ='3']").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})