// var Spaceshuttle = function (targetPlanet) {

//     this.targetPlanet = targetPlanet;

// }
// var zeus = new Spaceshuttle('Jupiter');

// console.log(zeus.targetPlanet);


class Spaceshuttle {
    constructor(targetPlanet) {

        this.targetPlanet = targetPlanet;
    }
}
var zeus = new Spaceshuttle('Jupiter');

console.log(zeus.targetPlanet);


// another example

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');

console.log(carrot.name);