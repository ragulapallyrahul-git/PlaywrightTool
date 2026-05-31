import{test,expect}from '@playwright/test';
test("Test case on Keyboard1-KeybordActions", async({page})=>
{
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(6000);
    const U = page.locator("//textarea[@role='combobox']");
    await U.fill("today weather report in hyderabad");
    await page.waitForTimeout(2000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(3000);
    
    await page.keyboard.press('Control+A'); // CTRL+A-SelectAll
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+X'); // CTRL+X-Cut
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+V'); // CTRL+V-Paste
    await page.waitForTimeout(3000);
    await page.keyboard.press('Enter'); // Enter Keyword
    await page.waitForTimeout(3000);
    
})