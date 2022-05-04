function convert(str, pos) {
    var checkNull = str;
    if (checkNull == null) {

        return "Please enter valid string";

    } else if (pos <= str.length && pos > 0) {


        var prevString = str.slice(0, (pos - 1));
        var afterString = str.slice((pos), str.length);
        var upperAtPos = str.charAt(pos - 1).toUpperCase();

        var newStr = prevString + upperAtPos + afterString;
        return newStr;

    }

    return "Invalid input";
}

console.log(convert("abcdef", 3));