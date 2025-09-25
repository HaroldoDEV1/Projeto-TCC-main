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
        <Text style={styles.title}> Cadastro do Usuário </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Início</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AdminMenu')} style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Menu</Text>
              </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
