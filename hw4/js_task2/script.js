function pow (x,n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
var x = prompt('Напишите любое число, пусть это будет - x', '');
var n = prompt('В какую степень хотите возвести? это у нас - n.', '');
if (n <= 1) {
  alert('Введите целое число');
} else {
  alert( pow(x, n) );
}
