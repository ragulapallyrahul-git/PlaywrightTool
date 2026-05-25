import{test,expect}from '@playwright/test'
test.only("The testcase for Case4 ",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    //tagName[@attribute='attributevalue']
    
    const UN = page.locator("//input[@name='txtUserName']"); //tagName[@attribute='attributevalue']
    await UN.fill("playwright");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='txtPassword']").fill("playwright");    //<input name="txtPassword" type="password" class="loginText" tabindex="2">
    // //tagName[@attribute='attributevalue']
    await page.waitForTimeout(3000);
await page.locator("//input[@value='Login']").click();//<input type="Submit" name="Submit" value="Login" class="button" tabindex="3">
await page.waitForTimeout(3000);
await page.frameLocator("//iframe[@id='rightMenu']") //identified the frame

//await expect(F.locator("//select[@id='loc_code']")).toBeVisible();//identified the element inside of the frame
await page.waitForTimeout(3000);       //index
//<select name="loc_code" id="loc_code"> 0
//<option value="-1">-Select-</option>1
//<option value="0">Emp. ID</option>2
//<option value="1">Emp. First Name</option>3
//<option value="2">Emp. Last Name</option>4
//<option value="3">Emp. Middle Name</option>5
//<option value="6">Job Title</option>6
//<option value="9">Employment status</option>7
//<option value="7">Sub-Division</option>8
//<option value="8">Supervisor</option>	9		</select>
const DD = page.frameLocator("//iframe[@id='rightMenu']").locator("//select[@id='loc_code']");
await DD.selectOption("Emp. First Name");
await page.waitForTimeout(3000);
//or-await F.locator("//select[@id='loc_code']").selectOption({index:3});

})