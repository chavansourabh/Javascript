var ourArr = ["Stimpson", "J", "cat"];
ourArr.shift();//ourArr now equals["J","cat"]
ourArr.unshift("Happy");
//ourArr now equals ["Happy","J","cat"]



var myArr = [["John", 23], ["cat", 2]];

myArr.shift();
myArr.unshift(["Paul", 35]);

console.log(myArr);