function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));


function test(a, b, c) {

    var result = "";
    result += "This " + a + " " + "contains " + b + " " + c;
    return result;
}
console.log(test("array", [2, 5, 6, 8], "elements"));