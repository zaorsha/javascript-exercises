const removeFromArray = function(testArray, ...item) {

    let newArray = [];

    for (let i = 0; i < testArray.length; i++) {
        if (item.includes(testArray[i]) == false) {
            newArray.push(testArray[i]);
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
