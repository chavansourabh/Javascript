function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(2));
/***************************************************************** */
// default statement

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff(5));

/************************************************** */
// Multiple identical options

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(7));

/************************************************* */
// replacing if else chain with switch

function chainToSwitch(val) {
    var answer = "";

    // if(val === "bob"){
    //     answer = "marley";
    // }
    // else if(val === 42){
    //     answer = "The answer";
    // }
    // else if(val === 1){
    //     answer = "There is no #1";
    // }
    // else if(val === 99){
    //     answer = "Missed me by this much!";
    // }
    // else if(val === 7){
    //     answer = "Ate Nine";
    // }

    switch (val) {
        case "bob":
            answer = "marley";
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 9:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}