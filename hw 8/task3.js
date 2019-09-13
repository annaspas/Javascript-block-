// 3. Сформировать из строки хэштег - "Моя первая няня" - "#МояПерваяНяня"

var str = "Моя первая няня";
function fn(param) 
{
  var result = new String();
  var words = param.split(" ");

  for(var i = 0; i < words.length; i++)
  {    
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  result = "#" + result;

  return result;
}

console.log(fn(str));