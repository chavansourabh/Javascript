// const createPerson = (name, age, gender) => {

//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };

// console.log(createPerson("Sourabh Chavan", 24, "male"));

//simple way
const createPerson = (name, age, gender) => ({
    name, age, gender
});

console.log(createPerson("Sourabh Chavan", 24, "male"));