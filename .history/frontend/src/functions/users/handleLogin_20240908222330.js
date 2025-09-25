import { Alert } from 'react-native'
import { api } from '.'

export default async function handleLogin(email, password, setUser, navigation) {
    if (!email || !password) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }

    try {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)

        const response = await api.post('/users/login', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (response.status === 200) {
            const user = response.data

            if (password === 'tcc@2024') {
                setUser({ ...user, isUser: true })
            } else {
                setUser({ ...user, isUser: false })
            }

            navigation.navigate('Home')
            console.log('Logado com Sucesso!')
        } else {
            Alert.alert('Email ou Senha inválidos')
        }
    } catch (error) {
        console.log('Erro ao conectar ao servidor:', error.response?.data || error.message)
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
