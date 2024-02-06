//3.1 flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let flattenedArray = arrays.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);
// → [1, 2, 3, 4, 5, 6]

// 3.2 Loop
function loop(value, testFn, updateFn, bodyFn) {
    for (let i = value; testFn(i); i = updateFn(i)) {
        bodyFn(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// Output:
// 3
// 2
// 1

//3.3 everyLoop
function everyLoop(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

console.log(everyLoop([1, 3, 5], n => n < 10));  // Output: true
console.log(everyLoop([2, 4, 16], n => n < 10)); // Output: false
console.log(everyLoop([], n => n < 10));         // Output: true

// 3.4 everySome
function everySome(array, test) {
    return !array.some(element => !test(element));
}

console.log(everySome([1, 3, 5], n => n < 10));  // Output: true
console.log(everySome([2, 4, 16], n => n < 10)); // Output: false
console.log(everySome([], n => n < 10));         // Output: true
