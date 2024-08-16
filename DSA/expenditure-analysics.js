/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const items = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 8,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 12,
    category: "Food",
    itemName: "Biryani",
  },
  {
    id: 4,
    timestamp: 1656076800000,
    price: 2,
    category: "Grocery",
    itemName: "Gram Masala",
  },
  {
    id: 5,
    timestamp: 1656076800000,
    price: 1.5,
    category: "Grocery",
    itemName: "Haldi",
  },
  {
    id: 6,
    timestamp: 1656076800000,
    price: 5,
    category: "Grocery",
    itemName: "Rice",
  },
  {
    id: 7,
    timestamp: 1656076800000,
    price: 1,
    category: "Vegetable",
    itemName: "Onion",
  },
  {
    id: 8,
    timestamp: 1656076800000,
    price: 1,
    category: "Vegetable",
    itemName: "Cucumber",
  },
  {
    id: 9,
    timestamp: 1656076800000,
    price: 1,
    category: "Vegetable",
    itemName: "Carrot",
  },
];

function calculateTotalSpentByCategory(transactions) {
  // loop over the transation and if the catergory is prsent just add the total amount or else const the new category

  let totalSpentByCategory = transactions.reduce((acc, item) => {
    // Check is the category present in the totalSpentByCategory array
    let categoryExists = acc.find((value) => value.category == item.category);
    //If Exist then just add  the total amount
    if (categoryExists) {
      categoryExists.totalSpent += item.price;
    } else {
      acc.push({
        category: item.category,
        totalSpent: item.price,
      });
    }
    return acc;
  }, []);

  return totalSpentByCategory;
}
let res = calculateTotalSpentByCategory(items);
console.log(res);

/**
 * Other Solution for this
 */

// Use an object to store total spent per category
// let totalSpentByCategory = transactions.reduce((acc, item) => {
//     // If the category already exists, add the amount to the existing total
//     if (acc[item.category]) {
//       acc[item.category] += item.price;
//     } else {
//       // If the category doesn't exist, create it with the initial amount
//       acc[item.category] = item.price;
//     }
//     return acc;
//   }, {});

//   // Convert the object to an array of category totals
//   return Object.keys(totalSpentByCategory).map((category) => ({
//     category: category,
//     totalSpent: totalSpentByCategory[category],
//   }));
