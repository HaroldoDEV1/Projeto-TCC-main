import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DADADA',
  },
  footerButton: {
    padding: 10,
    elevation: 2, 
  },
  footerButtonText: {
    fontSize: 16,
    color: '#007A33', // Cor do texto
    textAlign: 'center',
    fontWeight: '600',
  },
})
