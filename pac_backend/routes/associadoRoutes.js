import express from 'express';
import { getAssociados, createAssociados, updateAssociado, deleteAssociado } from '../controllers/associado_controllers.js';

const router = express.Router();

router.get('/', getAssociados);
router.post('/', createAssociados);
router.put('/:id', updateAssociado);
router.delete('/:id', deleteAssociado);

export default router;
