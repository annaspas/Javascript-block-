// - Задание 3. Переменная принимает количество часов (проверить что это число). Переменная возвращает количество секунд в переданых часах.

// Преобразование сразу в переменной
var n = +prompt('enter the quantity of hours to revert this in seconds');
// Лишняя переменная была

// Бесполезный do...while
if (Number.isNaN(n)) {
  alert('is not a number');
} else {
  // 3600, а не 360
  alert(n * 3600 + ' seconds');
}
