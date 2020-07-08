const express = require('express');
const router = express.Router();

const Products = require('../store/Products');
const Comment = require('../store/Comment');

router.get('/price', (req, res, next) => {
  Products.getByPrices(req.query.lower, req.query.upper).then((products) => {
    res.render('search', { products });
  });
});

router.get('/:id', async (req, res, next) => {
  res.render('product', {
    product: (await Products.getById(req.params.id))[0],
    commentaries: await Comment.find({ product: req.params.id })
  });
});

router.post('/:id', async (req, res, next) => {
  await Comment.create({
    product: req.params.id,
    author: req.body.author,
    comment: req.body.comment
  });
  res.redirect(`/products/${req.params.id}`);
});

module.exports = router;
