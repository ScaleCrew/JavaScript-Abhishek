const marvelHero = ["thor", "iron", "spiderman"];
const dcHero = ["superman", "flash", "batman"];
// marvelHero.push(dcHero);
// merge
// console.log(marvelHero.);

//merge contact return a new array
// let allHero =marvelHero.concat(dcHero);
// console.log(allHero);
// let allHero = [...marvelHero, ...dcHero]
// console.log(allHero);

// let anotherArray = [1,2,3, [4,5,6], 7 , [7,4, [4, 5]]]
// let real_antore_array =anotherArray.flat(2)
// console.log(real_antore_array);
// console.log(Array.isArray("Abhi"));
// console.log(Array.from("Abhi"));
// console.log(Array.from({name :"Abhi"})); //interesting

// let score1= 100;
// let score2= 123;
// let score = 300;
// console.log(Array.of(score1,score2,score));

//Array Methods
// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numberArray.splice(0, 2));
// console.log(numberArray);
//it will mutate the array and return the remove elements
//syntax (starting postion , delete count ) // may take ,ore argument to replace the removed number .
//Point to remember
// console.log(numberArray.splice(-1,2));
//10  The count put is very important to focus in spice it read the count value fro left to right since after the last postion there nothing thats why it return 10 as an count put.
// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numberArray.splice(1, 3));
// It not mutate the original array
// it will return the remove elements or slice elements
// syntax (starting postion , end postion which is exclude)
//Using slice(-1, -3) won't work as you might expect. The slice() method works with indices in such a way that the start index should be less than the end index. If the start index is greater than or equal to the end index, the result will be an empty array.
// The slice() method works with the positions of indices in the array, not their numerical values. The start index must refer to an element that comes before the end index in the array. If the start index is greater than or equal to the end index, the result will be an empty array.

//pop
// console.log(numberArray.pop());
// console.log(numberArray);
// pop mutate the orginal array
// pop out the last element

//shift
// console.log(numberArray.shift());
// it is mutate the original array
// return the removed element
// syntax (numberArray.shift())

// unshit()
// console.log(numberArray);

// console.log(numberArray.unshift(2));
// console.log(numberArray);
// it is mutate the original array
// retun the new Array length

//Concat
let newArray01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray02 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray03 = newArray01.concat(newArray02);
console.log(newArray01, newArray02, newArray03);
//merge the given array
// return the new Array
// doesnot mutate the orignal or merge array
//push
console.log(newArray01.push(12));
console.log(newArray01);

console.log(newArray01.slice(-3, -1));
//it mutate the original array
// add new element in the last position in the array
//  reutn the new array length

/**
 *
 * !Important to note
 * * Pair
 *  pop => shift
 * (remove last lement retun the removed element)  => (remove the first element retrun the removed element)
 * push => unshit
 * (Added the new lement in the last and retrun the new array length ) => (remove the first element and return the removed element)
 *
 * slice  => spice
 * *Argument
 * (start, end) => (start, delCount, replace value) (spice import to negative index)
 * * mutating capcity
 * not mtate  => mutate
 *
 *
 */
// console.log(newArray01.reverse());
// console.log(newArray01.slice(-1,-2));
//it mutate the original array

// Trick to find the last index value
/**
 * * array[array.lenght -1]
 * *array.at(array.length - 1)
 * array.slice(-1)
 */


// Looping through an array
let loppArray =["a","b","c","d","e","f","g","h","i","j"];

// /traditional way
// for(let i=0; i<loppArray.length; i++){
//     console.log(loppArray[i]);
    
// }
// using a for of
for(alpha of  loppArray){
    console.log(alpha);
    
}