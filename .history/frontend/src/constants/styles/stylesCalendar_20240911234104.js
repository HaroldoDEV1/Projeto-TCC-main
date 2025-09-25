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
    backgroundColor: '#038B4E',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  mesTexto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: 10
  },
  calendarioContainer: {
    marginBottom: 20
  },
  diasLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  nomeDia: {
    width: (width - 40) / 7,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  diasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  dia: {
    width: (width - 40) / 7,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 5
  },
  diaSelecionado: {
    borderWidth: 2,
    borderColor: '#038B4E'
  },
  diaTexto: {
    fontSize: 16
  },
  textoDiaSelecionado: {
    color: 'white',
    fontWeight: 'bold'
  },
  linhaSeparadora: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10
  },
  eventosContainer: {
    marginBottom: 20
  },
  evento: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  dataTexto: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  diaSemanaTexto: {
    color: '#888'
  },
  infoEvento: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detalheEvento: {
    fontSize: 16
  },
  horaContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  horaEvento: {
    marginLeft: 5
  },
  botaoAdicionar: {
    backgroundColor: '#038B4E',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalConteudo: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: width - 40
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 15,
    padding: 10
  }
})
