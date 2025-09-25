import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    overflow: 'hidden',
  },
  cardImage: {
    width: width / 2 - 20,
    height: 150,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#038B4E',
    marginVertical: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    height: 60,
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
})
