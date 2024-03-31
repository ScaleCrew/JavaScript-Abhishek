//simple var ,let
/**
 * In terms of redeclaratin
 * In tern reassing
 */
// console.log(a);
// var a = 10;
// var a = 100;
// console.log(a);
/**
 * So here javascript will not create new memory shape for a it will simple reassign new value to a.
 */
// let a = 10;
// let a = 20;
//syntax error indentifier a is already created

// let a = 10;
// a = 10;
//Valid

// let a = 10;
// var b = 10;
// const c = 10;
{
  // memory space for a,b,c
  /**
   * a is assigned with undefine and attacted with global object
   * b is <value  isunavailable > for the time being and store in different memory space which is script in global shape and same is go for c as well
   *
   */
}
// console.log(y);
// y = 10;
//variable only hoisted which is created using var let and const

//shadow
// let a = 10;
// {
//   let a = 11;
//   console.log(a);
// }
// console.log(a);

// var a = 10;
// {
//   var a = 1990;
//   console.log(a);
// }
// console.log(a);

//illegal shadow
//Uncaught SyntaxError: Identifier 'a' has already been declare
//why illegal shadow becaue var is function scope okay so in block when we have dec it is will attached in window scope in top level let a is already is dec which is bring this error

// let a = 10;
// {
//   var a = 10;
// }

// let a = 10;
// function demo() {
//   var a = 120;
//   console.log(a);
// }
// demo();
// console.log(a);

// var a = 10;
// function a() {
//   let a = 20;
//   console.log(a);
// }
// a();

//hosted point
/**
 * var a
 *
 * var a=(){}
 * var a
 *
 */
// var a = 1;

// function b() {
//   a = 10;
//   console.log(a);
//   return;

//   function a() {}
// }
// b();
// alert(a);

/**
 * Output question let , var and const
 */
// console.log(y);
// y = 10;
//rf error identifier is declared
// y=1 is an init only
// it is not declared with var, let and const so it is not hoisted

// console.log(a);
// var a = 10;
//undefine

// abhi = "bhuyan";
// console.log(abhi);
// var abhi;

// console.log(x);
// let x = 1;
// //rf error cant access x before init

// var a = 10;
// let a;

// function hositingExample() {
//   console.log("This is the value of ", a);
// }
// console.log("This is the value of a in the outside the function", a);
// var a = 10;
// hositingExample();
// This is the value of a in the outside the function undefined
// script.js:120 This is the value of  10

// function hoistingExample() {
//   a = 10;
// }
// hoistingExample();
// console.log(a);

// Variable which are assigned with out a var,let and cost
// declaration  are considered to be global variable
//10

// function hoistingExample() {
//   var a = 10;
// }
// hoistingExample();
// console.log(a);
//rf a is not define as it is function scope it is inside the function

// function a() {
//   console.log("1");
// }
// a();

// function a() {
//   console.log("2");
// }
// a();

/**
 * so when we have same function in the same scope as in this case function a() is define 2 time in this the last is look the place 2 is the out put
 */

// var test = 1;
// function functionHoisting() {
//   test = 10;
//   return;
//   function test() {}
// }
// functionHoisting();
// console.log(test);

/**
 *  This code is can be look like this
 */

// function functionHoisting() {
//   //hositing as the function declaration move to there scope
//   var test = function () {};
//   test = 10;
//   return;
// }
// functionHoisting();
// console.log(test);

// scope
{
  let a = 10;
  console.log("A", a);
  var b = 10;
  console.log("B", b);
  const c = 10;
  console.log("C", c);
}

function test() {
  let a = "Hello";
  if (true) {
    let a = "bye";
    console.log(a);
  }
  console.log(a);
}
test();

//illegal shadowing

function func() {
  var a = "hello";
  let b = "Roadside coder";
  if (true) {
    let a = "Hi";
    var b = "Bye";
    console.log(a);
    console.log(b);
  }
}
test();
