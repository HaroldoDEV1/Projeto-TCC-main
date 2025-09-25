import { Alert } from 'react-native'
import axios from 'axios'
import { api } from '../../lib/api'

export default async function handleLogin(email, password, navigation) {
    // Verifica se os campos estão preenchidos
    if (!email || !password) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }
    
    try {
        // Verifica se é o login do admin
        if (email === 'admin@example.com' && password === 'tcc@2024') {
            // Navega para a tela de AdminMenu se for admin
            navigation.navigate('AdminMenu')
            console.log('Logado como Admin com Sucesso!')
            return
        }

        // Envia os dados para o backend
        const response = await api.post('/users/login', {
            email,
            password
        })

        if (response.status === 200) {
            // Sucesso no login para usuário comum
            navigation.navigate('Home')
            console.log('Logado com Sucesso!')
        } else {
            // Resposta do servidor não é 200
            Alert.alert('Email ou Senha inválidos')
        }
    } catch (error) {
        // Erro ao conectar ao servidor
        console.log('Erro ao conectar ao servidor:', error.response?.data || error.message)
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
