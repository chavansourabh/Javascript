var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
delete ourDog.Bark;

var myDog = {
    "name": "Coder",
    "legs": 2,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
delete myDog.tails;

console.log(myDog);