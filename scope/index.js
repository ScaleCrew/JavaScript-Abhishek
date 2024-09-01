"use strict";
{
  var scope = "it is defined inside the function";
  function scopeInBlock() {
    var abhi = "Abhihske";
    console.log(abhi);
  }
}
scopeInBlock();
// console.log(scope);

// function scope() {
//   var hello = "hello";
// }
// console.log(hello);
