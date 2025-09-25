import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Cor de fundo clara
    },
    card: {
        margin: 10,
        borderRadius: 8,
        elevation: 3,
    },
    cardImage: {
        height: 150, // Altura fixa para a imagem
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});

export default styles;
