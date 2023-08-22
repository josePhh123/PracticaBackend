const express = require("express");
const { faker } = require('@faker-js/faker');

const router=express.Router();


router.get('/', (req, res) => {
  const products = [];
  const {size} = req.query
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    products.push({
      title: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.json('soy un filtro');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'iPhone X3',
        price: 32000,
    });
});

router.post('/',(req,res) => {
  const body=req.body;
  res.json({
    message:'created',
    data:body
  });
})

module.exports=router;
