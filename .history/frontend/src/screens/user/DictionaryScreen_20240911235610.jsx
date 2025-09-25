import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import axios from 'axios'
import styles from '../../constants/styles/stylesDictionary'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function DictionaryScreen({ navigation }) {
  const [termo, setTermo] = useState('')
  const [resultado, setResultado] = useState([])
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  const buscarDefinicao = async () => {
    if (termo.trim() === '') return

    setLoading(true)
    setErro(null)

    try {
      const response = await axios.get(`https://api.dicio.com.br/v2/${termo}`)
      setResultado(response.data)
    } catch (error) {
      setErro('Erro ao buscar definição. Verifique seu termo e tente novamente.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopArea navigation={navigation} />
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Dicionário</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o termo para buscar"
          value={termo}
          onChangeText={setTermo}
        />

        <TouchableOpacity style={styles.button} onPress={buscarDefinicao}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator size="large" color="#038B4E" />}

        {erro && <Text style={styles.errorText}>{erro}</Text>}

        <FlatList
          data={resultado}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.definitionContainer}>
              <Text style={styles.term}>{item.term}</Text>
              <Text style={styles.definition}>{item.definition}</Text>
            </View>
          )}
          contentContainerStyle={styles.resultsContainer}
        />
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}
