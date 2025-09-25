import axios from 'axios'

import { Alert } from 'react-native'

export default async function handleRegister (name, email, password, navigation) {
    if (!name || !email || !password) {
    Alert.alert('Por favor, preencha todos os campos')
    return
    }

    try {
        const response = await api.post('/users/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (response.ok) {
            Alert.alert('Usuário registrado com sucesso')
            navigation.goBack() // Navegue para a tela de login ou outra tela conforme necessário
        }
        else {
            Alert.alert(result.msg || 'Erro ao registrar usuário')
            console.log('Erro ao registrar usuário: ', result.msg)
        }
    }
    catch(error){
    console.log('Erro ao conectar ao servidor:', error)
    Alert.alert('Erro ao conectar ao servidor')
    }
}
