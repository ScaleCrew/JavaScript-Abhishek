//Array

// const myArray = [1, 2, 3, 4, 5, 6, true , "Abhi"]
const myHero = ["Ab", "Hero"];
// const  myArray2= new Array("10", 1)
const myArray2 = [1, 2, 3, 4];

//Array Methods
// myArray2.push("4")
// myArray2.push("5")
// myArray2.pop()
// myArray2.unshift("1")
// myArray2.shift()
// console.log(myArray2);
// console.log(myArray2.includes("12"));
// console.log(myArray2.indexOf("12"));
// const newArray = myArray2.join()
// console.log(myArray2);
// console.log(newArray);

//slice , splice
let mynewArray = [1, 2, 3, 4, 5];
console.log("A", mynewArray);
let sliceDemo = mynewArray.slice(1, 3);
console.log("slice", sliceDemo);
console.log("B", mynewArray);

let spiceDemo = mynewArray.splice(0, 3);
console.log("splice", spiceDemo);
//spice mutate the original array where slice does not
console.log("C", mynewArray);
