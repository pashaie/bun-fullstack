import express from 'express';

const router = express.Router();

import { create, read, readById, update, remove } from '../controllers/countryController';

//CRUD
router.post('/', create);
router.get('/', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', remove);


export default router;