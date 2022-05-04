/** input "115.25.1.0"  - output true
 input "256.25.1."  - output invalid input

 steps :
  1: create a function.
  2: split every element of string into array
  3: check length of array == 4
  4: check every element of array using .every function
  5: convert elements into integer using parseInt()
  6: check element is >=0  and <=255  or not
  7: check element is only  positive integer not a character or negative integer
  8: return output
   
 */

function checkIpValidity(ip) {

    var blocks = ip.split(".");
    if (blocks.length === 4) {

        return blocks.every(function (element) {

            const value = parseInt(element, 10);

            if (value >= 0 && value <= 255) {

                var i = element.length;

                while (i--) {

                    if (element[i] < '0' || element[i] > '9') {
                        return "invalid input";
                    }

                } return true;
            }
        });
    } return "invalid input";


}

console.log(checkIpValidity("110.25.111."));