const express = require('express');

const productCtrl=require('./../controllers/productCtrl');

let productRouter = express.Router();

//HTTP VERBS: GET POST PUT DELETE 

productRouter.get('/',productCtrl.get);    //GET: localhost:5000/products
productRouter.get('/:pageIndex/:pageSize',productCtrl.get);    //GET: localhost:5000/products/0/10
productRouter.post('/',productCtrl.post);  //POST : localhost:5000/products

module.exports = productRouter;