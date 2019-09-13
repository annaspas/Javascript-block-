// 4. Дана строка надо после каждой гласной добавлять звук ля

var fn = function(param) 
{
  var arr = param.split('')

  var result = new String();
  for (var i = 0; i < arr.length; i++) 
  {
    var ch = arr[i];
    result += ch;
    if (ch === 'a' || ch === 'e'|| ch === 'o' || ch === 'i' || ch === 'e') 
    {
      result += 'la';
    } 

  } 

  return result;
}

console.log(fn('Hello I am Anna'))