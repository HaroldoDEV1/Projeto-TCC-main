import { TextInput, StyleSheet } from 'react-native'

export default InputField = ({ placeholder, keyboardType, secureTextEntry, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#797979"
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderBottomWidth: 2,
    borderColor: '#038B4E',
    paddingLeft: 10,
    color: '#797979',
  },
})


