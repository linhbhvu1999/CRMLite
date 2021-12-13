const logger = require('../../config/logger');
const Mongoose = require('mongoose');
const Users = Mongoose.model('Users');

getUsers = (req, res, next) => {
    logger.log('Getting all users', 'info');
    const query = Users.find({}, (error, users) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(users);
        }
    })
};


getUser = (req, res, next) => {
    logger.log('Getting all users', 'info');
    const query = Users.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(user);
        }
    })
};

createUser = (req, res, next) => {
    logger.log('Create user');
    console.log(req.body);
    let user = new Users(req.body);
    user.save().then(result => {
        res.status(201).json(result);
    })
    }

updateUser = (req, res, next) => {
        Users.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, safe: true, 
    multi: false }, (error, user) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json(user);
            }
        })
    }


deleteUser = (req, res, next) => {
        Users.remove({ _id: req.params.id }, (error, user) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json(user);
            }
        });
    }

 module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    }