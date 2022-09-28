const reverseString = function(string) {
    stringArray = string.split("");
    reversedString = "";
    for (let i = string.length-1; i >= 0; i--) {
        reversedString += stringArray[i];
    }
    return reversedString;

    // Solution:
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
