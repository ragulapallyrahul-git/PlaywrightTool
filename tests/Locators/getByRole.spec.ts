import{test,expect} from '@playwright/test'
test("Test case on Role", async({page})=>
{
 await page.goto('http://127.0.0.1/orangehrm-2.5.0.2/login.php');
 await page.waitForTimeout(3000);
 await page.locator("//input[@type='text']").fill("playwright"); // //tagName[@attribute='attributevalue']
 await page.waitForTimeout(3000);
 await page.locator("//input[@name='txtPassword']").fill("playwright"); ////tagName[@attribute='attributevalue']
 await page.waitForTimeout(3000);
 await page.getByRole("button",{name:"Login"}).click(); //<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
 await page.waitForTimeout(5000);
})