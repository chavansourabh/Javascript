function calcAge(dob) {

    var diff = Date.now() - dob.getTime();
    var age = new Date(diff);


    return Math.abs(age.getUTCFullYear() - 1970);
}

console.log(calcAge(new Date("1998-03-15")));

// function getAge(dateString) {


//     dateString.match()
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();

//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }
// console.log(getAge("1998-03-15"));