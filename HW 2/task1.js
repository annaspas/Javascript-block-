// - Задание 1. Скрипт принимает число n(проверить что n является числом в противном случае завершить работу цикла). цикл возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2').

var n = Number(prompt('enter the value'));
var result = '';

// Лучше было бы сделать проверку вот так, do...while очень редко используется и тут не особо он нужен был
if (Number.isNaN(n)) {
  alert('Is not a number');
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

  alert(result);
}
