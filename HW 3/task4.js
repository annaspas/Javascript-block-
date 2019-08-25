// В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.

// Названия функциям нужно давать более осмысленные, чтобы понимать что она делает
function task4(first, second) {
  var firstNumber = Number(first);
  var secondNumber = Number(second);

  // Вот как можно было сократить, просто прокинуть условие, выведется результат
  return firstNumber % secondNumber === 0;
}

// Смысл функций это выполнять куски кода,
// возможно несколько раз + передавать разные значения для обработки
// В данном случае мы передали цифру и функция нам всё посчитала.
alert(task4(prompt('enter first number'), prompt('enter second number')));
