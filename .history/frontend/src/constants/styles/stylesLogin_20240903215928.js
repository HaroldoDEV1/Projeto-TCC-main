import { StyleSheet } from 'react-native'
import { heightTela, widthTela } from '../dimensions'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: widthTela,
    height: heightTela
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'left',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#038B4E',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#22402F',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  signUpText: {
    color: '#22402F',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    width: 200,
    height: 100,
    marginTop: 150,
  },
})