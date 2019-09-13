// 2. Сгенерить рандомное число - проверить является ли оно целым

function fn(randomNum) {
  var randomNum = (Math.floor(Math.random () + 1));
  if (randomNum %1 === 0) {
   return (' целое число!');
  } 
}

console.log(fn());
