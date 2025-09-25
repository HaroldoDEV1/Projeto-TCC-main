import React from 'react'
import { View, StyleSheet } from 'react-native'
import PDFView from 'react-native-pdf'

export dafault BulaScreen = ({ route }) => {
  const { pdfUri } = route.params;  // Recebe a URI do PDF via parâmetros de navegação

  return (
    <View style={styles.container}>
      <PDFView
        source={{ uri: pdfUri, cache: true }}
        style={styles.pdf}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
  },
});

