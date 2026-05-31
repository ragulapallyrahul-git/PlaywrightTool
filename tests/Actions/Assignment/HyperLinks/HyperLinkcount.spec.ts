import{test,expect}from'@playwright/test'
test("Test case on HyperLink",async({page})=>
{
  await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Hyperlinks.html");
  await page.waitForTimeout(2000);
  const Links = page.locator('a');
  const LinksCount = await Links.count();
  console.log("Total HyperLinks :"+ LinksCount);
})