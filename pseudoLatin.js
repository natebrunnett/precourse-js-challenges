// Pseudo Latin

// Create a function which takes a string as an argument and 
// moves the first letter of each word to the end of it, then adds "ay"
// to the end of the word. Leave punctuation marks untouched.

var sentence = "This is my first program using objects and arrays";
var manipulated = sentence.split(" ");
var allpunct = ['.', ',', '\'', '!', '?'];

function latinize(parsed)
{
    for (let r = 0; r < parsed.length; r++)
    {
        let data = Array.from(parsed[r]);
        data.push(data.shift().toLowerCase());
        data = data.join("");
        data += "ay";
        parsed[r] = data;

    }

    return parsed;
}

console.log(latinize(manipulated).join(" "));
