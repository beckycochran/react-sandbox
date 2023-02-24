'use strict';
const { v4: uuidv4 } = require('uuid');
const {orders} = require("./data")
const express = require('express');
const morgan = require('morgan');
const PORT = 8002
express()
    .use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    })
    .use(morgan('tiny'))
    .use(express.static('public'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))

    // endpoints

    .get('/api/get-orders', (req, res) => {
        res.status(200).json({
            status: 200, 
            orders
        })
    })

    .get('/api/:orderId', (req, res) => {
        const {orderId} = req.params;
        const order = orders.find(o=> o.id === orderId)
        order ?
        res.status(200).json({
            status: 200, 
            order
        }) :
        res.status(400).json({
            status: 400,
            error: "order not found"
        })
    })


    .post('/api/post-order', (req, res) => {
        const { iceCream, numOfScoops } = req.body;
        if (!iceCream || !numOfScoops) {
            res.status(400).json({ status: 400, error: "oops! Missing data" })
        }
        else {
            //push into orders array
            const newId = uuidv4();
            const newOrder = {...req.body, id: newId}
            orders.push(newOrder)
            res.status(200).json({ status: 200, message: "success! New order posted.", data: newOrder })
        }
    })


    .listen(PORT, () => console.log(`Listening on port ${PORT}`));
