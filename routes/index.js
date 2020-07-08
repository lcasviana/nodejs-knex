const express = require('express');
const router = express.Router();

const productsRoute = require('./products');
const Products = require('../store/Products');

router.get('/', (req, res, next) => {
  Products.get().then((products) => {
    res.render('index', { products });
  });
});

router.use('/products', productsRoute);

module.exports = router;
