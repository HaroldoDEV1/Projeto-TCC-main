import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../../constants/styles/stylesList'
import TopArea from '../../components/TopArea/TopArea'
import { api } from '../../lib/api'
import Footer from '../../components/Footer/Footer'

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.get('/users/list')
      .then(response => {
        setUsers(response.data) // atualiza com a lista de usuários
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error)
      })
  }, []) // array vazio garante que a requisição só seja feita uma vez

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <FlatList
            data={users}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.list}
                onPress={() => navigation.navigate('UserDetail', { userId: item._id })}
              >
                <Text style={styles.label1}>{item.name}</Text>
                <Text style={styles.label2}>{item.email}</Text>
              </TouchableOpacity>
            )}
            scrollEnabled={false}
            ListHeaderComponent={
              <>
                <TopArea />

                <Text style={styles.categoryText}>Lista de Usuários</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterUser')}>
                  <Text style={styles.textButton}>CADASTRAR USUÁRIO</Text>
                </TouchableOpacity>
                
              </>
            }
          />
          
        </View>
        
      </View>
    </ScrollView>
  )
}
