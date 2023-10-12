function swap (object)
{
    let switched = {
        alpha: object.beta,
        beta: object.alpha
    }
    return switched;
}


let myDictionary = {
    alpha: '1',
    beta: '2'}

let newObj = swap(myDictionary);
console.log(newObj);