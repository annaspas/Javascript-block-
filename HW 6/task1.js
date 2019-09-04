// написать функцию, которая будет принимать строку и возвращать является ли строка полиндромом или нет(true false)

function IsPalindrome(str) {
  var a = Math.floor(str.length / 2);

  for (var i = 0; i < a; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    } else {
      return true;
    }
  }
}

IsPalindrome('арозаупаланалапуазора');
