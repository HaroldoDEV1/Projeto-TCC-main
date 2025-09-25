import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#F4F4F4',
    borderTopWidth: 1,
    borderTopColor: '#DADADA',
  },
  footerButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  footerButtonText: {
    fontSize: 16,
    color: '#007A33',
    textAlign: 'center',
    fontWeight: '600',
  },
});
