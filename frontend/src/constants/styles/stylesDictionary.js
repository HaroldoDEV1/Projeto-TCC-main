import { StyleSheet } from 'react-native'
import { widthTela, heightTela } from '../dimensions'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#038B4E',
  },
  input: {
    height: 40,
    borderColor: '#038B4E',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#038B4E',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultsContainer: {
    paddingBottom: 20,
  },
  definitionContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
  },
  term: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#038B4E',
  },
  definition: {
    fontSize: 16,
    color: '#333333',
  },
})
