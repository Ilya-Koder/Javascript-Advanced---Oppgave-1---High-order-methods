/*
1. [ ] Use .filter() to extract all products that cost less than 200
2. [ ] Use .map() to make a list that only contain the product names
3. [ ] Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')
4. [ ] Use .some() to check if there are any products that cost more than 1000
5. [ ] Use .reduce() to find the total cost of all the products.
*/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];
//filters out products under 200 to list.
const productsUnder200 = products.filter((product) => product.price < 200);
console.log(productsUnder200);

const productNames = products.map((product) => product.name);
console.log("Products under 200", productNames);

//category for electronics
const electronicsNames = products
  .filter((product) => product.category === "electronics")
  .map((product) => product.name);
console.log("Electronics", electronicsNames);

//categoty for home appliances
const homeAppliancesNames = products
  .filter((product) => product.category === "home appliances")
  .map((product) => product.name);
console.log("Home appliances", homeAppliancesNames);

//category for clothing
const clothingNames = products
  .filter((product) => product.category === "clothing")
  .map((product) => product.name);
console.log("Clothing", clothingNames);

//checks if the product has a price over 1000
const hasExpensiveProduct = products.some((product) => product.price > 1000);
console.log(hasExpensiveProduct, "a product has a price more than 1000"); // true === more than 1000

//checks the total of all products
const totalCost = products.reduce((total, product) => total + product.price, 0);
console.log(totalCost, "is the total cost of every product");
