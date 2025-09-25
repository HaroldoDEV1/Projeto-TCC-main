const express = require('express')
const router = express.Router()
const { createMedicine, listMedicine, getMedicine, updateMedicine, deleteMedicine, createUpload } = require('../controllers/medicineController')

// Middleware do Multer para upload de arquivos
const upload = createUpload()

// Rotas de CRUD para medicamentos
router.post('/create', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'bula', maxCount: 1 }]), createMedicine)
router.get('/l', listMedicine)
router.get('/:id', getMedicine)
router.put('/:id', updateMedicine)
router.delete('/:id', deleteMedicine)

module.exports = router
