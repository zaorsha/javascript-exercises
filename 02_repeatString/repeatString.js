const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let i = 0;
    let newString = '';
    while (i < num) {
        newString += string;
        i += 1;
    } return newString;
};

// Do not edit below this line
module.exports = repeatString;
