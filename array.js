/**
 * The most important thing I leart from this lesson is Array.from()
 * method. Array is a mutable object in JavaScript. If we directly
 * assign an array to other then second array stores the reference.So
 * any change in the first array will change the second array. So for effect free copying of array we use Array.from() method instead of direct copying.
 */

let arr = [1, 2, 4, 10];
let arr2 = arr;
console.log(arr);
console.log(arr2);

arr2[0] = 100; // this will effect first array as well as second array
console.log(arr);
console.log(arr2);

console.log('I love my country');

let arr3 = [11, 12, 15, 19];
let arr4 = Array.from(arr3);
console.log(arr3);
console.log(arr4);

arr3[0] = 200;
console.log(arr3);
console.log(arr4);


// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var len = array.length -1;

// for (let i = 0; i <= len/2; i++) {
//     var element = array[i];
//     array[i] = array[len - i];
//     array[len - i] = element;
// }

// var array2 = array.reverse();
// array2 = array2.reverse();

// console.log(array);
// console.log(array2);