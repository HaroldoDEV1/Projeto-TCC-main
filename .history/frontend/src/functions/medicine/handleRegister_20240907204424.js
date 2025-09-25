import axios from 'axios'
import { api } from "../../lib/api"
import { Alert } from 'react-native'

export default async function handleRegister(navigation, image, name, category, description, bula, price) {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!name || !category || !description || !price) {
        Alert.alert('Por favor, preencha todos os campos.')
        return
    }

    // Cria o objeto de dados a ser enviado em JSON
    const payload = {
        name,
        category,
        description,
        price: price.toString(),
        image: image ? {
            uri: image.uri,
            type: 'image/jpeg',
            name: image.name || 'image.jpg',
        } : undefined,
        bula: bula ? {
            uri: bula.uri,
            type: 'application/pdf',
            name: bula.name || 'bula.pdf',
        } : undefined,
    }

    try {
        // Envia a requisição para o backend
        const response = await api.post('/medicine/create', payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        // Verifica o status da resposta
        if (response.status === 201) {
            Alert.alert('Remédio cadastrado com sucesso')
            navigation.goBack()
        } else {
            const errorMsg = response.data?.message || 'Erro ao cadastrar remédio'
            Alert.alert('Erro ao cadastrar remédio', errorMsg)
            console.log('Resposta inesperada ao cadastrar remédio:', {
                status: response.status,
                data: response.data
            })
        }
    } catch (error) {
        // Log detalhado e alerta em caso de erro
        console.log('Erro ao conectar ao servidor:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        })
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
