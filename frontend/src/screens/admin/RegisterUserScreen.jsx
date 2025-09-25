import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, TextInput } from 'react-native'
import styles from '../../constants/styles/stylesRegister'
import handleRegister from '../../functions/users/handleRegister'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function RegisterUserScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onRegister = () => {
    handleRegister(name, email, password, navigation)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Cadastro do Usuário</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#888888"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#888888"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#888888"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}
