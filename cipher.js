/* 

Here I can see a simplistic example of iterating through 
each character of a string and modifying it.

Here I also have a nested function which is presently working.

*/


function cipher(message) {
  function getCipher(char) {
    switch (char) {
      case " ":
        return " ";
      case "A":
        return "Q";
      case "B":
        return "W";
      case "C":
        return "E";
      case "D":
        return "R";
      case "E":
        return "T";
      case "F":
        return "Y";
      case "G":
        return "U";
      case "H":
        return "I";
      case "I":
        return "O";
      case "J":
        return "P";
      case "K":
        return "A";
      case "L":
        return "S";
      case "M":
        return "D";
      case "N":
        return "F";
      case "O":
        return "G";
      case "P":
        return "H";
      case "Q":
        return "J";
      case "R":
        return "K";
      case "S":
        return "L";
      case "T":
        return "Z";
      case "U":
        return "X";
      case "V":
        return "C";
      case "W":
        return "V";
      case "X":
        return "B";
      case "Y":
        return "N";
      case "Z":
        return "M";
      default:
        throw new Error("Invalid character: " + char);
    }
  }

  let str = message;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += getCipher(str[i].toUpperCase());
  }
  return result;
}

console.log(cipher("I have a secret message for you"));
