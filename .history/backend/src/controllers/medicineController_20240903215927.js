const multer = require('multer')
const path = require('path')
const Medicine = require('../models/medicineModel')

// Configuração Multer (armazenar arquivos)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads') // Caminho relativo ao diretório 'uploads'
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const createUpload = () => multer({ storage: storage })
exports.createUpload = createUpload

// CRIAR REMÉDIO
exports.createMedicine = async (req, res) => {
    try {
        const { name, category, description, price } = req.body

        // Verificação de dados básicos
        if (!name || !category || !description || !price) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        }

        // Verificação e processamento dos arquivos
        const image = req.files['image'] ? req.files['image'][0] : null
        const bula = req.files['bula'] ? req.files['bula'][0] : null

        // Garantir que o diretório de uploads exista
        ensureDirectoryExistence('uploads')

        const imagePath = path.join('uploads', image.fieldname + '-' + Date.now() + path.extname(image.originalname))
        const bulaPath = path.join('uploads', bula.fieldname + '-' + Date.now() + path.extname(bula.originalname))

        // Mover os arquivos para o diretório correto
        fs.renameSync(image.path, imagePath)
        fs.renameSync(bula.path, bulaPath)

        console.log('Arquivos movidos para os diretórios corretos')

        const newMedicine = new Medicine({
            image: imagePath,
            name,
            category,
            description,
            bula: bulaPath,
            price
        })

        await newMedicine.save()

        console.log('Medicamento salvo no banco de dados')
        res.status(201).send(newMedicine)
    } catch (error) {
        console.error('Erro ao registrar o medicamento:', error)
        res.status(500).json({ error: 'Erro ao registrar o medicamento' })
    }
}

// LISTAR TODOS REMÉDIOS
exports.listMedicine = async (req, res) => {
  try {
    // Procura todos os remédios
    const medicines = await Medicine.find()
    res.status(200).send(medicines)
  }
  // Caso não consiga procurar
  catch (error) {
    res.status(500).send({
      error: 'Erro ao procurar remédios: ' + error.message
    })
  }
}

// LISTAR REMÉDIO POR ID
exports.getMedicine = async (req, res) => {
  try{
    // Tenta achar algum remédio com o ID
    const medicine = await Medicine.findById(req.params.id)

    // Caso não encontre o remédio
    if(!medicine){
      return res.status(404).send({
        error: 'Remédio não encontrado'
      })
    }

    // Caso encontre o remédio
    res.status(200).send(medicine)
  }

  // Caso não consiga buscar
  catch(error){
    res.status(500).send({
      error: "Erro ao buscar o remédio: " + error.message
    })
  }
}

// ATUALIZAR REMÉDIO
exports.updateMedicine = async (req, res) => {
  try{
    const { image, name, category, description, bula, price } = req.body

    const medicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      {image, name, category, description, bula, price},
      {new: true, rundValidators: true} // Retorna o remédio atualizado e validado
    )
    
    // Caso não ache o remédio
    if(!medicine){
      return res.status(404).send({
        error: 'Remédio não encontrado'
      })
    }
    // Caso ache o usuário
    res.status(200).send(medicine)
  }
  catch (error){
    // Casa não consiga atualizar
    res.status(400).send({
      error: "Erro ao atualizar o remédio: " + error.message
    })
  }
}

// DELETAR REMÉDIO
exports.deleteMedicine = async (req, res) => {
  try{
    const medicine = await Medicine.findByIdAndDelete(req.params.id)

    // Caso não ache o remédio
    if(!medicine){ 
      return res.status(404).send({
        error: "Remédio não encontrado"
      })
    }

    // Caso ache o remédio
    res.status(200).send({
      message: "Remédio deletado com sucesso"
    })

  }
  // Caso de erro ao deletar
  catch(error){
    res.status(500).send({
      error: "Erro ao deletar o remédio: " + error.message
    })
  }

  
}

