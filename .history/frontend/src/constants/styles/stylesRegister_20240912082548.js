import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topContainer: {
    padding: 8,
  },
  formContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 16,
    paddingVertical: 10,
  },
  inputField: {
    fontSize: 16,
    color: '#333333',
    padding: 8,
  },
  label: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#038B4E',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerButton: {
    padding: 10,
    borderRadius: 5,
  },
  footerButtonText: {
    fontSize: 16,
    color: '#333333',
  },
});
