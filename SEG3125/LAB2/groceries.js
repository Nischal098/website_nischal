// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Brocoli",
		lactoseintolerant: true,
		nutallergy: true,
		price: 1.99,
		organic: true
	},
	{
		name: "Bread",
		lactoseintolerant: true,
		nutallergy: true,
		price: 2.35,
		organic: true
	},
	{
		name: "Salmon",
		lactoseintolerant: true,
		nutallergy: true,
		price: 9.99,
		organic: true
	},
	{
		name: "Yogurt Pack",
		lactoseintolerant: false,
		nutallergy: true,
		price: 5.49,
		organic: true
	},
	{
		name: "Red Cherries per Lbs",
		lactoseintolerant: true,
		nutallergy: true,
		price: 9.75,
		organic: true
	},
	{
		name: "Baby Peppers per Lbs",
		lactoseintolerant: true,
		nutallergy: true,
		price: 3.97,
		organic: true
	},
	{
		name: "Cucumber",
		lactoseintolerant: true,
		nutallergy: true,
		price: 0.97,
		organic: true
	},
	{
		name: "Milk",
		lactoseintolerant: false,
		nutallergy: true,
		price: 5.49,
		organic: true
	},
	{
		name: "Peanut Butter",
		lactoseintolerant: true,
		nutallergy: false,
		price: 5.77
	},
	{
		name: "Chicken Breast per Lbs",
		lactoseintolerant: true,
		nutallergy: true,
		price: 9.07,
		organic: true
	},
	{
		name: "Lean Ground Beef per 500g",
		lactoseintolerant: true,
		nutallergy: true,
		price: 6.99,
		organic: true
	},
	{
		name: "Lightly Salted Peanuts",
		lactoseintolerant: true,
		nutallergy: false,
		price: 4.47,
		organic: true
	},
	{
		name: "Peanut Granola Bar",
		lactoseintolerant: true,
		nutallergy: false,
		price: 3.47
	},
	{
		name: "Cheerios",
		lactoseintolerant: true,
		nutallergy: true,
		price: 2.97
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_value = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseIntolerant") && (prods[i].lactoseintolerant == true)){
			product_names.push(prods[i].name);
			product_value.push(prods[i].price);
		}
		else if ((restriction == "NutAllergy") && (prods[i].nutallergy == true)){
			product_names.push(prods[i].name);
			product_value.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
			product_value.push(prods[i].price);
		}
	}

	// Format Return List
	let return_list = [];
	for(let i=0; i<product_names.length; i+=1){

		// Add Value to name
		return_list.push(`$${product_value[i]} ${product_names[i]}`);
	}

	// Sort the Array
	return_list = return_list.sort();

	// Return the Product
	return return_list;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {

	// Format string to only get after the first space
	for(let i=0; i<chosenProducts.length; i+=1){

		// Only add name of product
		chosenProducts[i] = chosenProducts[i].split(/ (.+)/)[1];
	}

	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}