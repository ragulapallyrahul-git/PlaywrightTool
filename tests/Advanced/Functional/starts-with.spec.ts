import{test,expect}from '@playwright/test'
test("The testcase for starts-with Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[starts-with(@attribute,'attributestartingvalue')]

    const UN = page.locator("//input[starts-with(@name,'txtU')]"); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[starts-with(@type,'pa')]").fill("playwright");    //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("//input[starts-with(@type,'S')]").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})