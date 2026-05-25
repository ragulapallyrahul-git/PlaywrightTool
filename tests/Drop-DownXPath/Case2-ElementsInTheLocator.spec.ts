import{test,expect}from '@playwright/test'
test.only("The testcase for Case2 ",async({page})=>
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
const F = page.frameLocator("//iframe[@id='rightMenu']") //identified the frame
await expect(F.locator("//select[@id='loc_code']")).toBeVisible();//identified the element inside of the frame
await page.waitForTimeout(3000);
const DD = F.locator("//select[@id='loc_code']");
const noOfDDS = DD.locator("//option");//dropdown count elements
console.log("The Number of Elements in the dropdown:"+ await noOfDDS.count());//based on elements printing count
//<select name="loc_code" id="loc_code">
//<option value="-1">-Select-</option>
//<option value="0">Emp. ID</option>
//<option value="1">Emp. First Name</option>
//<option value="2">Emp. Last Name</option>
//<option value="3">Emp. Middle Name</option>
//<option value="6">Job Title</option>
//<option value="9">Employment status</option>
//<option value="7">Sub-Division</option>
//<option value="8">Supervisor</option>			</select>
const DDValues = await noOfDDS.allTextContents();
console.log(DDValues);//stores element in an array
})