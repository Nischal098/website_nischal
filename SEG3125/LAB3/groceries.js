// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Brocoli",
		price: 1.99,
		tag: ""
	},
	{
		name: "Avocado",
		price: 2.35,
		tag: "Diabetic"
	},
	{
		name: "Salmon per 1/2 Lbs",
		price: 9.99,
		tag: "SeaFood"
	},
	{
		name: "Yogurt Pack",
		price: 5.49,
		tag: "Lactose"
	},
	{
		name: "Red Cherries per Lbs",
		price: 9.75,
		tag: ""
	},
	{
		name: "Baby Peppers per Lbs",
		price: 3.97,
		tag: ""
	},
	{
		name: "Cucumber",
		price: 0.97,
		tag: ""
	},
	{
		name: "Milk",
		price: 5.49,
		tag: "Lactose"
	},
	{
		name: "Peanut Butter",
		price: 5.77,
		tag: "Nut"
	},
	{
		name: "Chicken Breast per Lbs",
		price: 9.07,
		tag: ""
	},
	{
		name: "Lean Ground Beef per 500g",
		price: 6.99,
		tag: ""
	},
	{
		name: "Lightly Salted Peanuts",
		price: 4.47,
		tag: "Nut"
	},
	{
		name: "Peanut Granola Bar",
		price: 3.47,
		tag: "Nut"
	},
	{
		name: "Cheerios",
		price: 2.97,
		tag: "Diabetic"
	},
	{
		name: "Crabs per 1/4 Lbs",
		price: 8.49,
		tag: "SeaFood"
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {

	let product_names = [];
	let product_value = [];

	let product_copy = [...prods];

	if (restriction.length == 0){

		for (let i=0; i<prods.length; i+=1) {
			product_names.push(prods[i].name);
			product_value.push(prods[i].price);
		}
	}
	else {

		for (let i=0; i<restriction.length;i+=1){

			let prod_len = product_copy.length;

			while (prod_len--){
				if (product_copy[prod_len].tag.includes(restriction[i])){
					product_copy.splice(prod_len, 1);
				}
			}
		}

		console.log(product_copy);

		for (let i=0; i<product_copy.length; i+=1) {
			product_names.push(product_copy[i].name);
			product_value.push(product_copy[i].price);
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