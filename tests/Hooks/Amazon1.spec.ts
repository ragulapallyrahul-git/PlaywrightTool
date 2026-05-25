import{test,expect,chromium} from '@playwright/test'
test("Open My Browser",async()=>
{
const bEngine = await chromium.launch();
const bcontext = await bEngine.newContext();
const mypage = await bcontext.newPage();
await mypage.goto('https://www.amazon.in/');
await mypage.pause();
await mypage.waitForTimeout(10000);

})