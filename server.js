'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

const { cartItems } = require('./routes/cart-items');

app.use(cors());

app.use('/', cartItems);

// app.get('/', (req, res) => {
//     res.send(items[1]);
// });

app.listen(port, () => console.log(`Server up and running on port: ${port}`));
