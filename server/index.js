'use strict';

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

    .get('/orders', (req, res) => {
        res.status(200).json({
            orders: [
                { iceCream: "chocolate", numOfScoops: 1 },
                { iceCream: "vanilla", numOfScoops: 1 },
                { iceCream: "strawberry", numOfScoops: 3 }
            ]
        })
    })

    .post('/api/form', (req, res) => {
        const { iceCream, numOfScoops } = req.body;
        if (!iceCream || !numOfScoops) {
            res.status(400).json({ status: 400, message: "oops! Missing data" })
        }
        else if (typeof Number(numOfScoops) !== "number" || typeof iceCream !== "string") {
            res.status(400).json({ status: 400, message: "oops! Inelligible values" })
        }
        else {
            //push into orders array
            res.status(200).json({ status: 200, message: "success! New order posted.", data: req.body })
        }
    })


    .listen(PORT, () => console.log(`Listening on port ${PORT}`));
