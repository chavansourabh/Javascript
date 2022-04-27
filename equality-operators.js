// Double equal sign(Equality operator)
function testEqual(val) {
    if (val == 12) {
        return "Equal";//' == ' this is equality sign
    }
    return "Not Equal";
}

console.log(testEqual(12));

function eql(some) {
    if (some == 15) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(eql(10));
/************************************************ */

//Triple Equal sign(Strict equality operator )
function testStrict(val) {
    if (val === 7) {
        return testEqual;
    }
    return "Not Equal";
}
console.log(testStrict('7'));//because '7' is a string

/**************************************************** */
//Example

function compairEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not equal";
}
console.log(compairEquality(10, '10'));


function compairStrictEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal";
}
console.log(compairStrictEquality(10, '10'));

/***************************************************** */

// Inequality operator

function testNotEqual(val) {
    if (val != 22) {
        return "Not equal";
    }
    return "Equal";
}

console.log(testNotEqual(97));


function strictNotEqual(val) {
    if (val !== 22) {
        return "Not equal";
    }
    return "Equal";
}

console.log(strictNotEqual('22'));

/************************************************** */

// Comparisons with the Logical And Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }

    if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(19));



function testLessthan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }
    return "55 or over";
}
console.log(testGreaterOrEqual(19));