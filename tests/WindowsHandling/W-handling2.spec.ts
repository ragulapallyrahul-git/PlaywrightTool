import{test,expect,chromium}from'@playwright/test'
test("Test case on Handling Windows1",async({browser})=>
{
 const BE = await chromium.launch();
 const BC = await BE.newContext();
 const PPage = await BC.newPage();
 await PPage.waitForTimeout(2000);
 await PPage.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
 await PPage.waitForTimeout(2000);
 await PPage.locator("//input[@type = 'text']").fill("playwright");
 await PPage.waitForTimeout(2000);
await PPage.locator("//input[@type = 'password']").fill("playwright");
await PPage.waitForTimeout(2000);
await PPage.locator("//input[@type = 'Submit']").click();
await PPage.waitForTimeout(3000);
await PPage.locator("li#help").hover();
await PPage.waitForTimeout(3000);
const [Childpage]= await Promise.all
(
[
   BC.waitForEvent("page"),
   await PPage.locator("//span[text()='Help Contents']").click(),
]
)
await Childpage.waitForTimeout(3000);
console.log("Title of the Parent Page :"+ await PPage.title());
console.log("Title after click on Help Contents:" + await Childpage.title());
await Childpage.waitForTimeout(2000);

await PPage.bringToFront();
await PPage.waitForTimeout(2000);
await Childpage.bringToFront();
await Childpage.waitForTimeout(2000);
await PPage.bringToFront();
await PPage.waitForTimeout(2000);

})
