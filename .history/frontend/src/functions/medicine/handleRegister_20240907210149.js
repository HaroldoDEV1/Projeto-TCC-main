import axios from 'axios'
import { api } from "../../lib/api"
import { Alert } from 'react-native'

export default async function handleRegister(name, email, password, imageUri, navigation) {
    if (!name || !email || !password) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('category', category)
    formData.append('description', password)
    name,
        category,
        description,
        price: price.toString(),

    if (imageUri) {
        formData.append('image', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'image.jpg'
        })
    }

    try {
        const response = await api.post('/medicine/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (response.status === 201) {
            Alert.alert('Medicamento registrado com sucesso')
            navigation.goBack()
        } else {
            const errorMsg = response.data?.error || 'Erro ao registrar medicamento'
            Alert.alert('Erro ao registrar medicamento', errorMsg)
        }
    } catch (error) {
        console.error('Erro ao conectar ao servidor:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        })
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
