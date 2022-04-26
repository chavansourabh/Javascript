var outerWear = "T-Shirt";//This is global scope

function myOutfit() {
    var outerWear = "sweater";//This is local scope

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//We can't access local scope outside the function