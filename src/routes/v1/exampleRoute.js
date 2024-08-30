// src/routes/exampleRoute.js
const {
    getStatisticalUser,
    getStatisticalRegister,
    getStatisticalTurn,
    getStatisticalSumTurn,
    getStatisticalSumRegister
} = require('~/controllers/statisticalController');

const router = require('express').Router();


router.get('/statistical-user', getStatisticalUser);


router.get('/statistical-register', getStatisticalRegister);


router.get('/statistical-turn', getStatisticalTurn);


router.get('/statistical-sum-turn', getStatisticalSumTurn);


router.get('/statistical-sum-register', getStatisticalSumRegister);

module.exports = router;