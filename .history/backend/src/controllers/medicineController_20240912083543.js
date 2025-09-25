const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Medicine = require('../models/medicineModel');

// Função para garantir que o diretório de uploads exista
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

// Configuração do Multer (armazenar arquivos)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads');
        ensureDirectoryExistence(uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

exports.createUpload = () => multer({ storage: storage });

// CRIAR REMÉDIO
exports.createMedicine = async (req, res) => {
    try {
        const { name, category, description, price } = req.body;

        if (!name || !category || !description || !price) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const image = req.files['image'] ? req.files['image'][0] : null;
        const bula = req.files['bula'] ? req.files['bula'][0] : null;

        let imagePath = null;
        let bulaPath = null;

        if (image) {
            imagePath = path.join('uploads', image.filename);
        }

        if (bula) {
            bulaPath = path.join('uploads', bula.filename);
        }

        const newMedicine = new Medicine({
            image: imagePath,
            name,
            category,
            description,
            bulaPdf: bulaPath,  // Correção do nome do campo
            price
        });

        await newMedicine.save();
        res.status(201).send(newMedicine);
    } catch (error) {
        console.error('Erro ao registrar o medicamento:', error);
        res.status(500).json({ error: 'Erro ao registrar o medicamento' });
    }
};

// LISTAR TODOS REMÉDIOS
exports.listMedicine = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).send(medicines);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao procurar remédios: ' + error.message });
    }
};

// LISTAR REMÉDIO POR ID
exports.getMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
            return res.status(404).send({ error: 'Remédio não encontrado' });
        }
        res.status(200).send(medicine);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar o remédio: ' + error.message });
    }
};

// ATUALIZAR REMÉDIO
exports.updateMedicine = async (req, res) => {
    try {
        const { image, name, category, description, bula, price } = req.body;

        const medicine = await Medicine.findByIdAndUpdate(
            req.params.id,
            { image, name, category, description, bulaPdf: bula, price },  //
            { new: true, runValidators: true }
        );

        if (!medicine) {
            return res.status(404).send({ error: 'Remédio não encontrado' });
        }
        res.status(200).send(medicine);
    } catch (error) {
        res.status(400).send({ error: 'Erro ao atualizar o remédio: ' + error.message });
    }
};

// DELETAR REMÉDIO
exports.deleteMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.findByIdAndDelete(req.params.id);
        if (!medicine) {
            return res.status(404).send({ error: 'Remédio não encontrado' });
        }
        res.status(200).send({ message: 'Remédio deletado com sucesso' });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao deletar o remédio: ' + error.message });
    }
};
