var arr = [78, 45, 100, 4, 8, 23, 90];
var searchElement;

searchElement = arr[4];
console.log(searchElement);
console.log(" ");

function printForward() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 25) {
            console.log(arr[i]);
        }

    }
}
printForward();
console.log(" ");

function printReverse() {
    // for (var i = arr.length - 1; i >= 0; i--) {
    //     // if (arr[i] >= 25) {
    //     console.log(arr[i]);
    // }
    console.log(arr.reverse());

}
printReverse();
console.log(arr);