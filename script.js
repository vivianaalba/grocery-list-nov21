let groceryItems = {};
groceryItems.name = '';
groceryItems.category = ''
groceryItems.price = 0;
groceryItems.quantity = 0;

({name: 'Apple',category: 'Fruits',price: 1.0, quantity: 6 },
{name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
{name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
{name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
{name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 })


let groceryList = document.getElementById('groceryList');
let totalCostElement = document.getElementById('totalCost');
let totalQuantityElement = document.getElementById('totalQuantity');

// 5 - displayGroceryItems()
function displayGroceryItems() {
    groceryList.innerHTML = '';
    let totalCost = 0;
    let totalQuantity = 0;

    // forEach (item)- 5d
    // make a function
    groceryItems.forEach(function(item) {
    
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`;
        groceryList.appendChild(itemDiv);

        totalCost += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    totalCostElement.innerHTML = totalCost.toFixed(2);
    totalQuantityElement.innerHTML = totalQuantity;

};

// 6 - isolateCategory()
function isolateCategory(category) {
    // Set the groceryList's HTML to be empty
    groceryList.innerHTML = "";
  
    // Create a variable called filteredItems that will use JavaScript's filter
    // method on groceryItems. Name the key item
    const filteredItems = groceryItems.filter((item) => item.category === category);
  
    // Below filteredItems, use a forEach loop to iterate over filteredItems.
    // Name the key item
    filteredItems.forEach((item) => {
      // Create a variable called itemDiv that will create a new <div>
      // element
      const itemDiv = document.createElement("div");
  
      // Set the itemDiv's HTML to be: <b>${item.name}</b>
      //(${item.category}): $${item.price} - ${item.quantity} units using backticks
      itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`;
  
      // Append the itemDiv to the groceryList
      groceryList.appendChild(itemDiv);
    });
  }

// 7 - showAllCategories()
function showAllCategories() {
    displayGroceryItems();
};

// 8 - orderItemsByCost()
function orderItemsByCost(items) {
    // Sort the items by cost in ascending order.
    items.sort((a, b) => b.price - a.price);
  
    // Display the sorted items.
    displayGroceryItems(items);
  }

// 9 - addItemPrompt()