const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {readJSON,writeJSON} = require("../data")


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("products", {products, toThousand})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productID = +req.params.id;

		let productFound = products.find(x => x.id === productID);

		res.render("detail", {
			productFound,
			toThousand
		});
	},

	// Create - Form to create
	create: (req, res) => {


		res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {

		let lastId = products[products.length - 1].id;

		let newProduct = {
			"id":lastId + 1,
			"name":req.body.name,
			"price":req.body.price,
			"discount":req.body.discount,
			"category":req.body.category,
			"description":req.body.description,
			"image": req.file ? req.file.filename : null,
		}
		products.push(newProduct);
		writeJSON("productsDataBase.json",products);

		res.redirect("/products/") 

	},

	// Update - Form to edit
	edit: (req, res) => {
		let productID = +req.params.id;
		let productFound = products.find(x => x.id === productID);

		res.render("product-edit-form",{
			...productFound,
			toThousand
		})
	},
	// Update - Method to update
	update: (req, res) => {
		let productID = +req.params.id;

		products.map(x => {
			if(productID === x.id){
				x.name = req.body.name;
				x.price = req.body.price;
				x.discount = req.body.discount;
				x.description = req.body.description;
				x.category = req.body.category;
				x.image = req.file ? req.file.filename : x.image
				
			}
		});

		writeJSON("productsDataBase.json",products);
		res.redirect("/products")

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productID = +req.params.id;

		let productToDelete = products.find(x => x.id === productID);

		products.pop(productToDelete);
		
		writeJSON("productsDataBase.json",products);

		res.redirect("/products");
	}
};

module.exports = controller;