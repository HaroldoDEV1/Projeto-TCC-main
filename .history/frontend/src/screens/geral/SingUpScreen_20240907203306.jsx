import { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import InputField from '../../components/Input'
import styles from '../../constants/styles/stylesLogin'
import handleRegister  from '../../functions/users/handleRegister'

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const onRegister = async () => {
    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !password) {
      Alert.alert('Por favor, preencha todos os campos')
      return
    }
    
    console.log('Registrando usuário com:', { name, email, password })
    
    try {
      await handleRegister(name, email, password, navigation)
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o registro. Verifique suas informações e tente novamente.')
      console.log('Erro ao registrar usuário:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Olá!{'\n'}Faça seu
          <Text style={{ color: '#038B4E' }}> CADASTRO </Text>
        </Text>

         <InputField
          placeholder="Digite seu nome"
          keyboardType="default"
          value={name}
          onChangeText={(text) => setName(text)}
        />

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
          
        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpText}>
            Já possui uma conta? 
            <Text style={{ color: '#22402F' }}> Faça seu login. </Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={require('../../assests/logo.png')} style={styles.image} />
        </View>

      </View>
    </SafeAreaView>
  )
}



