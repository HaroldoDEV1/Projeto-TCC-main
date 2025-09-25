import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa', // Cor de fundo azul claro
    },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#ffffff', // Fundo branco para os cartões
        elevation: 5, // Sombra leve
        overflow: 'hidden', // Garantir que o conteúdo não ultrapasse os limites do cartão
    },
    cardImage: {
        height: 180, // Altura maior para destacar a imagem
        borderBottomWidth: 1,
        borderBottomColor: '#00796b', // Borda inferior colorida
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#004d40', // Cor de texto verde escuro
    },
    cardDescription: {
        fontSize: 14,
        color: '#004d40', // Cor de texto verde escuro
        marginTop: 5,
    },
    columnWrapper: {
        justifyContent: 'space-around',
    },
});

export default styles;
