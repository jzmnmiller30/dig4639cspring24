//3.1 flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((array1,array2) => array1.concat(array2)));

// → [1, 2, 3, 4, 5, 6]

//3.2 loop
// Your code here.
function loop(value, test , update, body) {
for (let i= value; test(i); " i = update(i)" ){
body (i)
}
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


//3.3 & 3.4 everyLoop(array, test) everySome(array, test)
function everyLoop(array, test)
{
for (let item of array){

  if (!test(item)) return false;
}
  return true;
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true



function everySome(array, test)
{
  return !array.some(element => !test(element));

}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

