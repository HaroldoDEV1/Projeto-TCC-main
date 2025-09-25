import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
      },
      headerContainer: {
        backgroundColor: '#038B4E',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      mesTexto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
      contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 80, 
      },
      calendarioContainer: {
        marginTop: 20,
        marginBottom: 20,
      },
      diasLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      nomeDia: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        width: '14%',
        textAlign: 'center',
      },
      diasContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      dia: {
        width: '13%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7EF',
        margin: 2,
        borderRadius: 5,
      },
      diaSelecionado: {
        backgroundColor: 'rgba(3, 139, 78, 0.3)',
      },
      diaTexto: {
        fontSize: 18,
        color: 'black',
      },
      textoDiaSelecionado: {
        color: '#038B4E',
        fontWeight: 'bold',
      },
      linhaSeparadora: {
        borderBottomColor: '#038B4E',
        borderBottomWidth: 2,
        marginVertical: 20,
      },
      eventosContainer: {
        marginTop: 20,
      },
      evento: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      dataContainer: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dataTexto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
      },
      diaSemanaTexto: {
        fontSize: 12,
        color: 'gray',
      },
      infoEvento: {
        flex: 1,
      },
      detalheEvento: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
      },
      horaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      horaEvento: {
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
      },
      botaoAdicionar: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#038B4E',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 60
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalConteudo: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
      },
})