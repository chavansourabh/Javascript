var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("gift"));


var specialObj = {
    name: "sourabh",
    idNumber: 7,
    phNumber: "543298712"
};

function testObj(checkPrt) {
    if (specialObj.hasOwnProperty(checkPrt)) {
        return specialObj[checkPrt];
    } else {
        return "Not Found";
    }
}
console.log(testObj("phNumber"));