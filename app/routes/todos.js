const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todos');


router.get('/todos',todoController.getTodos);

router.get('/todos/:id',todoController.getTodoByID);

router.get('/todos/todo/:todo',todoController.getTodoByTodo);

router.post('/todos',todoController.createTodo);

router.put('/todos',todoController.updateTodo );

router.delete('/todos/:id',todoController.deleteTodo );



module.exports = router;