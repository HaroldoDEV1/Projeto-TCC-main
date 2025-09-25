import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const CARD_WIDTH = (width / 2) - 20

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    width: width / 2 - 20,
    height: 150,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#038B4E',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    height:  80,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  
})

