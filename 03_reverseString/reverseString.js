const reverseString = function(string) {

    // Take a string as input and reverse it
    // Use a new string to grab the end letter of the string, then remove that end letter from the original until empty

    let reversed = string.split("").reverse().join("");

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
