const express = require('express');

const router = express.Router();

const { withAuth} = require('../middlewares/auth.middleware');
const {
  getAllTodos, createTodo, deleteTodo, updateTodo
} = require('../controllers/todo.controller');


router.get('/todos', withAuth, getAllTodos);


module.exports = router;