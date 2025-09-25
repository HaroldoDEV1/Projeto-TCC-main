import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from '../../constants/styles/stylesDetails'
import handleUpdate from '../../functions/users/handleUpdate'
import handleDelete from '../../functions/users/handleDelete'
import { api } from '../../lib/api'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function UserDetailsScreen({ route, navigation }) {
  const { userId } = route.params || {}
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    api.get(`/users/${userId}`)
      .then(response => {
        setUser(response.data)
        setName(response.data.name)
        setEmail(response.data.email)
        setPassword(response.data.password)
      })
      .catch(error => {
        console.error('Erro ao buscar usuário:', error)
      })
  }, [userId])

  const onUpdate = () => {
    handleUpdate(name, email, password, navigation, route)
  }

  const onDelete = () => {
    handleDelete(route, navigation)
  }

  if (!user) {
    return <Text>Carregando...</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />
      <View style={styles.contentContainer}>

        <Text style={styles.label}>Nome do Usuário:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite o nome do usuário"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email do usuário"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digitea do usuário"
        />

        <TouchableOpacity style={styles.button} onPress={onUpdate}>
          <Text style={styles.textButton}>Atualizar Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Text style={styles.textButton}>Deletar Usuário</Text>
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
