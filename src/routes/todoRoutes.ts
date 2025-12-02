import express from 'express';

const router = express.Router();

import { createTodo, readTodo, readTodos, updateTodo, deleteTodo } from '../controllers/todoController';

//CRUD
router.post('/', createTodo);
router.get('/', readTodos);
router.get('/:id', readTodo);
router.put('/:id', updateTodo);
//TODO: Patch
router.delete('/:id', deleteTodo);

//REST API
// router.post('/all-done', createTodo);

export default router;