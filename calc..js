/* I can easily see the functionality of the switch statement, how to
increment variables, and how to write a true / false statement
Programmed and completed by Nathaniel J Brunnett

Debug:
1. Click on the Debug icon
2. Click on create a launch.json file link
3. Select Node.js as your environment
4. Make sure the file.js is linked to the JSON.
*/

function calc(parameter1, parameter2, parameter3)
{
    function getOperator(op) {
        switch (op)
        {
            case "+":
                return function(a, b) { return a + b; };
            case "-":
                return function(a, b) { return a - b; };
            case "*":
                return function(a, b) { return a * b; };
            case "/":
                return function(a, b) { return a / b; };
            default:
                throw new Error("Invalid operator: " + op);
        }
    }


    let defaultparameter = 0
    if (["*", "/"].indexOf(parameter2) !== -1 & parameter3 == null)
    {
        defaultparameter++;
        return getOperator(parameter2)(parameter1,defaultparameter);
    }
    if (["+", "-"].indexOf(parameter2) !== -1 & parameter3 == null)
    {
        return getOperator(parameter2)(parameter1,defaultparameter);
    }
    if (["+", "-", "*", "/"].indexOf(parameter3) !== -1)
    {
        return getOperator(parameter3)(parameter1,parameter2);
    }     

}


console.log(calc(3,"-"));