const express = require('express');
const  router = express.Router();
const customerController = require('../controllers/customers');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/', requireAuth, customerController.getCustomers);

router.get('/', customerController.getCustomers);
router.get('/', customerController.getCustomer);
router.post('/', customerController.createCustomer);
router.put('/', customerController.updateCustomer);
router.delete('/', customerController.deleteCustomer);


module.exports = router;