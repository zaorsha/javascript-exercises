const reverseString = function(string) {
    const charArray = string.split("");
    const reversedArray = charArray.reverse();
    let newString = reversedArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
