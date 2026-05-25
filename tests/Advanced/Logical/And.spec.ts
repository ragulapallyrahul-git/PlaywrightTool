//In Same html code we can take 2 different attributes and values
import{test,expect}from '@playwright/test'
test("The testcase on And",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[@attribute='attributevalue' and @attribute='attributevalue')]

    const UN = page.locator("//input[@class='loginText' and @type='text']"); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='txtPassword' and @type = 'password']").fill("playwright");    //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("//input[@type='Submit' and @tabindex ='3']").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})