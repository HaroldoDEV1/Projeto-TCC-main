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
  },
  titleHighlight: {
    color: '#22402F',
  },
  button: {
    backgroundColor: '#038B4E',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
    width: 180,
    height: 90,
  },
})
