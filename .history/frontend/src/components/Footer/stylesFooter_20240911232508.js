import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#004d40',
    borderTopWidth: 1,
    borderTopColor: '#00332e',
    width: width,
  },
  footerButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#00796b',
  },
  footerButtonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
})
