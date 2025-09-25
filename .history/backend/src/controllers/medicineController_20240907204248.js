const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Medicine = require('../models/medicineModel')

// Função para garantir que o diretório de uploads exista
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath)
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true })
    }
}

// Configuração do Multer (armazenar arquivos)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads')
        ensureDirectoryExistence(uploadPath)
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })
exports.upload = upload

// CRIAR REMÉDIO
exports.createMedicine = async (req, res) => {
    try {
        // Verificação de dados básicos
        const { name, category, description, price } = req.body
        if (!name || !category || !description || !price) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        }

        // Verificação e processamento dos arquivos
        const image = req.file ? req.file.path : null
        const bula = req.files['bula'] ? req.files['bula'][0].path : null

        const newMedicine = new Medicine({
            image,
            name,
            category,
            description,
            bula,
            price
        })

        await newMedicine.save()

        res.status(201).send(newMedicine)
    } catch (error) {
        console.error('Erro ao registrar o medicamento:', error)
        res.status(500).json({ error: 'Erro ao registrar o medicamento' })
    }
}
