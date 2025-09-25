import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from '../../constants/styles/stylesMedicine'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function MedicineScreen({ route, navigation }) {
  const { medicineName, medicineDescription, medicinePrice } = route.params
  const pdfUri = 'file:///ass'

  return (
    <SafeAreaView style={styles.container}>
        <TopArea />

      <View style={styles.descriptionContainer}>
        <Text style={styles.categoryText}>{medicineName}</Text>
        <Text style={styles.description}>Descrição:</Text>
        <Text style={styles.description}>{medicineDescription}</Text>
        <Text style={styles.priceText}>Preço: R${medicinePrice}</Text>
        <TouchableOpacity style={styles.bula} onPress={() => navigation.navigate(medicineBula)}>
          <Text style={styles.bulaText}>ABRIR BULA</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />

    </SafeAreaView>
  )
}
