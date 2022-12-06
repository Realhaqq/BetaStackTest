const express = require('express');

const router = express.Router();

const { withAuth} = require('../middlewares/auth.middleware');
const {
  getAllTodos, createTodo, deleteTodo, updateTodo
} = require('../controllers/todo.controller');


router.get('/todos', withAuth, getAllTodos);
router.post('/todos', withAuth, createTodo);
router.delete('/todos/:id', withAuth, deleteTodo);
router.put('/todos/:id', withAuth, updateTodo);


module.exports = router;