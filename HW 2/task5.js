// Задание 5. Скрипт принимает число n. Выдать первые n чисел ряда фибоначи

// Преобразование сразу в переменной
var n = +prompt('enter the number');
// Начинать нужно было с 0
var result = [0, 1];

for (i = 2; i < n; i++) {
  result[i] = result[i - 1] + result[i - 2];
}

alert(result);

// Отступы
