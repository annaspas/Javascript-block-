// - Задание 2. Переменная принимает значение min. значение должен являться числом. В нем лежит число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// Преобразование сразу в переменной
var n = +prompt('enter the number between 0 & 59');

// Не вижу смысла в do...while

if (n >= 0 && n <= 14) {
  alert(n + ' ' + 'min'+' ' + 'this is the 1st quarter');
} else if (n > 14 && n <= 29) {
  alert(n + ' ' + 'min' + ' ' + 'this is the 2nd quarter');
} else if (n >= 30 && n <= 44) {
  alert(n + ' ' + 'min' + ' ' + 'this is the 3rd quarter');
} else if (n >= 45 && n <= 59) {
  alert(n + ' ' + 'min' + ' ' + 'this is the 4th quarter');
} else {
  alert('number is\'n between 0 & 59');
}

// Отступы
