import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#038B4E',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  mesTexto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 80 // Espaço para o botão de adicionar e o Footer
  },
  calendarioContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  },
  diasLinha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#E0E0E0'
  },
  nomeDia: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },
  diasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  dia: {
    width: width / 7,
    height: width / 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10
  },
  diaTexto: {
    fontSize: 16,
    color: '#333'
  },
  diaSelecionado: {
    borderWidth: 2,
    borderColor: '#038B4E'
  },
  textoDiaSelecionado: {
    color: '#038B4E'
  },
  linhaSeparadora: {
    height: 1,
    backgroundColor: '#E0E0E0'
  },
  eventosContainer: {
    padding: 10
  },
  evento: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  dataContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataTexto: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  diaSemanaTexto: {
    fontSize: 12,
    color: '#888'
  },
  infoEvento: {
    flex: 1,
    marginLeft: 10
  },
  detalheEvento: {
    fontSize: 16,
    marginBottom: 5
  },
  horaContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  horaEvento: {
    fontSize: 14,
    marginLeft: 5
  },
  botaoAdicionar: {
    position: 'absolute',
    bottom: 40, // Ajustado para que o botão fique mais alto na tela
    right: 20,
    backgroundColor: '#038B4E',
    borderRadius: 30,
    padding: 10,
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 1 // Garante que o botão fique acima de outros elementos
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalConteudo: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  }
})
