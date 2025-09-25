import { StyleSheet, Dimen } from 'react-native'
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
  },
  cardImage: {
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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

