// singleton  => contructor
//object literals
// Object.create


const mySym=Symbol("key1")


const jsUser = {
  name: "Abhi", //by default sysmtem as :"name",
  age: "18",

  location: "Banglore",
  email: "abhishek@gmail.com",
  [mySym]: "mySym",
  isLoggedIn: false,
  lastLogedIn: "2013-01-01",
  fullName: "Abhihske Bhuyna",
};
// Access
console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);

//update
jsUser.email = "aaabh@gmail.com"
// Object.freeze(jsUser);
jsUser.email = "abhishek@gmail.com"
console.log(jsUser);
console.log(mySym);

jsUser.greeting = function () {
    console.log("Hello jsuser");
    
}
jsUser.greetings = function () { 
    console.log(`${this.name} hello user`);
    
}
jsUser.greeting()
jsUser.greetings()




