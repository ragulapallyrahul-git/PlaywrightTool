import{test,expect}from '@playwright/test'
test("The testcase for Css Case-3 Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //syntax-"tagName[attribute='attributeanyvalue']"

    const UN = page.locator("input[name*='tUser']"); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("input[name*='tPass']").fill("playwright");//<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("input[tabindex='3']").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})