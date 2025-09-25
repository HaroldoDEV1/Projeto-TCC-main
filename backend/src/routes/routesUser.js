const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

// ROTAS DO USUÁRIO
router.post('/create', UserController.createUser)
router.get('/list', UserController.listUser)
router.post('/login', UserController.loginUser)
router.get('/:id', UserController.getUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)
router.get('/search', UserController.searchUser)

module.exports = router