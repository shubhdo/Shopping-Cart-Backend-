const routes = require('express').Router();
const User = require('../models/product')
const functions = require('../file_handler/common_files');
const product_handler = require('../file_handler/product_handler')

routes.post('/addProduct',product_handler.addProduct);
routes.get('/listofProducts',product_handler.listofProducts)
module.exports = routes;