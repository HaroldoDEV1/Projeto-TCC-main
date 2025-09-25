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





