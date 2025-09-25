import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from '../../constants/styles/stylesDetails'
import handleUpdate from '../../functions/medicine/handleUpdate'
import handleDelete from '../../functions/medicine/handleDelete'
import { api } from '../../lib/api'
import { ScrollView } from 'react-native-gesture-handler'
import TopArea from '../../components/TopArea/TopArea'
import * as DocumentPicker from 'expo-document-picker'
import Footer from '../../components/Footer/Footer'

export default function MedicineDetailsScreen({ route, navigation }) {
  const { medicineId } = route.params || {}
  const [medicine, setMedicine] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    api.get(`/medicine/${medicineId}`)
      .then(response => {
        setMedicine(response.data)
        setName(response.data.name)
        setCategory(response.data.category)
        setDescription(response.data.description)
        setPrice(response.data.price)
      })
      .catch(error => {
        console.error('Erro ao buscar remédio:', error)
      })
  }, [medicineId])


  const onUpdate = () => {
    handleUpdate(route, navigation, name, category, description, price)
  }

  const onDelete = () => {
    handleDelete(route, navigation)
  }


  return (
    <ScrollView> 
      <SafeAreaView style={styles.container}>
        <TopArea />

        <View style={styles.contentContainer}>

          <Text style={styles.label}>Nome do Remédio:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Digite o nome do remédio"/>

          <Text style={styles.label}>Categoria do Remédio:</Text>
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={setCategory}
            placeholder="Digite a categoria do remédio"/>

          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Digite a descrição do remédio"
            multiline
            numberOfLines={4}/>

          <Text style={styles.label}>Preço:</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Digite o preço do remédio"
            keyboardType="numeric"/>

          <TouchableOpacity style={styles.button} onPress={onUpdate}>
            <Text style={styles.textButton}> Atualizar Remédio </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onDelete}>
            <Text style={styles.textButton}> Deletar Remédio </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.footer}>
          <Footer navigation={navigation} />
        </View>

      </SafeAreaView>

    </ScrollView>
  )
}
