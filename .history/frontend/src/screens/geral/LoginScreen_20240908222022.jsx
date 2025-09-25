import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useUser } from '../../context/UserContext'
import axios from 'axios'
import { api } from '../../lib/api'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useUser()

    const handleLogin = async () => {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Olá!{'\n'}Faça seu
          <Text style={{ color: '#038B4E' }}> LOGIN </Text>
        </Text>
          
        <InputField
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          placeholder="Digite sua senha"
          keyboardType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
          
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Esqueceu sua senha?')}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Ainda não possui uma conta? <Text style={{ color: '#22402F' }}>Faça seu cadastro.</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AdminMenu')}>
          <Text style={styles.forgotPasswordText}> Entrar como Administrador </Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={require('../../assests/logo.png')} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  )
}
