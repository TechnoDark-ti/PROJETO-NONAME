import express from "express"

import { getProfissionais, createProfissionais, updateProfissional, deleteProfissional } from "../controllers/profissional_controller.js"

const router = express.Router()

router.get('/profissional', getProfissionais)
router.post('/profissional', createProfissionais)
router.put('/profissional/:id', updateProfissional)
router.delete('/profissional/:id', deleteProfissional)

export default router