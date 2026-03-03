import express from 'express'
import { Router } from 'express'
import { getAll,writeBM,deleteBM } from '../controllers/bm.js'

const router = Router();


router.get('/' , getAll)
router.post('/' , writeBM)
router.delete('/:id' , deleteBM)

export default router;