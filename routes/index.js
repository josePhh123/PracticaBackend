const productsRouter= require('./products.router');
const peopleRouter= require('./people.router');
const categoriesRouter= require('./categories.router');


function routerApi(app){
  app.use('/products',productsRouter);
  app.use('/people',peopleRouter);
  app.use('/categories',categoriesRouter);
}

module.exports=routerApi;
