//Primitive and Non-Primitive Data Type
//Primitive (Call By value)
// 7 Type :String, Number , boolean , null, undefine , Symbol, BigInt
//Refrence Type Non Primitve

const score= 100
const scoreValue=12.0
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId );
// const bigNumber = 2223222222222222232232


//Array Objects, Functions

const heros =["John", "naagraj", "shaktiman"]
let myObj = {
    name:"Abhihske",
    age:22
}
// function printName {
//     console.log("Hello World")
// }
// let myFunction=function(){}

//+++++++++++++++++++
// stack memeory(Prmitive)(copy) and heap(Non-printive)(refrence)

let myYoutubeName= "MrBhuyna"
let anthoreName=myYoutubeName
console.log(anthoreName);
anthoreName="MRBhuyan2"
console.log(anthoreName,myYoutubeName);

let userOne = {
   email:"user@google.com",
   name:"MrBhuyan"
}
let userTwo = userOne
userTwo.email="Abi@gmail.com"
console.log(userOne, userTwo);


