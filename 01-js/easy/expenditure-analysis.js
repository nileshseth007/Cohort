/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total amount spent per category
  let categorySum ={};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const {category, price} = transaction

    // If the category is not in categoryTotals, create it with the initial price
    if(categorySum[category] === undefined){
      categorySum[category] = price;
    } else{
      // If the category already exists, add the price to the existing total
      categorySum[category] += price;
    }
  })

  // Convert the categoryTotals object into an array of objects
  let total = Object.keys(categorySum).map(category =>({
    category: category,
    totalSpent: categorySum[category]
  }))

  return total;
}

module.exports = calculateTotalSpentByCategory;
