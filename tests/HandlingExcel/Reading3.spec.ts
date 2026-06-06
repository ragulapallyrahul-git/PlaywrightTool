import{test,expect}from '@playwright/test'
import myExcel from 'xlsx'

function ReadData(fpath:string , sname:string):any
{
    const wb = myExcel.readFile(fpath);  //wb-workbook
    const ws = wb.Sheets[sname]; //ws-worksheet
    const mydata = myExcel.utils.sheet_to_json(ws,{header : 1});
    return mydata;
}

 test ("Reading data from ExcelSheet",async({page})=>
{
    console.log("Testing the Application");
    const data = ReadData("./ExcelData/EmpData.xlsx","EMPSheet2");
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("input[type='text']").fill(data[1][0]);
     await page.waitForTimeout(1000);
    await page.locator("input[type='password']").fill(data[1][1]);
    await page.waitForTimeout(1000);
    await page.locator("input[type='Submit']").click();
    await page.waitForTimeout(3000);
})
