import { Alert } from "react-native"
import axios from "axios"
import { api } from "../../lib/api"

export default async function handleLogin(email, password, navigation) {
    // Verifica se os campos estão preenchidos
    if (!email || !password) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }
    
    try {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        
        // Conecta no backend e procura o usuario
        const response = await api.post('/users/login', formData, {
            headers: {
                'Content-Type': 'multipart/json',
            },
        })

        if (response.status === 200) {
            // Se conseguir conectar e achar o usuario no banco
            navigation.navigate('Home')
            console.log('Logado com Sucesso!')
        } else {
            // Se não conseguir
            Alert.alert('Email ou Senha inválidos')
        }
    }
    catch (error) {
        // Caso não consiga conectar no backend
        console.log('Erro ao conectar ao servidor:', error.response?.data || error.message)
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
