const removeFromArray = function(testArray, ...item) {
    let newArray = [];
    for (let i in testArray) {
        if (testArray[i] == item) {
            continue;
        } else {
            newArray.push(testArray[i]);
        }
    } return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
