// stylesHome.js

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Cor de fundo clara
    },
    card: {
        margin: 8,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3, // Sombra para dar profundidade
    },
    cardImage: {
        height: 150,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 4,
        color: '#333', // Cor escura para o título
    },
    cardDescription: {
        fontSize: 14,
        color: '#757575', // Cor mais clara para a descrição
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginHorizontal: 8,
    },
    button: {
        backgroundColor: '#6200EE', // Cor de fundo roxa para o botão
        borderRadius: 50,
        padding: 12,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF', // Texto branco para o botão
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: '#6200EE',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
