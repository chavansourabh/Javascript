function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var tesrArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(tesrArr));
console.log(nextInLine(tesrArr, 6));
console.log("After: " + JSON.stringify(tesrArr));

// JSON.stringify convertes array into string