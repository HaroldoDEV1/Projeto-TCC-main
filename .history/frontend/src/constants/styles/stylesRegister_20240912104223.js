import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
    lineHeight: 32,
    textAlign: 'left',
  },
  titleHighlight: {
    color: '#038B4E',
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 8,
  },
  inputField: {
    fontSize: 16,
    color: '#333333',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#038B4E',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  forgotPasswordText: {
    color: '#038B4E',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 12,
  },
  signUpText: {
    color: '#038B4E',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 12,
  },
  signUpHighlight: {
    fontWeight: 'bold',
  },
  adminText: {
    color: '#038B4E',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 12,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: width * 0.6,
    height: height * 0.2,
    resizeMode: 'contain',
  },
})
