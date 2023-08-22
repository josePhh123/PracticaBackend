const express = require("express");
const productsRouter= require('./products.router');
const peopleRouter= require('./people.router');
const categoriesRouter= require('./categories.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',productsRouter);
  router.use('/people',peopleRouter);
  router.use('/categories',categoriesRouter);
}

module.exports=routerApi;
