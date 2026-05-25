import{test,expect} from '@playwright/test';
test("Group2-testcase1",{tag:'@Regression'},async()=>
{
 console.log("Hai i am testcase1-group2-Reg");
})
test("Group1-testcase2",{tag:'@Sanity'},async()=>
{
 console.log("Hai i am testcase2-group2-Sanity");
})
test("Group1-testcase3",{tag:'@Smoke'},async()=> 
{
 console.log("Hai i am testcase3-group2 Smoke");    
})
test("Group1-testcase4",{tag:'@UAT'},async()=> 
{
 console.log("Hai i am testcase4-group2-UAT");
})
test("Group1-testcase5",{tag:'@SIT'},async()=> 
{
 console.log("Hai i am testcase5-group1-SIT");
})
// To Run - npx playwright test ./tests/GroupTestCases/TypesOfTesting.spec.ts --grep "@Regression"
//// To Run Both- npx playwright test ./tests/GroupTestCases/TypesOfTesting.spec.ts --grep "@Regression/@Sanity"