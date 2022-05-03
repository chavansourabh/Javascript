

function checkIpValidity(ip) {

    var blocks = ip.split(".");
    if (blocks.length === 4) {
        return blocks.every(function (block) {
            const value = parseInt(block, 10);
            if (value >= 0 && value <= 255) {
                var i = block.length;
                while (i--) {
                    if (block[i] < '0' || block[i] > '9') { return "invalid input"; }
                } return true;
            }
        });
    } return "invalid input";


}

console.log(checkIpValidity(""));