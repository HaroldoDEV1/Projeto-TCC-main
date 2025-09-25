import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Modal, Button } from 'react-native';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'
import styles from '../../constants/styles/stylesCalendar'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default CalendarScreen ({ navigation }) {
  // Definindo estados para data selecionada, mês selecionado, eventos, visibilidade do modal, novo evento e data do evento
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [mesSelecionado, setMesSelecionado] = useState('Janeiro');
  const [eventos, setEventos] = useState([
    { id: 1, data: '01', diaSemana: 'DOM', detalhe: 'Tomar remédio Alegro - 1 comprimido', hora: '15:00', cor: '#FF5733' },
    { id: 2, data: '11', diaSemana: 'QUA', detalhe: 'Tomar remédio Alegro - 1 comprimido', hora: '15:00', cor: '#33FF57' },
    { id: 3, data: '30', diaSemana: 'SEG', detalhe: 'Tomar remédio Alegro - 1 comprimido', hora: '15:00', cor: '#3357FF' }
  ])
  const [modalVisible, setModalVisible] = useState(false);
  const [novoEvento, setNovoEvento] = useState({ detalhe: '', hora: '' });
  const [dataEvento, setDataEvento] = useState('');

  // Array de meses para navegação
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Função para mudar o mês
  const mudarMes = (direcao) => {
    const indiceAtual = meses.indexOf(mesSelecionado);
    const novoIndice = (indiceAtual + direcao + meses.length) % meses.length;
    setMesSelecionado(meses[novoIndice]);
  };

  // Definindo dias no mês como 31
  const diasNoMes = 31;
  const dias = Array.from({ length: diasNoMes }, (_, i) => i + 1);

  // Função para gerar uma cor aleatória
  const gerarCorAleatoria = () => {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  };

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
          cor: gerarCorAleatoria() // Atribuindo uma cor aleatória ao novo evento
        }
      ]);
      setModalVisible(false);
      setNovoEvento({ detalhe: '', hora: '' });
      setDataEvento('');
    }
  };

  // Função para obter o dia da semana com base na data
  const obterDiaSemana = (data) => {
    const diasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    const dataObj = new Date(`${mesSelecionado} ${data}, 2024`);
    return diasDaSemana[dataObj.getDay()];
  };

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

          <View style={styles.diasLinha}>
            {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].map((dia, index) => (
              <Text key={index} style={styles.nomeDia}>{dia}</Text>
            ))}
          </View>

          <View style={styles.diasContainer}>
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
            <Button title="Adicionar Evento" onPress={adicionarEvento} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>

      <Footer navigation={navigation} />

    </SafeAreaView>
  )
}