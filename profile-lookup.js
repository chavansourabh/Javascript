var contacts = [
    {
        "firstName": "Akira",
        "lastname": "Latine",
        "number": "0543896342",
        "likes": ["Pizza ", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastname": "Potter",
        "number": "78552438522",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastname": "Holmes",
        "number": "5452186321",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastname": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }


];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such contact";
        }
    }
    return "No such contact";

}

var data = lookUpProfile("Akira", "likes");

console.log(data);