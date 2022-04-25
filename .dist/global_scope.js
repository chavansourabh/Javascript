var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var outout = "";
    if (typeof myGlobal != "undefined") {
        outout += "myGlobal: " + myGlobal + " ";
    }
    if (typeof oopsGlobal != "undefined") {
        outout += "oopsGlobal: " + oopsGlobal;
    }
    console.log(outout);
}

fun1();
fun2();