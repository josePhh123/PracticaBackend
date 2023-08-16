const express = require('express');
const app = express();
const port =3000;

app.get('/',(req,res) => {
  res.send('Hola mi server');
})

app.get('/nueva-ruta',(req,res) => {
  res.send('Hola mi server,soy nueva ruta');
})

app.get('/producto',(req,res) => {
  res.json({
    name:'Product 1',
    price: 1000,
  });
})

app.listen(port,()=>{
  console.log('Mi port'+port);
});
