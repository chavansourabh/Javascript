
//And statement
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {//work only if both statements are true
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));

//Or statement

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";

    }
    return "Inside";
}
testLogicalOr(15);