const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let productsVisited = products.filter(x => x.category == "visited");
		let productsInSale = products.filter(x => x.category == "in-sale");

		res.render("index",{
			productsVisited,
			productsInSale,
			toThousand
		})
	},
	search: (req, res) => {
		let keyword = (req.query.keywords);

		productsFilter = products.filter(x => x.name.toLowerCase().includes(keyword))

		res.render("results",{
			productsFilter,
			toThousand
		})
	},
};

module.exports = controller;
