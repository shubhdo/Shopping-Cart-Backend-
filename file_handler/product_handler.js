const bcrypt = require('bcrypt');
const Product = require('../models/product')
const functions = require('./common_files')

function addProduct(req, res) {

    let product = new Product(req.body);
    product.save(function (error, result) {
        if (error) {
                console.log(error);
                functions.sendResponse(res, 500, "Something went wrong.")
        } else {
                functions.sendResponse(res, 201, "Successful.")
                

        }
    })
}


function listofProducts(req,res) {
    Product.find({})
    .then((result) => res.json(result))
    .catch((failed) => functions.sendResponse(res, 500, "Something went wrong."))
}

module.exports = {
   listofProducts,
   addProduct
}