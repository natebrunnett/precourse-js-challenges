// Write a function called swap that takes one argument, an object,
// and returns another object where the key/value pairs have been swapped. 
//The original object should not be modified.

// Example:

function swap(obj)
{
    var retobj = {};
    for(var key in obj)
    {
        console.log("obj = "+ obj)
        console.log("key = "+ key)
        console.log("obj[key] = "+ obj[key])
        retobj[obj[key]] = key;
    }
    return retobj;
}

var obj = {a: 1, b: 2}
console.log(obj)
console.log(swap(obj))
//var newObje = swap(obj) 
//newObje // {1: 'a', 2: 'b'} 
