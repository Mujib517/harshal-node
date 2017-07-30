const express = require('express');  //Common JS module pattern. AMD, ES6
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const defaultRouter = require('./routers/defaultRouter');
const productRouter = require('./routers/productRouter');
const middleware=require('./middlewares/auth');

let app = express();

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server running on " + port);
});

mongoose.connect('mongodb://localhost/productsDb');

app.use(bodyParser.json());

//public routes
app.use('/', defaultRouter);
//app.use(middleware);

//private routes
app.use('/products', productRouter);
