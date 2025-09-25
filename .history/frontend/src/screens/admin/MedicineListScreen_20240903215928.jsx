import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import styles from '../../constants/styles/stylesList'
import TopArea from '../../components/TopArea/TopArea'
import { api } from '../../lib/api'
import Footer from '../../components/Footer/Footer'

export default function MedicineListScreen({ navigation }) {
  const [medicine, setMedicine] = useState([])

  useEffect(() => {
    api.get('/medicine/list')
      .then(response => {
        setMedicine(response.data) // Atualiza com a lista de remédios
      })
      .catch(error => {
        console.error('Erro ao buscar remédios:', error)
      })
  }, []) // Array vazio garante que a requisição só seja feita uma vez

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopArea />
          <View style={styles.topContainer}>

            <FlatList
              data={medicine}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('MedicineDetails', { medicineId: item._id })}>
                  <Text style={styles.label1}>{item.name}</Text>
                  <Text style={styles.label2}>{item.category}</Text>
                  <Text style={styles.label2}>{item.description}</Text>
                </TouchableOpacity>
              )}
              scrollEnabled={false}
              ListHeaderComponent={
                <>

                  <Text style={styles.categoryText}>Lista de Remédios</Text>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterMedicine')}>
                    <Text style={styles.textButton}>CADASTRAR REMÉDIO</Text>
                  </TouchableOpacity>
                </>
              }
            />
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Início</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AdminMenu')} style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </ScrollView>

      </SafeAreaView>
    
  )
}
