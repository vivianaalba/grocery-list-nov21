// add groceryItems object to display the initial items
let groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
    { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
  ];
  
  // link HTML ID's to JS so we can manipulate the page - these innerHTML values will change based on the items at the grocery list
  let groceryList = document.getElementById('groceryList');
  let totalCostElement = document.getElementById('totalCost');
  let totalQuantityElement = document.getElementById('totalQuantity');
  
  // 5 - displayGroceryItems()
  function displayGroceryItems() {
    // set values equal to 0 or blank - will amend later - use 'let'
    groceryList.innerHTML = '';
    let totalCost = 0;
    let totalQuantity = 0;
  
    // forEach (item)- 5d
    // make a function that adds a div for each grocery list item
    // add grocery item on list by creating element
    groceryItems.forEach(function(item) {
  
      let itemDiv = document.createElement("div");
      itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`;
      groceryList.appendChild(itemDiv);
        
     // change the cost and the amount of items when you add product
      totalCost += item.price * item.quantity;
      totalQuantity += item.quantity;
    });
  
    totalCostElement.innerHTML = `Total Cost: ${totalCost.toFixed(2)}`;
    totalQuantityElement.innerHTML = `Total Items: ${totalQuantity}`;
  
  };
  
  // 6 - isolateCategory()
  function isolateCategory(category) {
    groceryList.innerHTML = "";
  
    // filters item by category type
    const filteredItems = groceryItems.filter((item) => item.category === category);
  
    // for
    filteredItems.forEach((item) => {

      // add div
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`;
      groceryList.appendChild(itemDiv);
    });
  }
  
  // 7 - showAllCategories()
  function showAllCategories() {
    displayGroceryItems();
  };
  
  // 8 - orderItemsByCost()
  function orderItemsByCost() {
    // sort method can order values based on criteria - sort by price
    // sort by price lowest to highest - use (a,b) to represent prices
    groceryItems.sort((a, b) => b.price - a.price);
  
    displayGroceryItems();
  }
  
  // 9 - addItemPrompt()
  function addItemPrompt() {
    // create prompts for each groceryList object key
    var name = prompt("Enter the name of the item: ");
    var category = prompt("Enter the category of the item: ");
    var price = prompt("Enter the price of the item: ");
    var quantity = prompt("Enter the quantity of the item: ");
  
    // if any key is empty, return an error alert
    if (!name || !category || !price || !quantity) {
      alert("Please complete all fields and try again.");
      // return stops function execution
      return;
    }
  
    // parseFloat will add price to change the displayed total
    // parseInt() - extracts integer value from a string = '$'
    var priceValue = parseFloat(price);
  
    // parseInt will add item quantity to change the displayed quantity
    // parseFloat() - extracts a floating-point number (may contain decimal places)
    var quantityValue = parseInt(quantity);

  
    // checks if either priceValue or quantityValue is NaN and alert
    if (isNaN(priceValue) || isNaN(quantityValue)) {
      alert('Invalid value');
      return;
    }
  
    // create new object from the data added by user
    var newItem = {
      name: name,
      category: category,
      price: priceValue,
      quantity: quantityValue
    };
  
    // push newItem to end of groceryItems array
    groceryItems.push(newItem);
  
    displayGroceryItems();
  }
   // call and display display grocery items functions
  document.addEventListener('DOMContentLoaded', function() {
    displayGroceryItems();
  });