const express = require('express');
const  router = express.Router();
const customerRouter = require('./customers');
router.use('/customers', customerRouter);
module.exports = router;