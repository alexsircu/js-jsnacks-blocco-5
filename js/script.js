//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


var number1 = 2;
var number2 = 4;
var arrayTest = ["a", "b", "c", "d", "e"];
var result = arrayFilter(number1, number2, arrayTest);
console.log(result);

// FUNZIONE-------------
function arrayFilter(min, max, array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var currentItem = array[i];
    if (i >= min && i <= max) {
      newArray.push(currentItem);
    }
  }
  return newArray;
}

// PARTE DI PROVA CON ES6--------------
