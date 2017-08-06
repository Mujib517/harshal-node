let Product = require('../models/productModel');

module.exports = {
    get: function (req, res) {

        let pageIndex = req.params.pageIndex || 0;
        let pageSize = req.params.pageSize || 10;
        let rows = 0;

        Product
            .count()
            .exec()
            .then(function (count) {
                rows = count;
            });

        Product
            .find()
            .skip(pageIndex * pageSize)
            .limit(pageSize)
            .sort('-lastUpdated')
            .exec()
            .then(function (products) {

                let response = {
                    data: products,
                    metadata: {
                        count: rows,
                        pages: Math.ceil(rows / pageSize)
                    }
                };

                res.status(200);
                res.json(response);
            })
            .catch(function (err) {
                res.status(500);
                res.send("Internal SErver Error");
            });

        // Product.find(function (err, products) {
        //     if (!err) {
        //         res.status(200);
        //         res.json(products);
        //     }
        //     else {
        //         //log.error('');
        //         res.status(500);
        //         res.send("Internal Server Error");
        //     }
        // });
    },

    count: function (req, res) {
        Product.count(function (err, cnt) {
            res.send(cnt);
        });
    },

    post: function (req, res) {

        var product = new Product(req.body);

        product.save(function (err, savedProduct) {
            if (!err) {
                res.status(201); //Created
                res.json(savedProduct);
            }
            else {
                res.status(500);
                res.send(err);
            }
        });
    }
};

//CI and CD