import{test,expect} from '@playwright/test'
test.beforeAll("Running Before All Before Running all testcases",async()=>
{
    console.log("-----Hai I Am Before All-----");
})
test.beforeEach("Running Before Each Running for every testcases",async()=>
{
    console.log("-----Hai I Am Before Each-----");
})
test.afterEach("Running After Each Running for every testcases",async()=>
{
    console.log("-----Hai I Am After Each-----");
})
test.afterAll("Running After Each Running after testcases",async()=>
{
    console.log("-----Hai I Am After All-----");
})
test("Testcase1",async()=>
{
console.log("Hai I am Testcase1");
})
test("Testcase2",async()=>
{
console.log("Hai I am Testcase2");
})