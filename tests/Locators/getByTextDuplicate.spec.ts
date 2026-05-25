import{test,expect} from '@playwright/test'
test("Test case on TextDuplicate", async({page})=>
{
 await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/PlayWright WebElements/ByTextFileDuplicate.html');
 await page.waitForTimeout(3000);
 await page.getByText("Login").nth(0).click(); //<button onclick="window.location.href='https://onlinesbi.sbi.bank.in/'">Login</button>
 await page.waitForTimeout(3000);
 await page.goBack();
 await page.waitForTimeout(2000);
 await page.getByText("Login").nth(1).click(); //<button onclick="window.location.href='https://www.icici.bank.in/'">Login</button>
 await page.waitForTimeout(3000);
 await page.goBack();
 await page.getByText("Go to HDFC").click();
 await page.waitForTimeout(3000);
 await page.goBack();
await page.waitForTimeout(3000);
 
 
})