const sumAll = function(num1, num2) {
    let smallNum;
    let largeNum;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }

    if (num1 > num2){
        smallNum = num2;
        largeNum = num1;
    } else {
        smallNum = num1;
        largeNum = num2;
    }

    let i = smallNum;
    let sum = smallNum;

    while (i < largeNum) {
        i += 1;
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;