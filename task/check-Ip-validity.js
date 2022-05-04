

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