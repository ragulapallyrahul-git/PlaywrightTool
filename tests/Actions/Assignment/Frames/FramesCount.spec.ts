import{test,expect}from '@playwright/test'
test.only("The testcase of Frames ",async({page})=>
{
    await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/Selenium Elements/Frames.html");
    await page.waitForTimeout(3000);

const Frames = page.locator("frame"); //just taking frames because the page fully covering frames
const FrameCount = await Frames.count();
console.log("No of Frames :" + FrameCount);
await page.waitForTimeout(3000);
//or
// const F = page.frames();
// console.log(frames.length);

})