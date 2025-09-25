import
export default async function handleLogin(email, password, setUser, navigation) {
    if (!email || !password) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }

    try {
        const response = await api.post('/users/login', {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            setUser(response.data) // Supondo que a resposta contenha dados do usuário
            navigation.navigate('Home')
            console.log('Logado com Sucesso!')
        } else {
            Alert.alert('Email ou Senha inválidos')
        }
    } catch (error) {
        // Mensagem de erro com dados do servidor
        console.log('Erro ao conectar ao servidor:', error.response?.data || error.message)
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.message || error.message)
    }
}
