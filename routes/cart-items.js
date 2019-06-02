const express = require("express");
const cartItems = express.Router();

const items = [
    {id: "1", product: "apples", price: "$2.00", quantity: "5"},
    {id: "2", product: "oranges", price: "$1.50", quantity: "4"},
    {id: "3", product: "bananas", price: "$3.00", quantity: "6"}
]

cartItems.get('/', (req, res) => {
    res.json({ data: items });
});

cartItems.post('/', (req, res) => {
    console.log(req.body);
});

cartItems.put('/:id', (req, res) => {
    console.log(req.params.id);
});

cartItems.delete('/:id', (req, res) => {
    console.log(req.params.id);
});

module.exports = {
    cartItems
};