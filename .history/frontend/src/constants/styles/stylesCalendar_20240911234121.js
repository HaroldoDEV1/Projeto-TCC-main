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
    border
