var arr = [78, 45, 100, 4, 8, 23, 90];

//Method 1
arr.reverse();
console.log(arr);


// Method 2
var theReversed = [];
function reverseArray() {
    for (var i = arr.length - 1; i >= 0; i--) {
        theReversed.push(arr[i]);
    }
    return theReversed;
}
console.log(reverseArray());


// method 3
function swapArray() {
    for (var i = 0; i <= (arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = temp;
    }
    return arr;
}
console.log(swapArray());


//method 4

var arr = [78, 45, 100, 4, 8, 23, 90];

var swap = [];


for (var i = arr.length - 1; i >= 0; i--) {
    swap.push(arr[i]);
}
console.log(swap);