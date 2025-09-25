import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, TextInput, Modal, Button, Alert } from 'react-native'
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'
import styles from '../../constants/styles/stylesCalendar'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function CalendarScreen({ navigation }) {
  // Estados para a data selecionada, mês selecionado, eventos e visibilidade do modal
  const [dataSelecionada, setDataSelecionada] = useState(null)
  const [mesSelecionado, setMesSelecionado] = useState('Janeiro')
  const [eventos, setEventos] = useState([
    { id: 1, data: '01', diaSemana: 'DOM', detalhe: 'Tomar remédio Alegro - 1 comprimido', hora: '15:00', cor: '#FF5733' },
    { id: 2, data: '11', diaSemana: 'QUA', detalhe: 'Tomar remédio Alegro - 1 comprimido', hora: '15:00', cor: '#33FF57' },
    { id: 3, data: '30', diaSemana: 'SEG', detalhe: 'Tomar remédio Alegro - 1 comprimido', hora: '15:00', cor: '#3357FF' }
  ])
  const [modalVisible, setModalVisible] = useState(false)
  const [novoEvento, setNovoEvento] = useState({ detalhe: '', hora: '' })
  const [dataEvento, setDataEvento] = useState('')

  // Array de meses e dias da semana
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]
  const diasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

  // Calcula o número de dias no mês e o dia da semana do primeiro dia do mês
  const calcularDiasDoMes = () => {
    const data = new Date(`2024-${meses.indexOf(mesSelecionado) + 1}-01`)
    const diasNoMes = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate()
    const primeiroDia = data.getDay()  // O dia da semana do primeiro dia do mês
    return { diasNoMes, primeiroDia }
  }

  const { diasNoMes, primeiroDia } = calcularDiasDoMes()
  const dias = Array.from({ length: diasNoMes }, (_, i) => i + 1)
  const diasPreenchidos = Array.from({ length: primeiroDia }, (_, i) => i + 1)

  // Função para mudar o mês
  const mudarMes = (direcao) => {
    const indiceAtual = meses.indexOf(mesSelecionado)
    const novoIndice = (indiceAtual + direcao + meses.length) % meses.length
    setMesSelecionado(meses[novoIndice])
  }

  // Função para gerar uma cor aleatória
  const gerarCorAleatoria = () => {
    const letras = '0123456789ABCDEF'
    let cor = '#'
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)]
    }
    return cor
  }

  // Função para adicionar um novo evento
  const adicionarEvento = () => {
    if (dataEvento && novoEvento.detalhe && novoEvento.hora) {
      setEventos(prevEventos => [
        ...prevEventos,
        {
          id: prevEventos.length + 1,
          data: dataEvento,
          diaSemana: obterDiaSemana(dataEvento),
          detalhe: novoEvento.detalhe,
          hora: novoEvento.hora,
          cor: gerarCorAleatoria()
        }
      ])
      setModalVisible(false)
      setNovoEvento({ detalhe: '', hora: '' })
      setDataEvento('')
    } else {
      Alert.alert('Preencha todos os campos', 'Certifique-se de preencher todos os campos antes de adicionar um evento.')
    }
  }

  // Função para obter o dia da semana com base na data
  const obterDiaSemana = (data) => {
    const diasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
    const dataObj = new Date(`2024-${meses.indexOf(mesSelecionado) + 1}-${data}`)
    return diasDaSemana[dataObj.getDay()]
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => mudarMes(-1)}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.mesTexto}>{mesSelecionado}</Text>
        <TouchableOpacity onPress={() => mudarMes(1)}>
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.calendarioContainer}>
          {/* Cabeçalho com os nomes dos dias da semana */}
          <View style={styles.diasLinha}>
            {diasDaSemana.map((dia, index) => (
              <Text key={index} style={styles.nomeDia}>{dia}</Text>
            ))}
          </View>

          {/* Exibe os dias do mês */}
          <View style={styles.diasContainer}>
            {/* Espaços vazios antes do primeiro dia do mês para alinhamento */}
            {diasPreenchidos.map((_, index) => (
              <View key={index} style={[styles.dia, styles.diaVazio]} />
            ))}
            {dias.map((dia, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dia,
                  dataSelecionada === dia && styles.diaSelecionado,
                  eventos.some(evento => evento.data === dia.toString()) && { backgroundColor: eventos.find(evento => evento.data === dia.toString()).cor }
                ]}
                onPress={() => setDataSelecionada(dia)}
              >
                <Text style={[styles.diaTexto, dataSelecionada === dia && styles.textoDiaSelecionado]}>{dia}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.linhaSeparadora} />
        </View>

        {/* Exibe a lista de eventos */}
        <View style={styles.eventosContainer}>
          {eventos.map(evento => (
            <View key={evento.id} style={styles.evento}>
              <View style={styles.dataContainer}>
                <Text style={styles.dataTexto}>{evento.data}</Text>
                <Text style={styles.diaSemanaTexto}>{evento.diaSemana}</Text>
              </View>
              <View style={styles.infoEvento}>
                <Text style={styles.detalheEvento}>{evento.detalhe}</Text>
                <View style={styles.horaContainer}>
                  <FontAwesome name="bell" size={16} color={evento.cor} />
                  <Text style={styles.horaEvento}>{evento.hora}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.botaoAdicionar} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>

      {/* Modal para adicionar novos eventos */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalConteudo}>
            <TextInput
              style={styles.input}
              placeholder="Detalhes do Evento"
              value={novoEvento.detalhe}
              onChangeText={text => setNovoEvento(prev => ({ ...prev, detalhe: text }))}
            />
            <TextInput
              style={styles.input}
              placeholder="Hora (ex: 15:00)"
              value={novoEvento.hora}
              onChangeText={text => setNovoEvento(prev => ({ ...prev, hora: text }))}
            />
            <TextInput
              style={styles.input}
              placeholder="Data (ex: 01)"
              value={dataEvento}
              onChangeText={text => setDataEvento(text)}
              keyboardType="numeric"
            />
             <View style={styles.botaoModal}>
              <Button title="Adicionar Evento" onPress={adicionarEvento} color="green"   />
            </View>
            <View style={styles.botaoModal}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="green" />
            </View>
          </View>
        </View>
      </Modal>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}
