import { Alert } from "react-native"

export default async function handleLogin(email, password, navigation) {
    // Verifica se os campos estão preenchidos
    if (!email || !password) {
        Alert.alert('Por favor, preencha todos os campos') // Alert é como se fosse um pop-up
        return
    }
    
    try {
        // Conecta no backend e procura o usuario
        const response = await api.post('/users/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    
        if (response.ok) {
            // Se conseguir conectar e achar o usuario no banco
            const result = await response.json()
            navigation.navigate('Home')
            console.log('Logado com Sucesso!')
        }
        else {
            // Se nao conseguir
            Alert.alert('Email ou Senha inválidos')
        }
    }
    catch (error) {
        // Caso não consiga conectar no backend
        console.log('Erro ao conectar ao servidor:', error)
        Alert.alert('Erro ao conectar ao servidor') // Caso não consiga conectar no backend
    }
}
