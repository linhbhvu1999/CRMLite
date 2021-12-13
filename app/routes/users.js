const express = require('express');
const router = express.Router();
const userController= require('../controllers/users');
const passportService = require('../../config/passport');
const passport = require('passport');

const requireLogin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false});

router.get('/', userController.getUsers);
router.get('/:id', requireAuth, userController.getUser);
router.post('/', userController.createUser);
router.put('/', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.route('/login').post(requireLogin, login);

module.exports = router;