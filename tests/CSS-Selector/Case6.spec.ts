import{test,expect}from '@playwright/test'
test("The testcase for Css Case-6 Xpath",async({page})=>
{
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    //syntax-"tagName#Idattributevalue" only for Id values

    const UN = page.locator("textarea#APjFqb");
    await UN.fill("playwright");
     //<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="true" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwiattuM59GUAxUxka8BHa4QM4sQ39UDCBk" aria-activedescendant="" style=""></textarea>
    await page.waitForTimeout(3000);
     const GS = page.locator("input.gNO89b").nth(0); //<input class="gNO89b" value="Google Search" aria-label="Google Search" name="btnK" role="button" tabindex="0" type="submit" data-ved="0ahUKEwiattuM59GUAxUxka8BHa4QM4sQ4dUDCCc">
    await GS.click();
    await page.waitForTimeout(3000);
    const Nav = page.locator("h3.LC20lb MBeuO DKV0Md"); //<input class="gNO89b" value="Google Search" aria-label="Google Search" name="btnK" role="button" tabindex="0" type="submit" data-ved="0ahUKEwiattuM59GUAxUxka8BHa4QM4sQ4dUDCCc">
    await Nav.click();
    await page.waitForTimeout(3000);
})