import{test,expect}from '@playwright/test';
test("Test case on Double click -Mouse Action", async({page})=>
{
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(6000);
    // const U = page.locator("//a[text()='Sell under Amazon Accelerator']");
    // await page.waitForTimeout(3000);
    // await U.click();
    //or
    await page.mouse.wheel(56,4412); // it takes more time so manual process not recomended
    await page.waitForTimeout(1000);
    const U = page.locator("//a[text()='Sell under Amazon Accelerator']");

    await page.waitForTimeout(3000);
    await U.click();

await page.waitForTimeout(3000);
})