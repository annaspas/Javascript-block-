// Задание 1. Функция принимает число n(проверить что n является числом в противном случае завершить работу функции). Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2').

// Названия функциям нужно давать более осмысленные, чтобы понимать что она делает
function task1(number) {
  var n = Number(number);
  var result = '';

  if (Number.isNaN(n)) {
    return 'Is not a number';
  } else {
    if (n > 1) {
      for (var i = 1; i <= n; i++) {
        // Не обязательно делать toString когда конкатенируешь со строкой, число и так превращается в строку
        result = result + i + (i < n ? ',' : '');
      }
    } else {
      // Задание выполнено не правильно, нужно было делать порядок наоборот
      for (var i = 1; i >= n; i--) {
        // Не обязательно делать toString когда конкатенируешь со строкой, число и так превращается в строку
        result = result + i + (i > n ? ',' : '');
      }
    }

    return result;
  }
}

// Смысл функций это выполнять куски кода,
// возможно несколько раз + передавать разные значения для обработки
// В данном случае мы передали цифру и функция нам всё посчитала.
alert(task1(prompt('enter the value')));
