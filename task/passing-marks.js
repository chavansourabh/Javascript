function passingMarks(num) {
    // var result  = "";
    if (num >= 40 && num < 55) {
        return "Third class";
    } else if (num > 55 && num < 60) {
        return "Second class";
    } else if (num > 60 && num < 66) {
        return "First class";
    }
    else {
        return "fail";
    }
}

console.log(passingMarks(-100));

