const removeFromArray = function(array, ...elements) {
    for (element of elements){
        let index = array.indexOf(element);
        if (index != -1) {
            array = array.slice(0,index).concat(array.slice(index+1)); 
        }   
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
