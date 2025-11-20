import express from 'express';

const router = express.Router();

import { createTodo, readTodo, readTodos, updateTodo, deleteTodo } from '../controllers/todoController';

router.post('/', createTodo);
router.get('/', readTodos);
router.get('/:id', readTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;