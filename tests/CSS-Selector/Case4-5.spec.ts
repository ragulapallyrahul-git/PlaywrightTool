import{test,expect}from '@playwright/test'
test("The testcase for Css Case-4 Xpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //syntax-"tagName[attribute='attributeanyvalue']"

    const UN = page.locator("input[class$='Text']").nth(0); //<input name="txtUserName" type="text" class="loginText" tabindex="1">
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("input[class$='Text']").nth(1).fill("playwright");//<input name="txtPassword" type="password" class="loginText" tabindex="2">
    await page.waitForTimeout(3000);
await page.locator("input.button").nth(0).click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(7000);
})