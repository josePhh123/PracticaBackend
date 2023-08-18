const express = require("express");
const { faker } = require('@faker-js/faker');


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello ');
});

app.get('/route-new', (req, res) => {
    res.send('Hola soy una nueva ruta o endpoint');
});

app.get('/products', (req, res) => {
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

app.get('/products/filter', (req, res) => {
  res.json('soy un filtro');
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'iPhone X3',
        price: 32000,
    });
});



app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId
    });
});

app.get('/categories/:categoryId', (req, res) => {
    const { categoryId } = req.params;
    res.json({
        categoryId,
        category: 'Computers & Accesories'
    });
});

app.get('/people', (req, res) => {
    res.json([{
        name: 'Arturo',
        type: 'employee'
    }, {
        name: 'Jimena',
        type: 'customer'
    }]);
});

app.get('/people/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Arturo',
        type: 'employee'
    });
});

app.listen(PORT, () => {
    console.log('Mi puerto es: ' + PORT);
})
