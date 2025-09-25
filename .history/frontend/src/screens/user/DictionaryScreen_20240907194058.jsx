import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'
import styles from '../../constants/styles/stylesDictionary'

// Lista de palavras e significados
const DICIONARIO = [
  { palavra: 'React', significado: 'Uma biblioteca JavaScript para construir interfaces de usuário.' },
  { palavra: 'Expo', significado: 'Uma estrutura e plataforma para aplicativos React universais.' },
  { palavra: 'JavaScript', significado: 'Uma linguagem de programação que é uma das tecnologias principais da web.' },
  { palavra: 'API', significado: 'Interface de Programação de Aplicações, um conjunto de funções e procedimentos que permite a criação de aplicativos que acessam as funcionalidades ou dados de um sistema operacional, aplicativo ou outros serviços.' },
  // Adicione mais palavras e significados conforme necessário
]

export default fun DictionaryScreen = ({ navigation }) => {
  const [termoBusca, setTermoBusca] = useState('')
  const [palavrasFiltradas, setPalavrasFiltradas] = useState(DICIONARIO)

  // Função para lidar com a busca
  const handleBusca = (texto) => {
    setTermoBusca(texto);
    const filtrado = DICIONARIO.filter(item =>
      item.palavra.toLowerCase().includes(texto.toLowerCase())
    )
    setPalavrasFiltradas(filtrado)
  }

  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.palavra}</Title>
        <Paragraph>{item.significado}</Paragraph>
      </Card.Content>
    </Card>
  )

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />
      <TextInput
        style={styles.input}
        placeholder="Buscar uma palavra..."
        value={termoBusca}
        onChangeText={handleBusca}
      />
      <FlatList
        data={palavrasFiltradas}
        keyExtractor={(item) => item.palavra}
        renderItem={renderItem}
      />
      <Footer navigation={navigation} />

    </SafeAreaView>
  )
}

