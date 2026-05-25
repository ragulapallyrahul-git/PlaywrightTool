import{test,expect} from '@playwright/test'
test("Test case on TestId", async({page})=>
{
 await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/PlayWright WebElements/ByTestID.html');
 await page.waitForTimeout(3000);
 await page.getByTestId("login-button").click(); //<button onclick="window.location.href='https://www.google.com/'" data-testid="login-button">Login</button>
 await page.waitForTimeout(3000);
 await page.goBack();
 await page.getByTestId("username-input").fill("Rahul"); //<button onclick="window.location.href='https://www.google.com/'" data-testid="login-button">Login</button>
 await page.waitForTimeout(3000);
})