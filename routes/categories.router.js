const express = require("express");
const { faker } = require('@faker-js/faker');

const router=express.Router();

router.get('/',(req,res) => {
  res.json([
  {
    categorie: faker.commerce.productAdjective(),
  },
  {
    categorie: faker.commerce.productAdjective(),
  },
 ]);
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId
  });
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
      categoryId,
      category: 'Computers & Accesories'
  });
});

module.exports=router;
