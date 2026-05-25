
import{test,expect} from '@playwright/test'
test("Test case on placeHolder",async({page})=>
{
    await page.goto("file:///C:/Users/Dell/OneDrive/Desktop/Playwright Course/PlayWright WebElements/PlaceHolderPro.html")
    await page.waitForTimeout(3000);
    await page.setViewportSize({width:1680,height:1050});

    //<input type="text" placeholder="Username"> //User name text
    const UN = page.getByPlaceholder("Username");  
    await UN.fill("Sathwik"); //Real time - await page.getByPlaceholder("Username").fill("Hello");
    await page.waitForTimeout(3000);

    //<input type="password" placeholder="Password">
    const pwd = page.getByPlaceholder("Password");
    await pwd.fill("Rahul@123"); //or - await page.getByPlaceholder("Password").fill("Rahul@123");
    await page.waitForTimeout(3000);

    //<input type="email" placeholder="Email address">
    const email = page.getByPlaceholder("Email address");
    await email.fill("Navya@gmil.com"); //or - await page.getByPlaceholder("Email address").fill("rahul@gmil.com");
    await page.waitForTimeout(3000);
    
    //<textarea placeholder="Enter your comments"></textarea>
    const comm = page.getByPlaceholder("Enter your comments");
    await comm.fill("Sathwik is a good boy");
    await page.pause();
})