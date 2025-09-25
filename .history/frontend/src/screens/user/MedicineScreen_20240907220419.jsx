import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import styles from '../../constants/styles/stylesMedicine'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function MedicineScreen({ route, navigation }) {
  const { medicineName, medicineDescription, medicinePrice, medicineBula } = route.params

  return (
    <SafeAreaView style={styles.container}>
        <TopArea />

      <View style={styles.descriptionContainer}>
        <Text style={styles.categoryText}>{medicineName}</Text>
        <Text style={styles.description}>Descrição:</Text>
        <Text style={styles.description}>{medicineDescription}</Text>
        <Text style={styles.priceText}>Preço: R${medicinePrice}</Text>
        <TouchableOpacity style={styles.bula} onPress={() => navigation.navigate('MedicineScreen', { medicineBula })}>
          <Text style={styles.bulaText}>ABRIR BULA</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bulaContainer}>
        {medicineBula && <WebView source={{ uri: medicineBula }} style={styles.bulaWebView} />}
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}

const localStyles = StyleSheet.create({
  bulaWebView: {
    height: 500,
    margin: 10,
  },
  bulaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
