//Case1:Without any attributes but having a "text"
// <span>workshifts</span>
import{test,expect}from '@playwright/test'
test("The testcase on text",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[text()='<text value>']
await page.locator("//a[text()='OrangeHRM']").click();//<a href="http://www.orangehrm.com" target="_blank">OrangeHRM</a>
await page.waitForTimeout(7000);
})