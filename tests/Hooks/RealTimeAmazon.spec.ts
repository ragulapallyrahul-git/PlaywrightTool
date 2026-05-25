import{test,expect,chromium} from '@playwright/test'
test("Open My Browser",async({page})=>
{
//const bEngine = await chromium.launch();
//const bcontext = await bEngine.newContext();
//const mypage = await bcontext.newPage();
await page.setViewportSize({width:1680,height:1050});//to maximize the page
await page.goto('https://www.amazon.in/');
await page.pause();
//await page.waitForTimeout(10000);

})