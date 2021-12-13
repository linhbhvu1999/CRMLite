const mongoose = require('mongoose');
const Todos = mongoose.model('Todos');


getTodos =  (req, res, next) => {
    const query = Todos.find({}, (error, todos) => { 
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todos);
        }
    })
};

getTodoByID = (req, res, next) => {
    const query = Todos.findOne({ _id: req.params.id }, (error, todos) => { 
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todos);
        }
    })
};

getTodoByTodo = (req, res, next) => {
    const query = Todos.findOne({ todo: req.params.todo }, (error, todos) => { 
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todos);
        }
    })
};

createTodo = (req, res, next) => {
    let todos = new Todos(req.body);
    todos.save().then(result => {
        res.status(201).json(result);
    })
    .catch(error => {
        return next(error);
    });
};

updateTodo = (req, res, next) => {
    Todos.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, safe: true, 
        multi: false }, (error, todos) => {
                if (error) {
                    return next(error);
                } else {
                    res.status(200).json(todos);
                }
            })
};

deleteTodo = (req, res, next) => {
    Todos.remove({ _id: req.params.id }, (error, todos) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todos);
        }
    });
};
        

module.exports = {
    getTodos,
    getTodoByID,
    getTodoByTodo,
    createTodo,
    updateTodo,
    deleteTodo
};
