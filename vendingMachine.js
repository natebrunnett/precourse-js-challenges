function vendingMachine(money, snackID)
{

    let myDictionary = {
        a1: {
            name: "beef jerky",
            stock: 10,
            price: 3.00,
        },
        a2: {
            name: "ramen noodles",
            stock: 10,
            price: 2.50,
        },
        a3: {
            name: "iced tea",
            stock: 8,
            price: 2.00,
        },
    }

    /*get dictionary item, detect if stock is above 0 and
    if money is above price*/

    if(money >= myDictionary[snackID].price & myDictionary[snackID].stock > 0)
        return "your " + myDictionary[snackID].name.toString() + " has been served. Your change is " + (money - myDictionary[snackID].price).toString();
    else
        return "invalid selection";

}   

console.log(vendingMachine(20.00, "a2"));