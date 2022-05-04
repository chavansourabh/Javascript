const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

function sum(x, y, z) {
    return x + y + z;
}

const number = [1, 2, 3];

// console.log(sum(number[0], number[1], number[2]));
console.log(sum(...number));