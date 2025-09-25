import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './stylesFooter'

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Calendar')} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Agenda</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DictionaryTest')} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Dicionário</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('UserMenu')} style={styles.footerButton}>
        <Text style={styles.fo}
      </TouchableOpacity>
    </View>
  )
}
