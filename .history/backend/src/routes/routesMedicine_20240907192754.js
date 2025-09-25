const express = require('express')
const router = express.Router()

const { createUpload, createMedicine, listMedicine, getMedicine, updateMedicine, deleteMedicine } = require('../controllers/medicineController')
const upload = createUpload()

// ROTAS DO REMÉDIO
router.post('/create', upload.fields([{ name: 'image' }, { name: 'bula' }]), createMedicine)
router.get('/list', listMedicine)
router.get('/:id', getMedicine)
router.put('/:id', updateMedicine)
router.delete('/:id', deleteMedicine)

module.exports = router

const express = require('express')
const router = express.Router()
const { createMedicine, listMedicine, getMedicine, updateMedicine, deleteMedicine, createUpload } = require('../controllers/medicineController')

// Middleware do Multer para upload de arquivos
const upload = createUpload()

// Rotas de CRUD para medicamentos
router.post('/create', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'bula', maxCount: 1 }]), createMedicine)
router.get('/', listMedicine)
router.get('/:id', getMedicine)
router.put('/:id', updateMedicine)
router.delete('/:id', deleteMedicine)

module.exports = router




