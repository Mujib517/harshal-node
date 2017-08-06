//const Product = require('../models/productModel');


let TestCtrl = function (Product) {

    let count = function (req, res) {
        if (req.body) {
            res.status(200);
            res.send(10);
        }
        else {
            res.status(500);
            res.send("Internal Server Error");
        }

    };

    let get = (req, res) => {

        Product.find(function (err, products) {
            res.status(200);
            res.json(products);
        });
    };

    let getById = (req, res) => {
        Product.findById(req.params.id, function (err, product) {
            res.status(200);
            res.json(product);
        });
    };

    return {
        count: count,
        get: get,
        getById: getById
    }
};


module.exports = TestCtrl;