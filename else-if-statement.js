function testElseif(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseif(15);

//logical order
function orderMyLogic(val) {
    if (val < 5) {
        return "Smaller than 5";
    } else if (val < 10) {
        return "Smaller than 10";
    }
    else { return "Greater than or equal to 10" };
}

console.log(orderMyLogic(3));