const port = 3000;

const express = require('express');
const app = express();
const database = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.get('/products', (req, res) => {
  res.send(database.getProducts());
});

app.get('/products/:id', (req, res, next) => {
  res.send(database.getProduct(req.params.id));
});

app.post('/products', (req, res, next) => {
  const product = database.saveProduct({
    name: req.body.name,
    price: req.body.price
  });
  res.send(product);
});

app.put('/products/:id', (req, res, next) => {
  const product = database.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  });
  res.send(product);
});

app.delete('/products/:id', (req, res, next) => {
  const product = database.deleteProduct(req.params.id);
  res.send(product);
});


app.use((req, res, next) => {
  console.log('Try another response');
  res.send('Another response');
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
