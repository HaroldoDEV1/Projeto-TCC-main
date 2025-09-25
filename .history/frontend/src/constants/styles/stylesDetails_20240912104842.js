import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  contentContainer: {
    flex: 1,
    padding: 16
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333333',
    fontWeight: '500'
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: '#038B4E',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  button: {
    backgroundColor: '#038B4E',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0'
  },
  footerButton: {
    padding: 12,
    borderRadius: 6
  },
  footerButtonText: {
    fontSize: 16,
    color: '#333333'
  },
  displayText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000'
  }
})
