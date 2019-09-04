// Ниписать функцию которая принимает строку и убирает в ней дублирующиеся пробелы(пользовать внутренние функции жс нельзя) 
// var str =;

function fn2(str) { 
  var arr = [];
  var a = [];
  var result = '';
  var new_str = str.toUpperCase(); 
  arr = new_str.split(' '); 

  for ( i = 0; i < arr.length; i++ )
  {
      if ( find(a, arr[i]) == -1 ) { 
          result += arr[i] + ' ';
          a.push(arr[i]);
      }
  }

  return result;
}

fn2();