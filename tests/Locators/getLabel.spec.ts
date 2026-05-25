import{test,expect}from '@playwright/test'
test("Test case on Label", async({page})=>
{
 await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/PlayWright WebElements/ByLabel.html');
 await page.waitForTimeout(5000);

 await page.getByLabel("Username").fill("Rahul.R"); //<label for="username">Username</label>
 await page.waitForTimeout(5000);
})