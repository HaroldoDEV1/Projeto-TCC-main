import axios from 'axios'
import { api } from "../../lib/api"
import { Alert } from 'react-native'

export default async function handleRegister(name, email, password, navigation) {
    if (!name || !email || !password) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }

    try {
        // Enviar dados como JSON
        const response = await api.post('/users/create', {
            name,
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.status === 201) {
            Alert.alert('Usuário registrado com sucesso')
            navigation.goBack()
        } else {
            const errorMsg = response.data?.message || 'Erro ao registrar usuário'
            Alert.alert('Erro ao registrar usuário', errorMsg)
            console.log('Resposta inesperada ao registrar usuário:', {
                status: response.status,
                data: response.data
            })
        }
    } catch (error) {
        console.log('Erro ao conectar ao servidor:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        })
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
