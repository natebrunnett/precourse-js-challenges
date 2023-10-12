function noIVA (number)
{

    let withoutIVA = number - (number * .21);

    return withoutIVA;
}

console.log(noIVA(5.00));