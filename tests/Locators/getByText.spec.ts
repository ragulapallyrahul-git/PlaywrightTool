import{test,expect} from '@playwright/test'
test("Test case on Text", async({page})=>
{
 await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/PlayWright WebElements/ByTextFile.html');
 await page.waitForTimeout(3000);
 await page.getByText("MyGoogle").click(); //<button onclick="window.location.href='https://www.google.com/'">MyGoogle</button>
 await page.waitForTimeout(3000);
 await page.goBack();
 await page.waitForTimeout(2000);
 await page.getByText("Go to TheMask").click(); //<a href="https://prourls.info/mXZUIq">Go to TheMask</a>
 await page.waitForTimeout(3000);
 await page.goBack();
 await page.pause();
})