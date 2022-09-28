const reverseString = function(string) {
    stringArray = string.split("");
    reversedString = "";
    for (let i = string.length-1; i >= 0; i--) {
        reversedString += stringArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
