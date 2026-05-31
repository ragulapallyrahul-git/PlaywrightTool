import{test,expect}from '@playwright/test'
test.only("The testcase for Case2 ",async({page})=>
{
    test.setTimeout(100000);
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(2000);
    //tagName[@attribute='attributevalue']
    
    const UN = page.locator("//input[@name='txtUserName']"); //tagName[@attribute='attributevalue']
    await UN.fill("playwright");
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='txtPassword']").fill("playwright");    //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    // //tagName[@attribute='attributevalue']
    await page.waitForTimeout(2000);
await page.locator("//input[@value='Login']").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(2000);
const F = page.frameLocator("//iframe[@id='rightMenu']") //identified the frame
await page.waitForTimeout(2000);
const DD = F.locator("//select[@id='loc_code']");
const noOfDDS = DD.locator("//option");//dropdown count elements
console.log("The Number of Elements in the dropdown:"+ await noOfDDS.count());//based on elements printing count
//<select name="loc_code" id="loc_code">
//<option value="-1">-Select-</option>
//<option value="0">Emp. ID</option>
//<option value="1">Emp. First Name</option>
//<option value="2">Emp. Last Name</option>
//<option value="3">Emp. Middle Name</option>
//<option value="6">Job Titl-e</option>
//<option value="9">Employment status</option>
//<option value="7">Sub-Division</option>
//<option value="8">Supervisor</option>			</select>
await DD.selectOption({index:1});
await page.waitForTimeout(1000);
await DD.selectOption("-Select-");
await page.waitForTimeout(1000);
await DD.selectOption("Emp. First Name");
await page.waitForTimeout(1000);
await DD.selectOption("-1");
await page.waitForTimeout(1000);
await DD.selectOption("Emp. Last Name");
await page.waitForTimeout(1000);
await DD.selectOption({index:0});
await page.waitForTimeout(1000);
await DD.selectOption("3");
await page.waitForTimeout(1000);
await DD.selectOption("-Select-");
await page.waitForTimeout(1000);
await DD.selectOption("Job Title");
await page.waitForTimeout(1000);
await DD.selectOption("-Select-");
await page.waitForTimeout(1000);
await DD.selectOption("Employment status");
await page.waitForTimeout(1000);
await DD.selectOption("-1");
await page.waitForTimeout(1000);
await DD.selectOption("Sub-Division");
await page.waitForTimeout(1000);
await DD.selectOption("-Select-");
await page.waitForTimeout(1000);
await DD.selectOption("Supervisor");
await page.waitForTimeout(1000);
await DD.selectOption({index:0});
await page.waitForTimeout(1000);

})