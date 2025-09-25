// src/screens/geral/LoginScreen.js
import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Alert } from 'react-native'
import InputField from '../../components/Input'
import styles from '../../constants/styles/stylesLogin'

export default function LoginScreen({ navigation, setUserRole }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (password === 'tcc@2024') {
      setUserRole('admin')
    } else {
      setUserRole('user')
    }
    navigation.navigate('UserDrawer') // Navegue para o Drawer após o login
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
          onChangeText={setEmail}
        />

        <InputField
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
