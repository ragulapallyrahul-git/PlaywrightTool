import{test,expect}from '@playwright/test'
test.only("The testcase of Frames ",async({page})=>
{
    await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Frames.html");
    await page.waitForTimeout(3000);

const Frames = page.frames(); //just taking frames because the page fully covering frames
await page.locator("//frame[3]");
await page.waitForTimeout(3000);
 const Links = page.locator('a');
  await page.waitForTimeout(2000);
  await Links.nth(0).click();
  await page.waitForTimeout(3000);
  await page.goBack();
  await page.waitForTimeout(3000);

  await Links.nth(1).click();
  await page.waitForTimeout(3000);



})