function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

// random whole number 

var randomNumberBetween0And19 = Math.floor(Math.random() * 20);

function randomWholeNumber() {

    return Math.floor(Math.random() * 10);

}

console.log(randomWholeNumber());

// random whole number within a range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin

}

console.log(ourRandomRange(1, 9));