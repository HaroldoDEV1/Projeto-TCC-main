import axios from 'axios'
import { api } from "../../lib/api"
import { Alert } from 'react-native'

export default async function handleRegister(name, email, password, navigation) {
    if (!name || !email || !password) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }

    try {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)

        // Enviar requisição POST para criar um usuário
        const response = await api.post('/users/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        // Verificar se a resposta foi bem-sucedida
        if (response.status === 201) {
            Alert.alert('Usuário registrado com sucesso')
            navigation.goBack() // Navegue para a tela de login ou outra tela conforme necessário
        } else {
            // Mostrar mensagem de erro
            const errorMsg = response.data?.message || 'Erro ao registrar usuário'
            Alert.alert('Erro ao registrar usuário', errorMsg)
            console.log('Resposta inesperada ao registrar usuário:', {
                status: response.status,
                data: response.data
            })
        }
    } catch (error) {
        // Capturar e logar erros de conexão e resposta do servidor
        console.log('Erro ao conectar ao servidor:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        })
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
