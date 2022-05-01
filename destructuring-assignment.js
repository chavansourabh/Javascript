var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// old way
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

// new way
const { x: a, y: b, z: c } = voxel;


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow: tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

/********************************************************************* */

//  destructuring assignment with Nested objects

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow: { max: maxOfTomorrow } } = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

/****************************************************************** */
//use destructuring assignment to assign variables from arrays

const [p, q, , r] = [1, 2, 3, 4, 5, 6];
console.log(p, q, r);

let s = 8, k = 6;
(() => {
    "use strict";
    [s, k] = [k, s]
})();
console.log(s);
console.log(k);

/******************************************************** */

// with the rest operator

const SOURCE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [, , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(SOURCE);
console.log(arr);
console.log(SOURCE);

/*************************************************0 */
// pass an object as a function's parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: - 0.75,
    average: 35.85
};
const half = (function () {


    return function half({ max, min }) {
        return (max + min) / 2.0;


    };


})();
console.log(stats);
console.log(half(stats));