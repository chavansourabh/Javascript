/**
 steps:
 1- check value is whole no. or decimal no.
 2- get round value from decimal no.
 3- check round decimal value is greater than o or not 
 4- then extract crore,lakh,thousand,hundred,decade,unit place values
 5- then joint value text into string  
 */

function numberToText(val) {
  var fraction = Math.round((val % 1) * 100);
  var text = "";

  if (fraction > 0) {
    text = "AND " + extractNumber(fraction) + " PAISE";
  }
  return extractNumber(val) + " RUPEE " + text + " ONLY";
}

function extractNumber(number) {
  if (number < 0 || number > 999999999) {
    return "Number Out Of Range!";
  }
  var crore = Math.floor(number / 10000000);
  number -= crore * 10000000;

  var lakh = Math.floor(number / 100000);
  number -= lakh * 100000;

  var thousand = Math.floor(number / 1000);
  number -= thousand * 1000;

  var hundred = Math.floor(number / 100);
  number = number % 100;

  var decade = Math.floor(number / 10);

  var unit = Math.floor(number % 10);

  var result = "";
  if (crore > 0) {
    result += extractNumber(crore) + " CRORE";
  }
  if (lakh > 0) {
    result += (((result == "") ? "" : " ") + extractNumber(lakh) + " LAKH");
  }
  if (thousand > 0) {
    result += (((result == "" )? "" : " ") + extractNumber(thousand) + " THOUSAND");
  }

  if (hundred > 0) {
    result += (((result == "") ? "" : " ") + extractNumber(hundred) + " HUNDRED");
  }

  var ones = Array(
    "",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "ELEVEN",
    "TWELVE",
    "THIRTEEN",
    "FOURTEEN",
    "FIFTEEN",
    "SIXTEEN",
    "SEVENTEEN",
    "EIGHTEEN",
    "NINETEEN"
  );

  var tens = Array(
    "",
    "",
    "TWENTY",
    "THIRTY",
    "FOURTY",
    "FIFTY",
    "SIXTY",
    "SEVENTY",
    "EIGHTY",
    "NINETY"
  );

  if (decade > 0 || unit > 0) {
    if (result !== "") {
      result += " AND ";
    }
    if (decade < 2) {
      result += ones[decade * 10 + unit];
    } else {
      result += tens[decade];
      if (unit > 0) {
        result += "-" + ones[unit];
      }
    }
  }

  if (result == "") {
    result = "zero";
  }
  return result;
}
console.log(numberToText("22159798"));
console.log(numberToText("100000010"));
