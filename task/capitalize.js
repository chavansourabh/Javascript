function convert(str = "", pos) {
    // input = abc , outout = aBc
    // input = android , output = anDroid

    ///   steps:
    /*
    step 1 find the length of string
    step 2 split the string into array using .split()
    step 3 find Nth character 
    step 4  change character using .touppercase()
    step 5  join the array into string using .join()
    step 5  return result
    step 6 print output
    */


    if (pos <= str.length && pos > 0 && arr != undefined && arr != "") {
        var arr = str.split("");

        var newWord;
        newWord = arr[pos - 1].toUpperCase();

        arr[pos - 1] = newWord;

        var result = arr.join("");
        return result;
    }

    return "Invalid input";


}

// console.log(convert("abc", -1));
console.log(convert(null, 3));







