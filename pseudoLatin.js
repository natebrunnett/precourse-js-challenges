function isPunct(char)
{
    var onlyPunctuation = "/^(?:[!-#%-,-/:;@-_";
    for (let r= 0; r < onlyPunctuation.length(); r++)
    {
        if(onlyPunctuation[r] == char)
            return true
    }
    return false;
}


function myfunc(sentence)
{

    let myArray = sentence.split(" ");
    let finalstr = "";

    for (let i = 0; i < myArray.length; i++)
    {
        let reformmated = "" 
        let theword = myArray[i] /*String */

        if (theword.length >= 2);
        {
            reformmated = theword; /*redeclare variable*/
            reformmated = theword.slice(1); /*first index is taken off*/
            reformmated = reformmated + theword[0] + "ay";

        }

        finalstr = finalstr + reformmated + " ";
    }
    
    return finalstr;
}

console.log(myfunc("This is actually a sentence!"));