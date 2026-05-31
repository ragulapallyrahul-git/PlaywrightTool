import{test,expect}from'@playwright/test'
test("Test case on HyperLink",async({page})=>
{
  await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Hyperlinks.html");
  await page.waitForTimeout(2000);
  const Links = page.locator('a');
  await page.waitForTimeout(2000);
  await Links.nth(0).click();
  await page.waitForTimeout(3000);
  await page.goBack();
  await Links.nth(1).click();
  await page.waitForTimeout(3000);

})