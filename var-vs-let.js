let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("function scope i is:", i);
    return i;
}
checkScope();