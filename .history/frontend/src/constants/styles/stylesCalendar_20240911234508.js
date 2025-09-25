import { StyleSheet, Dimensions } from 'react-native'

// Obtém as dimensões da tela
const { width } = Dimensions.get('window')

// Define o tamanho do calendário
const itemSize = width / 7 // 7 dias na semana

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Cor de fundo clara
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#038B4E', // Cor de fundo do cabeçalho
  },
  mesTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexGrow: 1,
  },
  calendarioContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000', // Sombra para destacar o calendário
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  diasLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nomeDia: {
    width: itemSize,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#038B4E', // Cor dos dias da semana
  },
  diasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dia: {
    width: itemSize,
    height: itemSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50, // Bordas arredondadas para os dias
    marginBottom: 5,
  },
  diaVazio: {
    backgroundColor: 'transparent',
  },
  diaSelecionado: {
    backgroundColor: '#038B4E', // Cor de fundo quando o dia está selecionado
  },
  diaTexto: {
    fontSize: 16,
    color: '#333',
  },
  textoDiaSelecionado: {
    color: 'white', // Cor do texto para o dia selecionado
  },
  linhaSeparadora: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  eventosContainer: {
    padding: 10,
  },
  evento: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000', // Sombra para destacar eventos
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dataTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#038B4E',
  },
  diaSemanaTexto: {
    fontSize: 14,
    color: '#666',
  },
  infoEvento: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detalheEvento: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  horaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horaEvento: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  botaoAdicionar: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#038B4E', // Cor de fundo do botão adicionar
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Sombra para o botão
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalConteudo: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
})
