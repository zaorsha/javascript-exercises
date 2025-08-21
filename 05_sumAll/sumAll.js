const sumAll = function(num1, num2) {

    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0){
        return "ERROR"
    }

    let newNum = 0
    
    if (num1 < num2){
        for (let i = num1; i <= num2; i++){
            newNum += i;
        }
    }
    else {
        for (let i = num2; i <= num1; i++){
            newNum += i;
        }
    }

    return newNum;
};

// Do not edit below this line
module.exports = sumAll;