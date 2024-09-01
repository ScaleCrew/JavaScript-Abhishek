//This
"use strict";
/**
 * ! instic mode the the function in the GEC has this as undefine hence any function inside the functio is as print the value of the this as undefine
 * ! in any function associated to any obj inside the obj is as print the value of the this as the undefine and in case of arrow and IIFE this is point to the obj in  which  the function is trigger
 * /

// {
//   function addNumber() {
//     console.log("Abhi");
//   }
// }
// addNumber();
// This is a object that the function is the properties of
// console.log(this);
// this is dynamically scope
// it is does not depend now how you are define the varibale , is depends on where you are calling this keyword

// function testTheThisKEy() {
//   //   console.log(this);
//   let randomFunction = () => {
//     let newFunction = () => {
//       console.log(this); //Window object
//     };
//     newFunction();
//   };
//   randomFunction();
// }

// testTheThisKEy(); //Window object

// let person = {
//   firstName: "Abhishek",
//   printFunction: function () {
//     console.log("firstName of the Function is " + this.firstName);
//     console.log(this);
//     //here come the  confusing part
//     function randomFunction() {
//       console.log(this);
//     }
//     randomFunction();

//     /**
//   *    The first log is understood and we have already seen it. But, why is the
// second log equal to window? Shouldn’t it also be equal to the person
// object? This is the confusing part, because if we think in terms of the
// lexical scoping it should have been equal to person object, but instead it
// is equal to the window object. This is because the this keyword is
// dynamically scoped, it does not depend on how you define the variable,
// it depends on where you are calling this keyword.
// So, when we are calling the function randomFunction it is not
// associated with any prefix object, we call the function directly. We didn’t
// really call the function via an object and that’s why it defaulted to the
// window object.

// // ! important to fix this we use arrow function which make the this keyword lexcial automically
//   */
//   },
// };
//As per the defination of the this keyword it is an object that the function is the properties of
//Now the printFunction is the properties of the object person.
// person.printFunction();

// let person = {
//   firstName: "Abhishek",
//   printFunction: function () {
//     console.log("firstName of the Function is " + this.firstName);
//     console.log(this);
//     //here come the  confusing part
//     //only in the arrow function is able to fix this
//     let randomFunction = function () {
//       console.log(this);
//     };
//     randomFunction();
//   },
// };
// person.printFunction();

console.log(this);

function printFunction() {
  console.log(this);

  const newExpressions = function () {
    console.log("expresion", this);
  };

  const arrowFunction = () => {
    console.log("arrow function", this);
  };
  const functionDeclaration = function () {
    console.log("function declaration", this);
  };
  newExpressions();
  arrowFunction();
  functionDeclaration();
}

printFunction(); //Window object

const obj = {
  name: "Abhishek",
  printFunction: function () {
    console.log("name inside the object", this.name);
    console.log("this inside the object", this);

    function randomFunction() {
      console.log("this inside the randomFunction", this);
    }
    const randomFunctionArrow = () => {
      console.log("this inside the randomFunctionArrow", this);
    };
    const randomFunctionExpression = function () {
      console.log("this inside the randomFunctionExpression", this);
    };
    (() => {
      console.log("this inside the IIFE", this);
    })();

    randomFunction();
    randomFunctionArrow();
    randomFunctionExpression();
  },
};
obj.printFunction();
