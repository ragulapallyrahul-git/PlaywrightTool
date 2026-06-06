import{test,expect}from '@playwright/test'
import myExcel from 'xlsx'

function ReadData(fpath:string , sname:string):any
{
    const wb = myExcel.readFile(fpath);  //wb-workbook
    const ws = wb.Sheets[sname]; //ws-worksheet
    const mydata = myExcel.utils.sheet_to_json(ws,{header : 1});
    return mydata;
}
 const data = ReadData("./ExcelData/EmpData.xlsx","EMPSheet");
 test ("Reading data from ExcelSheet",async({page})=>
{
    console.log("Testing the Application");
    console.log(data[3][0]);
})
