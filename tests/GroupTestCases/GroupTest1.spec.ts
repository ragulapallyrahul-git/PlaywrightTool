import{test,expect} from '@playwright/test';
test.skip("Group1-testcase1",async()=>
{
 console.log("Hai i am testcase1-group1");
})
test("Group1-testcase2",async()=>
{
 console.log("Hai i am testcase2-group1");
})
test.fail("Group1-testcase3",async()=> //to fail testcase
{
 expect(5).toBe(15);    
})
test.only("Group1-testcase4",async()=> //to run only this testcase
{
 console.log("Hai i am testcase4-group1");
})
test.fixme("Group1-testcase5",async()=> //to skip should fix it in next sprint
{
 console.log("Hai i am testcase5-group1");
})