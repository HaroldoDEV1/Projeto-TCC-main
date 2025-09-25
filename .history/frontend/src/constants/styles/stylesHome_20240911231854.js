import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const CARD_WIDTH = (width / 2) - 20; // Ajusta o tamanho do card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
    card: {
        width: CARD_WIDTH,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 5,
    },
    cardImage: {
        height: 150,
        width: '100%',
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e8b57', // Verde escuro
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e8b57', // Verde escuro
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
})

export default styles

