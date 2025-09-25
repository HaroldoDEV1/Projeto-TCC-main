import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
    textAlign: 'left',
    lineHeight: 34,
  },
  titleHighlight: {
    color: '#038B4E',
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0', // Cor da linha separadora
    paddingVertical: 10,
  },
  inputField: {
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#038B4E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  forgotPasswordText: {
    color: '#22402F',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  signUpText: {
    color: '#22402F',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  signUpHighlight: {
    color: '#038B4E',
    fontWeight: 'bold',
  },
  adminText: {
    color: '#038B4E',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: width * 0.6,
    height: height * 0.2,
    resizeMode: 'contain',
  },
});
