import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default function BulaScreen({ route }) {
  const { url } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
