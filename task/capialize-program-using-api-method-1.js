function convert(str, pos) {


    var checkNull = str;
    if (checkNull == null) {

        return "Please enter valid string";

    } else if (pos <= str.length && pos > 0) {

        return str.replace(str[pos - 1], str[pos - 1].toUpperCase());

    }

    return "Invalid input";

}


// console.log(convert("abcdef", 3));
console.log(convert("sourabh", 2));







