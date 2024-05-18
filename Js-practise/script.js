//implementation of function which will take object action aoject to string and strig to object (parcing)
// [{
//     name: "Abhi",
//     isActive: true,
//     numberOfSessionsAttended: 3,
//     id: 121
//     },]
// const user = {
//   name: "Abhi",
//   isActive: true,
//   numberOfSessionsAttended: 3,
//   id: 121,
// };

// function jsonUtility(action, data) {
//   switch (action) {
//     case "stringify":
//       return JSON.stringify(data);
//     case "parse":
//       return JSON.parse(data);
//     default:
//       return null;
//   }
// }

// console.log(jsonUtility("stringify",user));
// let strValue = JSON.stringify(jsonUtility("stringify", user));
// console.log(strValue);

// function convertor(data) {
//   if (!data) return "no data to convert";

//   if (typeof data === "string") {
//     return JSON.parse(data);
//   }

//   if (typeof data === "object" && !Array.isArray(data)) {
//     return JSON.stringify(data);
//   }
// }
// let jsonValue = {
//   name: "Abhi",
// };

// let values = convertor(jsonValue);
// console.log(typeof values);
// let parseValue = JSON.parse(values);
// console.log(parseValue);

// let parsedValue = JSON.parse("name");
// console.log(parsedValue);
// console.log(strValue);

//2. create a function to Modify Object Values and Convert to JSON String:
// const user = {
//   name: "Abhi",
//   isActive: true,
//   numberOfSessionsAttended: 3,
//   id: 121,
// };

// JSON.stringify(data,replacer,space)

// function replacerFunction(key,value){
//     // console.log("key",key,"value",value);
// //    return value
//    if(key =="name"){
//     return "In" + value;
//    }
//    return value
// }

// let includeItem = ["name", "isActive"];
// let resVal = JSON.stringify(user, includeItem, 10);
// console.log(resVal);

//3. create a function to Filter an object based on the condition  and Convert to JSON String:

let users = [
  {
    name: "Abhi",
    isActive: true,
    numberOfSessionsAttended: 3,
    id: 121,
  },
  {
    name: "John",
    isActive: true,
    numberOfSessionsAttended: 5,
    id: 122,
  },
  {
    name: "Jane",
    isActive: false,
    numberOfSessionsAttended: 0,
    id: 123,
  },
];

function replacerFunction(key, value) {
  //   console.log(key, value);
  if (Array.isArray(value)) {
    return value.filter(
      (item) => item.isActive && item.numberOfSessionsAttended
    );
  }
  return value;
}

const newStringValue = JSON.stringify(users, replacerFunction, 5);
console.log(newStringValue);

//4.Expenditure-analysics(Group By)

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];

[
  {
    category: "Food",
    totalPrice: 30,
  },
  {
    category: "Clothing",
    totalPrice: 45,
  },
];

function calExpTran(trans) {
  const  newtrans=trans.reduce((acc, { category, price }) => {
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  return Object.entries(newtrans).map(([category, totalPrice]) => ({
    category,
    totalPrice,
  }));
}


let ans = calExpTran(transactions);
console.log(ans);
