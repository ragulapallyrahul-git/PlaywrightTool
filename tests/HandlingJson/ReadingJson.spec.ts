import{test,expect}from'@playwright/test'
import jread from 'fs';
test("Reading JSON File",async({page})=>
{
    const jreadData = JSON.parse(jread.readFileSync("./Myjson/Emp.json"));
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("input[type='text']").fill(jreadData.un);
    await page.waitForTimeout(1000)
    await page.locator("input[type='Password']").fill(jreadData.pwd);
    await page.waitForTimeout(1000)
    await page.locator("input[type='Submit']").click();
    await page.waitForTimeout(3000);
})